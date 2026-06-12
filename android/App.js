import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [pairingCode, setPairingCode] = useState('');
  const [isPaired, setIsPaired] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load and checking for existing pairing
    setTimeout(() => {
      // Generate random pairing code for demo
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      setPairingCode(code);
      setLoading(false);
    }, 1000);

    // In a real app, this would initialize Supabase, check local async storage
    // for an existing pairing token, and if missing, subscribe to realtime events
    // waiting for a pairing command from the server.
    // It would also setup background tasks for heartbeat and offline caching.
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Initializing Player...</Text>
      </View>
    );
  }

  if (!isPaired) {
    return (
      <View style={styles.container}>
        <View style={styles.pairingBox}>
          <Text style={styles.title}>Screen Player</Text>
          <Text style={styles.subtitle}>Enter this code in your dashboard to pair this device</Text>
          <View style={styles.codeContainer}>
            <Text style={styles.code}>{pairingCode}</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Playing content...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827', // dark gray
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    backgroundColor: '#ffffff',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
  },
  pairingBox: {
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#9CA3AF',
    marginBottom: 40,
    textAlign: 'center',
  },
  codeContainer: {
    backgroundColor: '#1F2937',
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#374151',
  },
  code: {
    fontSize: 48,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    letterSpacing: 8,
    color: '#60A5FA', // blue
  },
});
