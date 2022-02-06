type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return <div className="padded-container">{children}</div>;
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
