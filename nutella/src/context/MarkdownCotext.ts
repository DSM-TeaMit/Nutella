import { createContext } from "react";

export interface Row {
  id: string;
  text: string;
  type: string;
}

export interface MarkdownContextType {
  rows: Row[];
  addRowAfterId: (id: string) => void;
  removeRowById: (id: string) => void;
  changeRowType: (id: string, type: string) => void;
  changeText: (id: string, text: string) => void;
}

export const MarkdownContext = createContext<MarkdownContextType>({
  rows: [],
  addRowAfterId: () => {},
  changeRowType: () => {},
  removeRowById: () => {},
  changeText: () => {},
});
