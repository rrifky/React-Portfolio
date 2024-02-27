const ExperienceCard = (props) => {
  const { children } = props;
  return (
    <div className="mt-8 mb-10 flex flex-row border border-slate-300 max-w-sm rounded-md p-2 h-32 justify-between items-center transform transition duration-500 ease-in-out hover:scale-95 hover:shadow-md cursor-pointer">{children}</div>
  );
};

const ExperienceHeader = (props) => {
  const { image } = props;
  return (
    <div className="ml-3 ">
      <img src={image} width={80} height={80} alt="quadra" />
    </div>
  );
};

const ExperienceBody = (props) => {
  const { title, subtitle, date } = props;
  return (
    <div className="flex flex-col mr-6 ">
      <h4 className="text-xl text-slate-800 font-medium mb-2">{title}</h4>
      <h4 className="text-lg text-slate-700 mb-2">{subtitle}</h4>
      <p className="text-sm text-slate-600">{date}</p>
    </div>
  );
};

ExperienceCard.ExperienceHeader = ExperienceHeader;
ExperienceCard.ExperienceBody = ExperienceBody;

export default ExperienceCard;
