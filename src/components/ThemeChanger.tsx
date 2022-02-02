import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export const ThemeChanger: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // Only show theme changer on client when rendered
  // Avoids hydration mismatch between server & client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="w-6 h-6 text-slate-400 hover:text-slate-400 dark:text-slate-400 dark:hover:text-slate-300 transition-all duration-500"
      onClick={() => {
        // for some reason, if theme is light, setTheme doesn't
        // change theme to dark on first use unless we use the logic below
        let nextTheme;
        if (theme === 'system') {
          nextTheme = resolvedTheme === 'light' ? 'dark' : 'light';
        } else {
          nextTheme = theme === 'light' ? 'dark' : 'light';
        }

        setTheme(nextTheme);
      }}
      aria-label="Theme Toggle"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
};
