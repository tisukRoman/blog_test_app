import { DefaultTheme } from 'styled-components';

interface MyDefaultTheme extends DefaultTheme {
  colors: {
    dark: string;
    green: string;
    yellow: string;
    orange: string;
    red: string;
  };
}

const myTheme: MyDefaultTheme = {
  colors: {
    dark: '#264653',
    green: '#2a9d8f',
    yellow: '#e9c46a',
    orange: '#f4a261',
    red: '#e76f51',
  },
};

export { myTheme };
