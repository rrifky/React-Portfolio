import { ReactTyped } from 'react-typed';
import { GoDotFill } from 'react-icons/go';
import { useTheme } from '../../../context/ThemeContext';

const Identity = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <h1 className={`text-xl md:text-2xl lg:text-4xl font-bold ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>
        Hi, I'm <ReactTyped strings={['Rifky Alfarez', 'Frontend Web Developer']} typeSpeed={50} backDelay={2000} loop backSpeed={20} cursorChar="|" showCursor={true} />
      </h1>

      <div className={`flex flex-row mt-2 text-sm md:text-base ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
        <GoDotFill className="h-3 w-3  my-auto mr-2" />
        <div className="mr-4">8th Semester Student</div>
        <GoDotFill className="h-3 w-3  my-auto mr-2" />
        <div className="">Tasikmalaya, Indonesia</div>
      </div>

      <p className={`text-base md:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} my-3 text-justify`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusantium omnis nemo? Perspiciatis eligendi autem deserunt qui ducimus voluptate, optio quis nostrum, minus nobis quidem temporibus debitis delectus illo ea alias
        velit rem quasi eius perferendis quos iusto. Dicta dolorem recusandae excepturi esse. Quae ducimus amet, deleniti optio architecto quisquam repellat accusamus magnam a odio dolorem nesciunt, eligendi eum modi ipsa sapiente rerum
        quos.
      </p>
    </>
  );
};

export default Identity;
