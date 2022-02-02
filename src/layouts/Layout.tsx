import { Header, Footer } from 'src/components';

type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-700 dark:text-slate-100">
      <Header />
      <div className="relative z-10 grow shrink max-w-3xl padded-container">
        <div className="min-w-full ">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
