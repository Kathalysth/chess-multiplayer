import { Fragment, useState, useContext } from 'react'
import { Listbox, Transition, Switch } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/20/solid'
import { ChessContext } from '../../context/chess.context'
import { ChessSquare, ChessContextType } from '../../@types/chess'
import UserDropdown from '../userdropdown'
import OnlineMate from '../onlinemates'

const modes: string[] = ['white', 'black']

function ChessMenu() {
  const { togglePlayerMode, resetGame } = useContext(ChessContext) as ChessContextType
  const [selected, setSelected] = useState<string>(modes[0])
  const [enabledHints, setEnabledHints] = useState<boolean>(false)
  const [enabledSound, setEnabledSound] = useState<boolean>(false)
  return (
    <div className='order-0 md:order-1 w-full md:w-4/12 md:h-full p-4 pb-8 overflow-y-auto'>
      <div className='w-full h-fit flex justify-between items-center'>
        <h3 className='text-3xl'>Chess Mate</h3>
        <UserDropdown />
      </div>

      <div className='mt-4 py-4  gap-4 flex flex-col items-start'>
        <div className='flex gap-2'>
          <button
            onClick={() => {
              resetGame()
            }}
            className='p-4 bg-white text-gray-900 rounded-lg'
          >
            Start New Game
          </button>
          <button className='p-2 text-white bg-slate-50/[0.2] flex gap-2 rounded-lg items-center'>
            <ArrowUturnLeftIcon className='h-5 w-5 text-white' aria-hidden='true' />
            Undo Move
          </button>
        </div>
        <div className='flex items-center gap-4'>
          <h4>Playing as:</h4>
          <Listbox
            value={selected}
            onChange={(value) => {
              setSelected(value)
              togglePlayerMode(value)
            }}
          >
            <div className='relative mt-1'>
              <Listbox.Button className='relative w-36 cursor-default rounded-lg bg-slate-50/[0.1] cursor-pointer py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                <span className='block truncate capitalize'>{selected}</span>
                <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                  <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black/[0.6] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {modes.map((mode, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 text-white ${
                          active ? 'bg-slate-500/[0.3]' : ''
                        }`
                      }
                      value={mode}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate capitalize ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {mode}
                          </span>
                          {selected ? (
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                              <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
      <div className=' mt-4 h-48 max-h-96 bg-slate-50/[0.1] p-4'>
        <h4>Settings</h4>
        <span className='flex gap-2 items-center'>
          <strong>Show hints</strong>
          <Switch
            checked={enabledHints}
            onChange={setEnabledHints}
            className={`${enabledHints ? 'bg-teal-600/[0.7]' : 'bg-slate-100/[0.1]'}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className='sr-only'>Use setting</span>
            <span
              aria-hidden='true'
              className={`${enabledHints ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </span>
        <span className='flex mt-4 gap-2 items-center'>
          <strong>Enable Sound</strong>
          <Switch
            checked={enabledSound}
            onChange={setEnabledSound}
            className={`${enabledSound ? 'bg-teal-600/[0.7]' : 'bg-slate-100/[0.1]'}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className='sr-only'>Enable Sound</span>
            <span
              aria-hidden='true'
              className={`${enabledSound ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </span>
      </div>
      <h4 className='mt-4 flex gap-2 items-center'>
        Mates online <span className='bg-teal-600 rounded-full w-3 h-3 block' />
      </h4>
      <ul className=' mt-1 h-32 max-h-96 bg-slate-50/[0.1] p-1'>
        <li>
          <OnlineMate />
        </li>
      </ul>
    </div>
  )
}

export default ChessMenu
