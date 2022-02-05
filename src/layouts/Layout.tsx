type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    // <div className=" font-sans text-slate-700 dark:text-slate-100 layout-bg">
    <div className="padded-container">{children}</div>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
