/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Inspect from 'inspx';
import { SiteContextProvider } from 'src/lib/context';

import 'src/styles/app.css';

type ComponentWithLayout<P> = NextComponentType<NextPageContext, any, P> & {
  getLayout?: (
    page: JSX.Element,
    layoutProps: Record<string, unknown>
  ) => JSX.Element;
};

type AppPropsWithLayout<P = Record<string, unknown>> = AppProps<P> & {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: ComponentWithLayout<P> & { theme: string };
};

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
            <title>GDSH.IT</title>
          </Head>

          {getLayout(<Component {...pageProps} />, pageProps)}
        </SiteContextProvider>
      </ThemeProvider>
    </Inspect>
  );
};

export default MyApp;
