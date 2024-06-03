const GetBackMsg = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[75vh]">
      <img src={"/messageIcon.png"} alt="" className="w-44" />
      <h1 className="text-textSecondary-900 text-2xl font-bold py-2">
        Pick up where you left off
      </h1>
      <p className="text-gray-500 text-[15px]">
        Select a conversation and chat away.
      </p>
    </div>
  );
};

export default GetBackMsg;
