import { Prisma, PrismaClient } from '@prisma/client';
import { GetStaticProps } from 'next';
import superjson from 'superjson';

import { HeroWord } from 'src/components/HeroWord';
import { getLayout } from 'src/layouts/IndexLayout';
import { WordItem } from 'src/types';
import { PageWithLayout } from 'src/types';
import { trpc } from 'src/utils/trpc';

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  let wordResult;
  let word;

  try {
    wordResult = await prisma.word.findMany({
      where: { published: true },
      orderBy: { publishedDate: 'desc' },
      take: 1,
    });

    word = wordResult[0];
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
    props: { wordJSON: superjson.stringify(word) },
  };
};

const IndexPage: PageWithLayout<{ wordJSON: string }> = ({ wordJSON }) => {
  let word: WordItem;
  if (wordJSON) {
    word = superjson.parse(wordJSON);
  } else {
    return <div>LOADING</div>;
  }

  const wordQuery = trpc.useQuery(['hello', { text: 'client' }]);

  if (wordQuery.status !== 'success' || !wordQuery.data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="text-base text-slate-600 dark:text-slate-300 divide-y-0 divide-slate-300 dark:divide-slate-700 divide-dashed">
      {/* {wordQuery.data.greeting} */}
      <HeroWord word={word} />
    </section>
  );
};

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
