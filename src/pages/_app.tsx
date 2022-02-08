import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Inspect from 'inspx';
import { SiteContextProvider } from 'src/lib/context';
import { AppPropsWithLayout } from 'src/types';
import { Header } from 'src/components';

import 'src/styles/app.css';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Inspect>
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
        defaultTheme="system"
      >
        <SiteContextProvider>
          <Head>
            <title>acrolect</title>
          </Head>
          <div className="flex flex-col min-h-screen">
            <Header />
            {getLayout(<Component {...pageProps} />, pageProps)}

            {/* <Footer /> */}
          </div>
        </SiteContextProvider>
      </ThemeProvider>
    </Inspect>
  );
};

export default MyApp;
