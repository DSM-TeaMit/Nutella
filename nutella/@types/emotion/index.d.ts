import "@emotion/react";
import { Theme as ThemeType } from "../../src/utils/theme/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
