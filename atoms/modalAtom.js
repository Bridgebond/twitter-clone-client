import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const postIdState = atom({
  key: "postIdState",
  default: "",
});


// This is how to handle state management (using recoil => an alternative to redux or the context api)