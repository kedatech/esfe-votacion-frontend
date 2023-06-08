import create from "zustand";

const useElement = create((set) => ({
  menu: false,
  setMenu: (isOpen) => set({ menu: isOpen })
  
}));

export default useElement;
