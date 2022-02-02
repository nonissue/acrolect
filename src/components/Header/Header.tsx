import Link from 'next/link';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { ThemeChanger } from 'src/components';
// import * as metadata from 'data/meta.json';

const Header = () => {
  return (
    <div className="relative z-10 dark:pb-2 dark:bg-gradient-to-bl dark:from-almostblack dark:via-gray-900/50 dark:to-almostblack/50 dark:border-b-0 dark:border-slate-100/30 shadow-sm dark:shadow-lg sm:dark:border-b-0">
      <div className="relative inset-0 z-20">
        <div className="flex inset-0 items-center p-4 mx-auto max-w-3xl sm:px-6 lg:py-8">
          <div className="flex relative justify-between items-center space-x-6 w-full sm:justify-center">
            <Link href="/docs">
              <a className="w-5 h-5 text-slate-400 hover:text-slate-400 dark:text-slate-400 dark:hover:text-slate-300 transition-all duration-300 fill-current">
                <QuestionMarkCircleIcon />
              </a>
            </Link>
            <div className=" text-slate-900 dark:text-indigo-300 ">
              <Link href="/">
                <a className="flex flex-row font-mono text-base tracking-tight text-indigo-900 dark:text-pink-300 uppercase sm:items-center sm:text-2xl">
                  <span className="font-sans text-4xl font-black -tracking-wider lowercase">
                    g
                    <span className="hidden text-indigo-900/60 dark:text-indigo-500/100">
                      oo
                    </span>
                    dsh.it
                  </span>
                  {/* <span className="block justify-end items-end py-0.5 px-2 ml-2 text-sm font-bold tracking-tighter text-indigo-500 dark:text-indigo-200 lowercase align-bottom bg-indigo-100/90 dark:bg-slate-700/90 rounded-xl">
                    .it
                  </span> */}
                </a>
              </Link>
            </div>
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
