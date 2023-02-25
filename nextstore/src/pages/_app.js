import Header from '@components/Header';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NVJBPKELB9" />
      <Script id="google-analytics" strategy="afterInteracive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NVJBPKELB9');
      `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
