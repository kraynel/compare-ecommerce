import React, { useState } from "react"
import theodo from "../assets/theodo.svg"
import MenuItem from "./menu-item"
import { Link } from "gatsby"
export default function Menu() {
  const [openStates, setOpenStates] = useState({})
  const getStateForMenu = menu => openStates[menu] || false
  const setStateForMenu = menu => newState =>
    setOpenStates({ [menu]: newState })

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Theodo</span>
              <img className="h-8 w-auto sm:h-10" src={theodo} alt="" />
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
            <MenuItem title="Stack builder" link="/" />
            <MenuItem
              isOn={getStateForMenu("core")}
              setIsOn={setStateForMenu("core")}
              title="Briques e-commerce"
              subitems={[
                {
                  title: "Core",
                  subtitle: "Le moteur principal",
                  link: "/global",
                },
                {
                  title: "Front",
                  subtitle: "Votre vitrine",
                  link: "/front",
                },
                {
                  title: "CMS",
                  subtitle: "Le contenu edito",
                  link: "/cms",
                },
                {
                  title: "PIM",
                  subtitle: "Vos produits",
                  link: "/pim",
                },
                {
                  title: "Recherche",
                  subtitle: "Pertinence, performance, outil marketing",
                  link: "/search",
                },
              ]}
            />
            <MenuItem title="MACH Alliance" link="/" />
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
        </div>
      </div>
    </div>
  )
}
