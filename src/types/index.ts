import type { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

export type PageWithLayout<P> = NextComponentType<NextPageContext, any, P> & {
  getLayout?: (
    page: JSX.Element,
    layoutProps: Record<string, unknown>
  ) => JSX.Element;
};

export type AppPropsWithLayout<P = Record<string, unknown>> = AppProps<P> & {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: PageWithLayout<P> & { theme: string };
};

export type WordItem = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  definition: string;
  published: boolean;
  publishedDate: string;
};

export type WordsList = WordItem[];
