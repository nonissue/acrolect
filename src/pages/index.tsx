import { GetStaticProps, NextPageWithLayout } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';
import { WordItem } from 'src/types';
import { getLayout } from 'src/layouts/Layout';
import { HeroWord } from 'src/components/HeroWord';

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  let word = undefined;

  try {
    word = await prisma.word.findMany({
      where: { published: true },
      orderBy: { publishedDate: 'desc' },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        );
      }
    }
    throw e;
  }

  return {
    props: { wordJSON: JSON.stringify(word[0]) },
  };
};

const IndexPage: NextPageWithLayout<{ wordJSON: string }> = ({ wordJSON }) => {
  const word: WordItem = JSON.parse(wordJSON);

  return (
    <section className="text-base text-slate-600 dark:text-slate-300 divide-y-0 divide-slate-300 dark:divide-slate-700 divide-dashed">
      <HeroWord word={word} />
      {/* <p className="hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        pretium aenean pharetra. Orci eu lobortis elementum nibh tellus
        molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel
        turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
        tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
        duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed
        blandit libero volutpat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis
        elementum nibh tellus molestie. Vulputate dignissim suspendisse in est.
        Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi
        vitae suscipit tellus mauris. Posuere morbi leo urna molestie at
        elementum eu. Urna duis convallis convallis tellus. Urna molestie at
        elementum eu. Nunc sed blandit libero volutpat. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra.
        Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim
        suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel
        risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna
        molestie at elementum eu. Urna duis convallis convallis tellus. Urna
        molestie at elementum eu. Nunc sed blandit libero volutpat. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Turpis egestas pretium
        aenean pharetra. Orci eu lobortis elementum nibh tellus molestie.
        Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc.
        Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris.
        Posuere morbi leo urna molestie at elementum eu. Urna duis convallis
        convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero
        volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
        egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus
        molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel
        turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
        tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
        duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed
        blandit libero volutpat.
      </p> */}
    </section>
  );
};

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
