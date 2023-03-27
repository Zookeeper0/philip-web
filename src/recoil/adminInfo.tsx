import { atom } from "recoil";
import { v1 } from "uuid";

export const adminInfoState = atom({
  key: `adminInfoState/${v1()}`,
  default:
    typeof window !== "undefined"
      ? window.localStorage.getItem("adminOid")
      : null,
});
