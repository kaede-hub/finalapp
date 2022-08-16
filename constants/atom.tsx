import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// trashやdraftのTODO LISTとは別
export const todoListState = atom({
  key: "todoList",
  default: [],
  // 値の永続化
  effects_UNSTABLE: [persistAtom],
});

// 個別のTODOを保持。EditやShowで使用。
export const todoItemState = atom({
  key: "todoItem",
  default: {},
  // 値の永続化
  effects_UNSTABLE: [persistAtom],
});
