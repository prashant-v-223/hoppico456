// store.ts
import create from "zustand";


const useStore = create((set) => ({
    item: {},
    user: {},
    setItem: (item) => set((state) => ({ item: item })),
    setUser: (user) => set((state) => ({ user: user })),
}));

export default useStore;
