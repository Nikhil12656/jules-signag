-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Workspaces
CREATE TABLE workspaces (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users (Extends auth.users, or you can manage separately, assuming mapping from auth via edge functions or triggers. Here we create a profiles table tied to auth)
CREATE TABLE profiles (
    id UUID PRIMARY KEY, -- References auth.users
    workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
    full_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'viewer', -- owner, admin, editor, viewer
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Screens
CREATE TABLE screens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'offline',
    pairing_code VARCHAR(10) UNIQUE,
    last_heartbeat TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assets
CREATE TABLE assets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- image, video, pdf, etc.
    url TEXT NOT NULL,
    size INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Playlists
CREATE TABLE playlists (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Playlist Items
CREATE TABLE playlist_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    playlist_id UUID REFERENCES playlists(id) ON DELETE CASCADE,
    asset_id UUID REFERENCES assets(id) ON DELETE CASCADE,
    duration INTEGER DEFAULT 10,
    "order" INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Widgets (Apps)
CREATE TABLE widgets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL, -- clock, weather, rss, youtube
    config JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Schedules
CREATE TABLE schedules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
    screen_id UUID REFERENCES screens(id) ON DELETE CASCADE,
    playlist_id UUID REFERENCES playlists(id),
    widget_id UUID REFERENCES widgets(id),
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE,
    priority INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activity Logs
CREATE TABLE activity_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    action VARCHAR(255) NOT NULL,
    details JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies Setup

-- Enable RLS
ALTER TABLE workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE screens ENABLE ROW LEVEL SECURITY;
ALTER TABLE assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE playlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE playlist_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE widgets ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Utility function to get current user's workspace
CREATE OR REPLACE FUNCTION get_user_workspace()
RETURNS UUID AS $$
    SELECT workspace_id FROM profiles WHERE id = auth.uid() LIMIT 1;
$$ LANGUAGE sql STABLE;

-- Workspaces Policies
CREATE POLICY "Users can view their own workspace"
ON workspaces FOR SELECT
USING (id = get_user_workspace());

-- Profiles Policies
CREATE POLICY "Users can view profiles in their workspace"
ON profiles FOR SELECT
USING (workspace_id = get_user_workspace());

CREATE POLICY "Users can update their own profile"
ON profiles FOR UPDATE
USING (id = auth.uid());

-- Screens Policies
CREATE POLICY "Users can view screens in their workspace"
ON screens FOR SELECT
USING (workspace_id = get_user_workspace());

CREATE POLICY "Users can manage screens in their workspace"
ON screens FOR ALL
USING (workspace_id = get_user_workspace());

-- Assets Policies
CREATE POLICY "Users can view assets in their workspace"
ON assets FOR SELECT
USING (workspace_id = get_user_workspace());

CREATE POLICY "Users can manage assets in their workspace"
ON assets FOR ALL
USING (workspace_id = get_user_workspace());

-- Playlists Policies
CREATE POLICY "Users can view playlists in their workspace"
ON playlists FOR SELECT
USING (workspace_id = get_user_workspace());

CREATE POLICY "Users can manage playlists in their workspace"
ON playlists FOR ALL
USING (workspace_id = get_user_workspace());

-- Playlist Items Policies
CREATE POLICY "Users can view playlist items in their workspace"
ON playlist_items FOR SELECT
USING (playlist_id IN (SELECT id FROM playlists WHERE workspace_id = get_user_workspace()));

CREATE POLICY "Users can manage playlist items in their workspace"
ON playlist_items FOR ALL
USING (playlist_id IN (SELECT id FROM playlists WHERE workspace_id = get_user_workspace()));

-- Widgets Policies
CREATE POLICY "Users can view widgets in their workspace"
ON widgets FOR SELECT
USING (workspace_id = get_user_workspace());

CREATE POLICY "Users can manage widgets in their workspace"
ON widgets FOR ALL
USING (workspace_id = get_user_workspace());

-- Schedules Policies
CREATE POLICY "Users can view schedules in their workspace"
ON schedules FOR SELECT
USING (workspace_id = get_user_workspace());

CREATE POLICY "Users can manage schedules in their workspace"
ON schedules FOR ALL
USING (workspace_id = get_user_workspace());

-- Activity Logs Policies
CREATE POLICY "Users can view activity logs in their workspace"
ON activity_logs FOR SELECT
USING (workspace_id = get_user_workspace());
