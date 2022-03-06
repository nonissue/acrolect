import { WordItem } from 'src/types';

export const HeroWord = ({ word }: { word: WordItem }) => {
  console.log(word);
  return (
    // <div className=" overflow-y-clip max-h-96 ">
    <div className="z-0 p-8 text-center dark:bg-gradient-to-tr dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 border-0 border-slate-400/50 sm:py-10 sm:px-12 sm:rounded-none">
      {/* Need to actually resolve vertical positioning of this so it's in center of screen */}
      <p className="block mb-4 font-mono text-sm tracking-widest text-slate-400 uppercase">
        {word.publishedDate.toLocaleString()}
      </p>
      <h1 className="mt-4 mb-8 font-serif text-4xl font-bold text-slate-700 dark:text-slate-100 underline underline-offset-4 sm:text-6xl">
        {word.title}
      </h1>
      <p className="mt-8 mb-4 font-sans text-xl text-slate-600 dark:text-slate-300 first-letter:capitalize sm:text-2xl sm:leading-relaxed">
        {word.definition}
      </p>
    </div>
    // </div>
  );
};
