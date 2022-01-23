import { createContext, createRef } from "react";

export interface Row {
  id: string;
  text: string;
  type: string;
}

export interface MarkdownContextType {
  rows: Row[];
  refs: React.RefObject<HTMLDivElement[]>;
  addRowAfterId: (id: string) => void;
  removeRowById: (id: string) => void;
  changeRowType: (id: string, type: string) => void;
  changeText: (id: string, text: string) => void;
  changeVerticalFocus: (id: string, step: number) => void;
}

export const MarkdownContext = createContext<MarkdownContextType>({
  rows: [],
  refs: createRef<HTMLDivElement[]>(),
  addRowAfterId: () => {},
  changeRowType: () => {},
  removeRowById: () => {},
  changeText: () => {},
  changeVerticalFocus: () => {},
});
