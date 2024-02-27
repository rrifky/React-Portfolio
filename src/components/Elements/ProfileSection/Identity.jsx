import { ReactTyped } from 'react-typed';

const Identity = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-slate-800">
        Hi, I'm <ReactTyped strings={['Rifky Alfarez', 'Frontend Web Developer']} typeSpeed={50} backDelay={2000} loop backSpeed={20} cursorChar="|" showCursor={true} />
      </h1>

      <ul className="list-disc flex flex-wrap px-5 mt-2 text-slate-700">
        <li>8th Semester Student</li>
        <li className="ml-7">Tasikmalaya, Indonesia</li>
      </ul>

      <p className="text-xl text-slate-700 my-3 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusantium omnis nemo? Perspiciatis eligendi autem deserunt qui ducimus voluptate, optio quis nostrum, minus nobis quidem temporibus debitis delectus illo ea alias
        velit rem quasi eius perferendis quos iusto. Dicta dolorem recusandae excepturi esse. Quae ducimus amet, deleniti optio architecto quisquam repellat accusamus magnam a odio dolorem nesciunt, eligendi eum modi ipsa sapiente rerum
        quos.
      </p>
    </>
  );
};

export default Identity;
