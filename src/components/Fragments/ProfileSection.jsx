import DownloadResumeButton from '../Elements/ProfileSection/DownloadResumeButton';
import Identity from '../Elements/ProfileSection/Identity';

const Profile = () => {
  return (
    <div className="flex flex-col my-5 border-b border-slate-300">
      <Identity />
      <div className="flex mb-8 px-2 justify-end">
        <DownloadResumeButton />
      </div>
    </div>
  );
};

export default Profile;
