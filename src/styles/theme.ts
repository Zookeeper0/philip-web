import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  shadow: {
    dark: "0 0 14px 2px rgba(0, 0, 0, 0.4)",
  },
  gradient: {
    primary:
      "linear-gradient(108.17deg, #4453FF 52.05%, #0028B4 163.25%, #4462FF 200.35%)",
    dark: "linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(0,0,0, 0.9) 100%)",
  },
  colors: {
    primary: "#4462FF",
    primaryHover: "#3451E7",
    dark: "#171717",
    darkHover: "#0C0C0C",
    func: "#646464",
    funcHover: "#585858",
    search: "#2E2E2E",
    searchHover: "#171717",

    mainBg: "#212121",
    searchBarBg: "#545454",
    kakaoBg: "#F7E600",
    kakaoBgHover: "#EBDB00",
    vipBg: "#4637DE",
    vipBgHover: "#3728CB",

    disabledBtn: "#dddddd",

    inputDarkBg: "#424242",
    inputDarkBorder: "#4563FF",

    subTxt: "#C0C0C0",
    kakaoTxt: "#181600",
    categorySubTxt: "#BABABA",

    black: "#000000",
    white: "#ffffff",
  },
};
