import { useTheme } from '../../context/ThemeContext';
import DownloadResumeButton from '../Elements/ProfileSection/DownloadResumeButton';
import Identity from '../Elements/ProfileSection/Identity';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Profile = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col my-5 border-b border-slate-300">
      <Identity />
      <div className="flex mb-8 mt-5 justify-between">
        <div className={`flex flex-row text-2xl md:text-3xl cursor-pointer transition duration-100 ease-in-out ${isDarkMode ? 'text-slate-50' : 'text-slate-700'}`}>
          <div className="mr-4">
            <FaLinkedin className="hover:text-blue-600" />
          </div>
          <div>
            <FaGithub className="hover:text-slate-950" />
          </div>
        </div>
        <div>
          <DownloadResumeButton />
        </div>
      </div>
    </div>
  );
};

export default Profile;
