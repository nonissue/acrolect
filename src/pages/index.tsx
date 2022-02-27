import { GetStaticProps } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';
import { WordItem } from 'src/types';
import { getLayout } from 'src/layouts/IndexLayout';
import { HeroWord } from 'src/components/HeroWord';
import { PageWithLayout } from 'src/types';

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

const IndexPage: PageWithLayout<{ wordJSON: string }> = ({ wordJSON }) => {
  const word: WordItem = JSON.parse(wordJSON);

  return (
    <section className="text-base text-slate-600 dark:text-slate-300 divide-y-0 divide-slate-300 dark:divide-slate-700 divide-dashed">
      <HeroWord word={word} />
    </section>
  );
};

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
