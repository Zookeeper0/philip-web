import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    shadow: { dark: string };
    gradient: { primary: string; dark: string };
    colors: {
      [primary: string]: string;
      [primaryHover: string]: string;
      [func: string]: string;
      [funcHover: string]: string;
      dark: string;

      mainBg: string;
      kakaoBg: string;
      kakaoBgHover: string;

      DisabledBtn: string;

      inputDarkBg: string;
      inputDarkBorder: string;

      subTxt: string;
      kakaoTxt: string;

      black: string;
      white: string;
    };
  }
}
