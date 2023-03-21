import { atom } from "recoil";
import { v1 } from "uuid";

export const adminTokenState = atom({
  key: `adminTokenState/${v1()}`,
  default: null,
});
