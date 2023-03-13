import defaultAvatar from "../../assets/images/default.png";

function OnlineMate() {
  return (
    <div className="h-15 w-full p-2 bg-slate-200/[0.2] rounded-lg flex gap-2">
      <div className="w-10 h-10 rounded-full ">
        <img
          className="w-full h-full object-contain"
          src={defaultAvatar}
          alt={"user avatar"}
        />
      </div>
      <div className="flex flex-col">
        <span>Jack, Sparrow</span>
        <small>Grandmaster II</small>
      </div>
      <button
        className="p-2 ml-auto  bg-teal-600 rounded-lg"
        role="button"
        aria-label="connect with friend"
      >
        Connect
      </button>
    </div>
  );
}

export default OnlineMate;
