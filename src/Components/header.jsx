import { BiMinus, BiCaretDown, BiEnvelope, BiCaretUp } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Service", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const handleMobileDialog = () => {
    setOpen(true);
  };
  return (
    <Disclosure
      as="nav"
      className="bg-[#121117] md:overflow-x-hidden lg:overflow-x-visible "
    >
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-6 lg:px-8 max-w-[1150px]  ">
            <div className="relative flex  items-center py-8">
              <div className="absolute inset-y-0 left-0   pt-8 items-center  pl-[90%] x:hidden block ">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" inline-flex  px-0.5 bg-sky-500 items-center rounded-md  text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-white "
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon className="block h-8 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-between flex-shrink-0 items-center   ">
                <img
                  className="block h-12 w-auto lg:hidden"
                  src="/logo.svg"
                  alt="Your Company"
                />
                <img
                  className="hidden h-12 w-auto lg:block"
                  src="/logo.svg"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 x:block lg:block    mt-2 ">
                <div className="flex space-x-6">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button
                        onMouseEnter={({ target }) => {
                          if (target instanceof HTMLElement) {
                            target.click();
                          }
                        }}
                        onMouseLeave={({ target }) => {
                          if (target instanceof HTMLElement) {
                            target.click();
                          }
                        }}
                        className={classNames(
                          false ? "bg-gray-900 text-white" : "text-white",
                          "rounded-md  py-2 text-[1.1rem] flex font-medium"
                        )}
                      >
                        Home
                        <svg
                          class=" mt-2 ml-1 mr-0 pr-0 h-4 w-4  text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
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
                      <Menu.Items className="absolute right-0 left-0  z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg   ">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-900",
                                  "block px-4 py-2 font-medium   text-sm"
                                )}
                              >
                                Edit
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Duplicate
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Archive
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Move
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Share
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Add to favorites
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Delete
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? " text-white" : "text-white ",
                        "rounded-md px-3 py-2 text-[1.1rem] font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button
                        onMouseEnter={({ target }) => {
                          if (target instanceof HTMLElement) {
                            target.click();
                          }
                        }}
                        onMouseLeave={({ target }) => {
                          if (target instanceof HTMLElement) {
                            target.click();
                          }
                        }}
                        className={classNames(
                          false ? "bg-gray-900 text-white" : "text-white",
                          "rounded-md  py-2 text-[1.1rem] flex font-medium"
                        )}
                      >
                        Pages
                        <svg
                          class=" mt-2 ml-1 mr-0 pr-0 h-4 w-4  text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
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
                      <Menu.Items className="absolute right-0 left-0  z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg   ">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-900",
                                  "block px-4 py-2 font-medium   text-sm"
                                )}
                              >
                                Edit
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Duplicate
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Archive
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Move
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Share
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Add to favorites
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Delete
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <a
                    key="portfolio"
                    href="#"
                    className={classNames(
                      false ? " text-white" : "text-white ",
                      "rounded-md px-3 py-2 text-[1.1rem] font-medium"
                    )}
                    aria-current={"portfolio" ? "page" : undefined}
                  >
                    Portfolio
                  </a>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button
                        onMouseEnter={({ target }) => {
                          if (target instanceof HTMLElement) {
                            target.click();
                          }
                        }}
                        onMouseLeave={({ target }) => {
                          if (target instanceof HTMLElement) {
                            target.click();
                          }
                        }}
                        className={classNames(
                          false ? "bg-gray-900 text-white" : "text-white",
                          "rounded-md  py-2 text-[1.1rem] flex font-medium"
                        )}
                      >
                        Blog
                        <svg
                          class=" mt-2 ml-1 mr-0 pr-0 h-4 w-4  text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
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
                      <Menu.Items className="absolute right-0 left-0  z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg   ">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-900",
                                  "block px-4 py-2 font-medium   text-sm"
                                )}
                              >
                                Edit
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Duplicate
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Archive
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Move
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Share
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Add to favorites
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 font-medium text-sm"
                                )}
                              >
                                Delete
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <a
                    key="portfolio"
                    href="#"
                    className={classNames(
                      false ? " text-white" : "text-white ",
                      "rounded-md px-3 py-2 text-[1.1rem] font-medium"
                    )}
                    aria-current={"portfolio" ? "page" : undefined}
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="absolute flex inset-y-0 right-0 w-[40%]  items-center pr-2 sm:static mt-2 sm:inset-auto sm:ml-6 sm:pr-0  justify-end">
                <svg 
                className="w-7 h-7 mr-5"
                style={{ fill: 'white' }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
                <button className="bg-[#121117] border-white border rounded-full py-4  text-white px-8 text-[1.1rem] xxl:block lg:hidden hidden">
                  Start a Project
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="x:hidden  max-w-640 mx-auto ">
            <div className="flex px-4 justify-start pb-2 pt-5">
              <button
                type="button"
                className="-m-2 inline-flex items-center justify-center  text-gray-400"
                onClick={handleMobileDialog}
              >
                {/* <div className="space-y-1 px-2 pt-2 pb-3">
                    <Tab.Group as="div" className="mt-2">
                      <div className="border-b border-gray-200">
                        <Tab.List className="-mb-px flex space-x-8 px-4">
                          {navigationn.categories.map((category) => (
                            <Tab
                              key={category.name}
                              className={classNames(
                                open ? "text-white" : "text-white",
                                "rounded-md px-3 py-2 text-base flex font-extrabold"
                              )}
                            >
                              {category.name}
                            </Tab>
                          ))}
                          {navigation.categories.map((category) => (
                            <Tab
                              key={category.name}
                              className={classNames(
                                open ? "text-white" : "text-white",
                                "rounded-md px-3 py-2 text-base flex font-extrabold"
                              )}
                            >
                              {category.name}
                            </Tab>
                          ))}
                        </Tab.List>
                      </div>
                      <Tab.Panels as={Fragment}>
                        {navigationn.categories.map((category) => (
                          <Tab.Panel
                            key={category.name}
                            className="space-y-10 px-4  pb-8 "
                          >
                            <div className="grid grid-cols-1 gap-x-4"></div>
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-bold text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="mt-6 flex flex-col space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-2 block p-2 text-gray-500"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </Tab.Panel>
                        ))}
                        {navigation.categories.map((category) => (
                          <Tab.Panel
                            key={category.name}
                            className="space-y-10 px-4 pb-8 "
                          >
                            <div className="grid grid-cols-1 gap-x-4">
                              {category.featured.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative text-sm"
                                ></div>
                              ))}
                            </div>
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-bold text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="mt-6 flex flex-col space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-2 block p-2 text-gray-500"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </div> */}
                <div className="w-full h-fit px-4  ">
                  <div className="mx-auto w-screen  max-w-md  bg-white p-2 text-lg">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <div>
                            <Disclosure.Button className="flex w-full  rounded-lg  px-4 py-3 mb-0 pb-2 text-left font-medium text-white ">
                              <span>Home</span>
                              {open ? (
                                <BiCaretUp className="ml-1 mt-2" />
                              ) : (
                                <BiCaretDown className="ml-1 mt-2" />
                              )}
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500  w-full  rounded-lg px-4 mb-2 text-left text-sm font-medium">
                              <div className="pl-2">
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                              </div>
                            </Disclosure.Panel>
                          </div>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <div>
                            <Disclosure.Button className="flex w-full  rounded-lg  px-4 py-3 mb-0 pb-2 text-left font-medium text-white ">
                              <span>About</span>
                            </Disclosure.Button>
                          </div>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <div>
                            <Disclosure.Button className="flex w-full  rounded-lg  px-4 py-3 mb-0 pb-2 text-left font-medium text-white ">
                              <span>Services</span>
                            </Disclosure.Button>
                          </div>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <div>
                            <Disclosure.Button className="flex w-full  rounded-lg  px-4 py-3 mb-0 pb-2 text-left font-medium text-white ">
                              <span>Pages</span>
                              {open ? (
                                <BiCaretUp className="ml-1 mt-2" />
                              ) : (
                                <BiCaretDown className="ml-1 mt-2" />
                              )}
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500  w-full  rounded-lg px-4 mb-2 text-left text-sm font-medium">
                              <div className="pl-2">
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                              </div>
                            </Disclosure.Panel>
                          </div>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <div>
                            <Disclosure.Button className="flex w-full  rounded-lg  px-4 py-3 mb-0 pb-2 text-left font-medium text-white ">
                              <span>Portfolio</span>
                            </Disclosure.Button>
                          </div>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <div>
                            <Disclosure.Button className="flex w-full  rounded-lg  px-4 py-3 mb-0 pb-2 text-left font-medium text-white ">
                              <span>Blog</span>
                              {open ? (
                                <BiCaretUp className="ml-1 mt-2" />
                              ) : (
                                <BiCaretDown className="ml-1 mt-2" />
                              )}
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500  w-full  rounded-lg px-4 mb-2 text-left text-sm font-medium">
                              <div className="pl-2">
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                                <p className="font-bold text-gray-900 text-lg py-1">
                                  Edit
                                </p>
                              </div>
                            </Disclosure.Panel>
                          </div>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <div>
                            <Disclosure.Button className="flex w-full  rounded-lg  px-4 py-3 mb-0 pb-2 text-left font-medium text-white ">
                              <span>Contact</span>
                            </Disclosure.Button>
                          </div>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
                <span className="sr-only">Close menu</span>
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
