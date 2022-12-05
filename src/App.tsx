import { ThemeProvider } from 'styled-components';
import { useAtom } from 'jotai';
import { ToastContainer } from 'react-toastify';

import { themeSelectedAtom } from './atoms';
import { theme } from './styles/theme';
import { Home } from './pages/Home';
import { GlobalCSS } from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [selectedTheme] = useAtom(themeSelectedAtom);

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <GlobalCSS />
      <Home />
      <ToastContainer />
    </ThemeProvider>
  );
}
