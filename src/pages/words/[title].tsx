import { GetServerSideProps } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';
import { PageWithLayout, WordItem } from 'src/types';
import { getLayout } from 'src/layouts/IndexLayout';
import { HeroWord } from 'src/components/HeroWord';

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
  let word = undefined;

  try {
    word = await prisma.word.findFirst({
      where: { published: true, title: context.params?.title as string },
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

  if (!word) {
    throw new Error('NO word found');
  }

  return {
    props: { wordJSON: JSON.stringify(word) },
  };
};

const WordPage: PageWithLayout<{ wordJSON: string }> = ({ wordJSON }) => {
  const word: WordItem = JSON.parse(wordJSON);

  return (
    <section className="text-base text-slate-600 dark:text-slate-300 divide-y-0 divide-slate-300 dark:divide-slate-700 divide-dashed">
      <HeroWord word={word} />
    </section>
  );
};

WordPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default WordPage;
