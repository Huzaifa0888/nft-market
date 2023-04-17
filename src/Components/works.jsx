import React from 'react'

import { CalendarDaysIcon, HandRaisedIcon , WalletIcon ,CircleStackIcon} from '@heroicons/react/24/outline'
function Works() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-[#09080d] py-10 sm:py-16 lg:pt-20">
        <div className="px-4 mx-auto max-w-[1150px] sm:px-6 lg:px-8">
          <div className=" ">
            <h1 className="text-2xl  font-normal text-white   pb-5 lg:text-[30px]">
              Top Sellers
            </h1>
          </div>
          <div className="mx-auto grid mt-7 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none zlg:grid-cols-1">
            <dl className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md  pb-2 ">
                  <CalendarDaysIcon
                    className="h-12 w-12 text-blue-800"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md  pb-2 ">
                  <WalletIcon
                    className="h-12 w-12 text-blue-800"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>{" "}
              <div className="flex flex-col items-start">
                <div className="rounded-md  pb-2 ">
                  <HandRaisedIcon
                    className="h-12 w-12 text-blue-800"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md  pb-2 ">
                  <CircleStackIcon
                    className="h-12 w-12 text-blue-800"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works