function ChessMenu() {
  return (
    <div className="order-0 md:order-1 w-full md:w-4/12 md:h-full p-4">
      <h3 className="text-3xl">Chess Mate</h3>
      <button className="mt-4 p-4 bg-white text-gray-900 rounded-lg">
        Start New Game
      </button>
      <div className=" mt-4 h-48 max-h-96 bg-slate-50/[0.1]"></div>
      <h4 className="mt-4 flex gap-2 items-center">
        Mates online <span className="bg-teal-600 rounded-full w-3 h-3 block" />
      </h4>
      <div className=" mt-1 h-32 max-h-96 bg-slate-50/[0.1]"></div>
    </div>
  );
}

export default ChessMenu;
