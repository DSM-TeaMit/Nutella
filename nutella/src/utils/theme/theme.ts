export interface Font {
  h1: string;
  h2: string;
  h3: string;
  subtitle1: string;
  subtitle2: string;
  body1: string;
  body2: string;
  body3: string;
  description: string;
}

export interface Color {
  primary: {
    default: string;
    hover: string;
    click: string;
  };
  red: {
    default: string;
    hover: string;
    click: string;
  };
  green: {
    default: string;
  };
  grayscale: {
    white: string;
    lightGray1: string;
    lightGray2: string;
    gray1: string;
    gray2: string;
    darkGray: string;
    black: string;
  };
  background: string;
}

export interface Theme {
  colors: Color;
  fonts: Font;
  filters: Color;
}

export const colors: Color = {
  primary: {
    default: "#0094FF",
    hover: "#66BFFF",
    click: "#0076CC",
  },
  red: {
    default: "#F56C6C",
    hover: "#F59393",
    click: "#B24F4F",
  },
  green: {
    default: "#1CD0A1",
  },
  grayscale: {
    white: "#FFFFFF",
    lightGray1: "#F0F3F5",
    lightGray2: "#E0E7EC",
    gray1: "#B4BEC5",
    gray2: "#717A81",
    darkGray: "#494E52",
    black: "#1C1E20",
  },
  background: "#F9FCFE",
};

export const fonts: Font = {
  h1: `bold 2.25rem 'Noto Sans KR', 'sans-serif'`,
  h2: `bold 1.75rem 'Noto Sans KR', 'sans-serif'`,
  h3: `bold 1.5rem 'Noto Sans KR', 'sans-serif'`,
  subtitle1: `500 1.25rem 'Noto Sans KR', 'sans-serif'`,
  subtitle2: `500 1.125rem 'Noto Sans KR', 'sans-serif'`,
  body1: `bold 1rem 'Noto Sans KR', 'sans-serif'`,
  body2: `500 1rem 'Noto Sans KR', 'sans-serif'`,
  body3: `400 1rem 'Noto Sans KR', 'sans-serif'`,
  description: `400 0.75rem 'Noto Sans KR', 'sans-serif'`,
};

const filters: Color = {
  primary: {
    default:
      "invert(45%) sepia(75%) saturate(5004%) hue-rotate(189deg) brightness(110%) contrast(102%)",
    hover:
      "invert(70%) sepia(42%) saturate(2552%) hue-rotate(181deg) brightness(103%) contrast(106%)",
    click:
      "invert(29%) sepia(78%) saturate(1787%) hue-rotate(186deg) brightness(95%) contrast(101%)",
  },
  red: {
    default:
      "invert(44%) sepia(32%) saturate(1431%) hue-rotate(314deg) brightness(124%) contrast(92%)",
    hover:
      "invert(76%) sepia(51%) saturate(713%) hue-rotate(301deg) brightness(96%) contrast(100%)",
    click:
      "invert(42%) sepia(17%) saturate(3452%) hue-rotate(320deg) brightness(79%) contrast(73%)",
  },
  green: {
    default:
      "invert(58%) sepia(71%) saturate(451%) hue-rotate(114deg) brightness(98%) contrast(96%)",
  },
  grayscale: {
    white:
      "invert(100%) sepia(100%) saturate(0%) hue-rotate(323deg) brightness(102%) contrast(101%)",
    lightGray1:
      "invert(100%) sepia(1%) saturate(4453%) hue-rotate(172deg) brightness(98%) contrast(97%)",
    lightGray2:
      "invert(95%) sepia(4%) saturate(689%) hue-rotate(184deg) brightness(102%) contrast(85%)",
    gray1: "invert(95%) sepia(4%) saturate(784%) hue-rotate(175deg) brightness(81%) contrast(88%)",
    gray2: "invert(48%) sepia(16%) saturate(218%) hue-rotate(164deg) brightness(94%) contrast(88%)",
    darkGray:
      "invert(30%) sepia(17%) saturate(186%) hue-rotate(164deg) brightness(92%) contrast(91%)",
    black: "invert(6%) sepia(6%) saturate(1212%) hue-rotate(169deg) brightness(91%) contrast(86%)",
  },
  background:
    "invert(100%) sepia(3%) saturate(3901%) hue-rotate(173deg) brightness(100%) contrast(99%)",
};

const theme: Theme = {
  colors,
  fonts,
  filters,
};

export default theme;
