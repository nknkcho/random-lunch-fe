import 'styled-components';
// theme 파일에 들어갈 변수들의 타입을 정한다.
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      blue: string;
    };
  }
}
