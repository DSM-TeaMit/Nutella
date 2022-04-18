import { createContext, createRef } from "react";
import { Tag } from "../interface";

export interface Row {
  id: string;
  text: string;
  type: Tag;
  tab: number;
}

export interface MarkdownContextType {
  rows: Row[];
  setRows: (rows: Row[]) => void;
  disabled?: boolean;
  refs: React.RefObject<HTMLElement[]>;
  addRowAfterId: (id: string) => void;
  addImages: (id: string, files: File[], projectUuid: string) => Promise<void>;
  removeRowById: (id: string) => void;
  changeRowType: (id: string, type: Tag) => void;
  changeText: (id: string, text: string) => void;
  changeVerticalFocus: (id: string, step: number) => void;
  changeTab: (id: string, step: number) => void;
}

export const MarkdownContext = createContext<MarkdownContextType>({
  rows: [],
  setRows: () => {},
  refs: createRef<HTMLElement[]>(),
  addRowAfterId: () => {},
  addImages: async () => {},
  changeRowType: () => {},
  removeRowById: () => {},
  changeText: () => {},
  changeVerticalFocus: () => {},
  changeTab: () => {},
});
