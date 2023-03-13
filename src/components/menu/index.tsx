import { Fragment, useState, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ChessContext } from "../../context/chessContext";
import { ChessSquare, ChessContextType } from "../../@types/chess";
import UserDropdown from "../userdropdown";

const modes: string[] = ["white", "black"];

function ChessMenu() {
  const { data, playerMode, togglePlayerMode } = useContext(
    ChessContext
  ) as ChessContextType;
  const [selected, setSelected] = useState<string>(modes[0]);
  return (
    <div className="order-0 md:order-1 w-full md:w-4/12 md:h-full p-4 overflow-y-auto">
      <div className="w-full h-fit flex justify-between items-center">
        <h3 className="text-3xl">Chess Mate</h3>
        <UserDropdown />
      </div>

      <div className="mt-4 py-4  gap-4 flex flex-col items-start">
        <button className="p-4 bg-white text-gray-900 rounded-lg">
          Start New Game
        </button>
        <div className="flex items-center gap-4">
          <h4>Playing as:</h4>
          <Listbox
            value={selected}
            onChange={(value) => {
              setSelected(value);
              togglePlayerMode(value);
            }}
          >
            <div className="relative mt-1">
              <Listbox.Button className="relative w-36 cursor-default rounded-lg bg-slate-50/[0.1] cursor-pointer py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate capitalize">{selected}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black/[0.6] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {modes.map((mode, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 text-white ${
                          active ? "bg-slate-500/[0.3]" : ""
                        }`
                      }
                      value={mode}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate capitalize ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {mode}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className=" mt-4 h-48 max-h-96 bg-slate-50/[0.1]"></div>
      <h4 className="mt-4 flex gap-2 items-center">
        Mates online <span className="bg-teal-600 rounded-full w-3 h-3 block" />
      </h4>
      <div className=" mt-1 h-32 max-h-96 bg-slate-50/[0.1]"></div>
    </div>
  );
}

export default ChessMenu;
