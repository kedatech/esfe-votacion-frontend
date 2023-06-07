import create from "zustand";

const useElement = create((set) => ({
  dark: false,
  setTheme: () => set((state) => ({ dark: !state.dark })),
  modalMenu: "modalMenu"
}));

export default useElement;
