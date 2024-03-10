import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';

const Sosmed = (props) => {
  const { classname, icon, title, url } = props;
  const { isDarkMode } = useTheme();
  return (
    <>
      <Link to={url} target={'_blank'} className={`${classname} py-1 px-3 flex justify-center items-center rounded mr-4 text-slate-50 mb-2 shadow transition duration-200 hover:scale-105 ${isDarkMode && 'shadow-white'}`}>
        <div className="mr-2 text-2xl">{icon}</div>
        <div className="text-base">{title}</div>
      </Link>
    </>
  );
};

export default Sosmed;
