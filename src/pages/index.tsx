import type { NextPage } from 'next/types';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { getLayout } from 'src/layouts/Layout';

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => (
  <>
    <section className="text-base text-slate-600 dark:text-slate-300 divide-y-0 divide-slate-300 dark:divide-slate-700 divide-dashed">
      <div className="p-1 mx-auto bg-gradient-to-r from-indigo-500 dark:from-indigo-300 via-purple-500 dark:via-purple-300 to-pink-500 dark:to-pink-300 rounded-2xl shadow">
        <div className="p-6 text-slate-500 dark:text-slate-200 bg-white dark:bg-gray-900 rounded-xl shadow-sm dark:shadow-xl sm:p-10">
          <h5 className="mb-4 text-3xl font-black tracking-tight text-indigo-900 dark:text-indigo-100 sm:mb-5 sm:text-5xl lg:text-6xl">
            Another Next
            <span className="font-mono text-base font-semibold tracking-wide text-indigo-400 uppercase align-baseline sm:text-xl sm:font-semibold">
              .js
            </span>{' '}
            Starter
          </h5>
          <p className="text-xl sm:text-2xl sm:leading-relaxed">
            Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum
            nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel
            pharetra vel turpis nunc. Malesuada nunc vel risus commodo.
          </p>
          <div className="flex flex-col justify-end items-end mt-8 mb-2 text-base sm:flex-col sm:mt-10 sm:mb-2">
            <Link href="/docs">
              <a className="py-2 px-4 min-w-[140px] font-mono text-sm font-bold text-center text-slate-50 hover:text-indigo-100 dark:text-slate-200 bg-indigo-900 hover:bg-indigo-800 dark:bg-indigo-900 dark:hover:bg-indigo-800 rounded-full border-2 border-indigo-300 dark:border-indigo-600 shadow-sm dark:shadow-sm shadow-indigo-900/20 dark:shadow-indigo-900 transition-colors duration-300 sm:py-3 sm:px-8 sm:text-lg">
                Get Started
                <ArrowRightIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
