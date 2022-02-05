import Link from 'next/link';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { ThemeChanger } from 'src/components';
// import * as metadata from 'data/meta.json';

const Header = () => {
  // bg-gray-500/[1%] dark:bg-gradient-to-bl dark:from-almostblack dark:via-gray-900/50 dark:to-almostblack/50
  return (
    <div className="relative z-10 bg-slate-50/50 dark:bg-slate-900/70 dark:border-slate-100/30 shadow-sm dark:shadow-xl backdrop-blur-xl dark:backdrop-blur-lg">
      <div className="relative inset-0 z-20">
        <div className="flex inset-0 items-center p-4 mx-auto max-w-3xl sm:px-6 lg:py-8">
          <div className="flex relative justify-between items-center space-x-6 w-full sm:justify-center">
            <Link href="/404">
              <a className="w-5 h-5 text-slate-400 hover:text-slate-400 dark:text-slate-400 dark:hover:text-slate-300 transition-all duration-300 fill-current">
                <QuestionMarkCircleIcon />
              </a>
            </Link>
            <div className=" text-slate-900 dark:text-indigo-300 ">
              <Link href="/">
                <a className="flex flex-row text-slate-700 dark:text-slate-300 ">
                  <span className="font-serif text-2xl font-thin tracking-normal sm:text-4xl">
                    ac•ro•lect
                  </span>
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
