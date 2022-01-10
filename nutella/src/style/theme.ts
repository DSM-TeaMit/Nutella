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
}

export interface Theme {
  colors: Color;
  fonts: Font;
}

const colors: Color = {
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
};

const fonts: Font = {
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

const theme: Theme = {
  colors,
  fonts,
};

export default theme;
