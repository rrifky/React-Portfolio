import { useTheme } from '../../context/ThemeContext';

const ExperienceCard = (props) => {
  const { isDarkMode } = useTheme();

  const { children } = props;
  return (
    <div
      className={`mt-8 mb-10 flex flex-row shadow max-w-sm rounded-md h-32 justify-center items-center transform transition duration-500 ease-in-out hover:scale-95 hover:shadow-md cursor-pointer ${
        isDarkMode && 'shadow-white hover:shadow-white'
      }`}
    >
      {children}
    </div>
  );
};

const ExperienceHeader = (props) => {
  const { image } = props;
  return (
    <div className="mr-4 md:mr-6">
      <img src={image} width={80} height={80} alt="quadra" />
    </div>
  );
};

const ExperienceBody = (props) => {
  const { isDarkMode } = useTheme();
  const { title, subtitle, date } = props;
  return (
    <div className="flex flex-col">
      <h4 className={`text-lg md:text-xl font-medium mb-2 ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>{title}</h4>
      <h4 className={`text-base md:text-lg mb-2 ${isDarkMode ? 'text-slate-100' : 'text-slate-700'}`}>{subtitle}</h4>
      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-slate-200' : 'text-slate-600'}`}>{date}</p>
    </div>
  );
};

ExperienceCard.ExperienceHeader = ExperienceHeader;
ExperienceCard.ExperienceBody = ExperienceBody;

export default ExperienceCard;
