import { ThemeType } from './type';

const light: ThemeType = {
  colors: {
    brightBlue: 'hsl(220, 98%, 61%)',
    background: {
      linearGradient: 'hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
    },
    neutrals: {
      primary: 'hsl(0, 0%, 98%)',
      secundary: 'hsl(236, 33%, 92%)',
      terdiary: 'hsl(235, 19%, 35%)',
      light: 'hsl(236, 9%, 61%)',
      semi: 'hsl(233, 11%, 84%)',
      thin: 'hsl(236, 33%, 92%)',
    },
    text: 'hsl(0, 0%, 98%)',
  },
  fonts: {
    josefin: 'Josefin Sans, sans-serif',
  },
};

const dark: ThemeType = {
  colors: {
    brightBlue: 'hsl(220, 98%, 61%)',
    background: {
      linearGradient: 'hsl(192, 100%, 67%) ,hsl(280, 87%, 65%)',
    },
    neutrals: {
      primary: 'hsl(235, 21%, 11%)',
      secundary: 'hsl(235, 24%, 19%)',
      terdiary: 'hsl(234, 39%, 85%)',
      light: 'hsl(234, 11%, 52%)',
      semi: 'hsl(233, 14%, 35%)',
      thin: 'hsl(237, 14%, 26%)',
    },
    text: 'hsl(0, 0%, 98%)',
  },
  fonts: {
    josefin: 'Josefin Sans, sans-serif',
  },
};

export const theme = {
  dark,
  light,
};
