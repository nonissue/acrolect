import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

const Card = () => {
  return (
    <section className="text-base leading-relaxed text-slate-600 dark:text-slate-300 divide-y-0 divide-slate-300 dark:divide-slate-700 divide-dashed sm:leading-relaxed">
      <div className="p-1 mx-auto bg-gradient-to-r from-indigo-500 dark:from-indigo-300 via-purple-500 dark:via-purple-300 to-pink-500 dark:to-pink-300 rounded-2xl shadow">
        <div className="p-5 tracking-tight leading-relaxed text-slate-500 dark:text-slate-200 bg-white dark:bg-gray-900 rounded-xl shadow-sm dark:shadow-xl sm:leading-normal sm:text-left">
          <h5 className="mb-4 text-4xl font-black tracking-tight leading-snug text-indigo-900 dark:text-indigo-100 sm:mb-5 sm:text-6xl sm:leading-[1]">
            Another Next
            <span className="font-mono text-base font-semibold tracking-wide text-indigo-400 uppercase align-baseline sm:text-xl sm:font-semibold">
              .js
            </span>{' '}
            Starter
          </h5>
          <p className="text-xl sm:text-2xl">
            Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum
            nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel
            pharetra vel turpis nunc. Malesuada nunc vel risus commodo.
          </p>
          <div className="flex flex-col justify-end items-end mt-12 text-base sm:flex-col sm:mt-5">
            <Link href="/docs">
              <a className="p-2 min-w-[140px] font-bold text-center text-slate-50 hover:text-indigo-100 dark:text-slate-200 bg-indigo-900 hover:bg-indigo-800 dark:bg-indigo-900 dark:hover:bg-indigo-800 rounded-full border-2 border-indigo-300 dark:border-indigo-800 shadow-sm dark:shadow-sm shadow-indigo-900/20 dark:shadow-indigo-900 transition-colors duration-300">
                Get Started
                <ArrowRightIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Card };
