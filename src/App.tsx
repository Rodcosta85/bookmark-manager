import { useEffect } from "react"
import useBookmarks from "./hooks/useBookmark"
import type { DataTypes } from "./types/dataTypes"
import themes from './styles/styles'
import ProfileDropdown from "./components/ProfileDropdown"

function App() {

  const { data, sliderTheme, currentTheme, setData, setSliderTheme, setCurrentTheme } = useBookmarks()

  const handleSlider = (e: React.ChangeEvent<HTMLButtonElement>) => {
    setSliderTheme(parseInt(e.target.value));
  }

  const detectColorScheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 2; // Dark theme
    } else {
      return 1; // Light theme
    }
  };

  useEffect(() => {
    const initialTheme = detectColorScheme();
    setSliderTheme(initialTheme);
    setCurrentTheme(themes[initialTheme - 1]);

    const colorSchemeListener = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 2 : 1;
      setSliderTheme(newTheme);
      setCurrentTheme(themes[newTheme - 1]);
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', colorSchemeListener);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', colorSchemeListener);
    };
  }, []);

  useEffect(() => {
    if (sliderTheme === 1) {
      setCurrentTheme(themes[0]);
      console.log('slider on position 0')
      // light
    } else if (sliderTheme === 2) {
      setCurrentTheme(themes[1]);
      console.log('slider on position 1')
      // dark
    }
  }, [sliderTheme])

  return (
    <div className="font-manrope">
      <ProfileDropdown handleSlider={handleSlider} />
    </div>
  )
}

export default App
