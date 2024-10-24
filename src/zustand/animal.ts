import { create } from "zustand";

const useStore = create((set) => ({
  // 기본값
  count: 0,
  // 증가식
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  // 증감식
  decrement: () => set((state: any) => ({ count: state.count - 1 })),
}));

export default useStore;
