type Props = {
  children: React.ReactElement;
};

function IndexLayout({ children }: Props): React.ReactElement {
  return <div className="index-container">{children}</div>;
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <IndexLayout>{page}</IndexLayout>
);

export { IndexLayout };
