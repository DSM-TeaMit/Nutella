import { createContext, createRef } from "react";

export interface Row {
  id: string;
  text: string;
  type: string;
  tab: number;
}

export interface MarkdownContextType {
  rows: Row[];
  refs: React.RefObject<HTMLElement[]>;
  addRowAfterId: (id: string) => void;
  removeRowById: (id: string) => void;
  changeRowType: (id: string, type: string) => void;
  changeText: (id: string, text: string) => void;
  changeVerticalFocus: (id: string, step: number) => void;
  changeTab: (id: string, step: number) => void;
}

export const MarkdownContext = createContext<MarkdownContextType>({
  rows: [],
  refs: createRef<HTMLElement[]>(),
  addRowAfterId: () => {},
  changeRowType: () => {},
  removeRowById: () => {},
  changeText: () => {},
  changeVerticalFocus: () => {},
  changeTab: () => {},
});
