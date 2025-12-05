import { create } from 'zustand';

const useModelStore = create((set) => ({
    isLoaded: false,
    setIsLoaded: (isLoaded) => set({ isLoaded }),
    currentAnimation: 'idle',
    setAnimation: (animation) => set({ currentAnimation: animation }),
}));

export default useModelStore;
