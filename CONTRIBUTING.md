# Contributing Guidelines

When contributing to this Digital Signage platform, please adhere to the following architecture principles:

1. **Multi-Tenancy First:** Every database query and Edge Function must operate within the context of a `workspace_id`. Never bypass RLS in the client applications.
2. **Component Reusability:** Place common UI elements (buttons, inputs, cards) in `web/src/components/ui/` and complex view patterns (tables, grids) in `web/src/components/cms/`.
3. **Type Safety:** TypeScript is mandatory. Ensure all API responses, database queries, and component props are strictly typed.
4. **Android Performance:** The Android player app is designed to run 24/7. Prioritize memory management and implement robust offline caching strategies.
