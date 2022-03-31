import { Theme, ThemeContext } from "@emotion/react";
import { useContext } from "react";

const useThemeContext = () => useContext(ThemeContext) as Theme;

export default useThemeContext;
