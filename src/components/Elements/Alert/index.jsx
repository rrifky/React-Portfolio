const Alert = (props) => {
  const { classname, icon, message, status, onClick } = props;

  return (
    <>
      <div className={`${classname} flex flex-row justify-between items-center p-3 rounded-lg mb-2 text-slate-950 text-sm md:text-base`}>
        <div className="flex">
          <div>{icon}</div>
          <div className="ml-3">
            <span className="font-bold mr-2">{status}</span>
            <span>{message}</span>
          </div>
        </div>
        <button onClick={onClick}>✖</button>
      </div>
    </>
  );
};

export default Alert;
