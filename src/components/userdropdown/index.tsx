import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon, PowerIcon } from "@heroicons/react/20/solid";
import defaultAvatar from "../../assets/images/default.png";

export default function UserDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex gap-1 w-full justify-center items-center rounded-md bg-slate-50/[0.1] bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="w-10 h-10 rounded-full">
            <img
              className="w-full h-full object-contain"
              src={defaultAvatar}
              alt={"user avatar"}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span>Mikk Jagger</span>
            <small>Grandmaster</small>
          </div>
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black/[0.9] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={` text-white ${
                    active ? "bg-stone-500" : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <PowerIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
