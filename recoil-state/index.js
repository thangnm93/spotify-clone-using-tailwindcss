import { atom, selector } from "recoil";
export const headerColorHoverAtom = atom({
  key: "headerColorHoverAtom",
  default: "rgba(99, 64, 35, 1)",
});

export const headerColorHoverSelector = selector({
  key: "headerColorHoverSelector",
  get: ({ get }) => {
    return get(headerColorHoverAtom);
  },
});
