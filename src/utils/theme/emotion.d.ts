import "@emotion/react";
import { Theme as ThemeType } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
