import type { NextPage } from 'next/types';
import { getLayout } from 'src/layouts/Layout';

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => (
  <>
    <section className="text-base text-slate-600 dark:text-slate-300 divide-y-0 divide-slate-300 dark:divide-slate-700 divide-dashed">
      <h1 className="my-4 text-4xl font-bold">Acrolect</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        pretium aenean pharetra. Orci eu lobortis elementum nibh tellus
        molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel
        turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
        tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
        duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed
        blandit libero volutpat.
      </p>
    </section>
  </>
);

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
