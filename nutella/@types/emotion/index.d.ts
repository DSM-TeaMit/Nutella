import "@emotion/react";
import { Theme as ThemeType } from "../../src/style/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
