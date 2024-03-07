import { useTheme } from '../../context/ThemeContext';

const TitleSection = ({ title, subtitle }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="mt-8">
      <h1 className={`text-xl md:text-3xl font-medium mb-1 ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>{title}</h1>
      <h3 className={`text-base md:text-xl text-slate-700 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{subtitle}</h3>
    </div>
  );
};

export default TitleSection;
