const TitleSection = ({ title, subtitle }) => {
  return (
    <div className="mt-8">
      <h1 className="text-xl md:text-3xl font-medium text-slate-800 mb-1">{title}</h1>
      <h3 className="text-base md:text-xl text-slate-700">{subtitle}</h3>
    </div>
  );
};

export default TitleSection;
