import { Prisma, PrismaClient } from '@prisma/client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import superjson from 'superjson';

import { getLayout } from 'src/layouts/Layout';
import { WordsList } from 'src/types';

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async () => {
  let wordsList = undefined;

  try {
    wordsList = await prisma.word.findMany({
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
    props: { wordsJSON: superjson.stringify(wordsList) },
  };
};

const WordsListPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  let words: WordsList | undefined = undefined;

  if (props.wordsJSON) {
    words = superjson.parse(props.wordsJSON);
  }

  if (words?.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="p-8 text-base text-slate-600 dark:text-slate-200 bg-slate-50 dark:bg-slate-700 shadow-2xl shadow-slate-200 dark:shadow-slate-900/70 sm:py-10 sm:px-12 sm:rounded-none">
      <ul className="divide-y divide-slate-300 dark:divide-slate-400/40 divide-dotted">
        {words?.map((word) => {
          return (
            <li key={word.title} className="py-4">
              <Link href={`/words/${word.title}`}>
                <a className="font-serif text-3xl font-bold leading-loose capitalize">
                  {word.title}
                </a>
              </Link>
              <p className="">{word.definition}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

WordsListPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default WordsListPage;
