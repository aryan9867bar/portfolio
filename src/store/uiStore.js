import { create } from 'zustand';

const useUIStore = create((set) => ({
    isMenuOpen: false,
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    closeMenu: () => set({ isMenuOpen: false }),
    theme: 'dark',
    setTheme: (theme) => set({ theme }),
}));

export default useUIStore;
