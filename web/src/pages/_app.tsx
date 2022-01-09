import '../styles/globals.css';
import '../styles/tailwind.css';

import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@redux/store';
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider 
      attribute='class'
      // forcedTheme='light'
    >
      <ReduxProvider
        store={store}
      >
        <Component 
          key={router.pathname} 
          {...pageProps} 
        />
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
