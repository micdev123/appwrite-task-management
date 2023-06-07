import { create } from 'zustand';

// Define Zustand store for authentication state
const useAuthStore = create((set) => ({
    user: null,
    setUser: (user) => set(() => ({ user })),
    logout: () => set(() => ({ user: null })),
}));

export default useAuthStore;