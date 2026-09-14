import { useState, useEffect } from 'react';

// This is a mock authentication hook. 
// In a real app, replace this with your actual auth logic (e.g., Supabase, Firebase, NextAuth, etc.)
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Simulate checking auth state (e.g. reading from cookies/localstorage or making an API call)
    // For the template, we just assume they are authenticated immediately.
    const timer = setTimeout(() => setIsAuthenticated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return { 
    isAuthenticated,
    isLoading: isAuthenticated === null
  };
}
