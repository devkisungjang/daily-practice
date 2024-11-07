import { create } from "zustand";

// store의 타입을 정의
export interface dataType {
  count: number;

  newName: string;
  setNewName: (parent: string) => void;

  newAge: string;
  setNewAge: (parent: string) => void;

  newGen: string;
  setNewGen: (parent: string) => void;

  dropDownView: boolean;
  setDropDownView: (parent: boolean) => void;
}

// store를 create
const useStore = create((set) => ({
  // 카운터
  // 기본값
  count: 0,
  // 증가식
  increment: () => set((state: any) => ({ count: state.count + 1 })),

  // 증감식
  decrement: () => set((state: any) => ({ count: state.count - 1 })),

  // 동물
  // 동물 이름
  newName: "", // 초기값
  setNewName: (text: string) => set({ newName: text }), // 상태변화 함수
  // 동물 나이
  newAge: "",
  setNewAge: (text: string) => set({ newAge: text }),
  // 동물 성별
  newGen: "",
  setNewGen: (text: string) => set({ newGen: text }),

  // 드롭다운
  dropDownView: false,
  setDropDownView: (dropDownView: boolean) => set({ dropDownView }),
}));

export default useStore;
