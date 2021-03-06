import React, { useState } from "react"
import theodo from "../assets/theodo.svg"
import MenuItem from "./menu-item"
import { Link } from "gatsby"
import { useAllEcommerceCore } from "../hooks/ecommercecore"

export default function Menu() {
  const [openStates, setOpenStates] = useState({})
  const getStateForMenu = menu => openStates[menu] || false
  const setStateForMenu = menu => newState =>
    setOpenStates({ [menu]: newState })
  const ecommerceCores = useAllEcommerceCore()

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Theodo</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={theodo}
                height="10"
                width="8"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <MenuItem title="Stack builder" link="/builder" />
            <MenuItem
              isOn={getStateForMenu("core")}
              setIsOn={setStateForMenu("core")}
              title="Briques e-commerce"
              subitems={ecommerceCores.map(({ title }) => ({
                title,
                link: `/global/${title}`,
              }))}
            />
            <a
              className={`group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://machalliance.org"
            >
              MACH Alliance
            </a>
            <MenuItem title="Contact" link="/contact" />
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
        </div>
      </div>
    </div>
  )
}
