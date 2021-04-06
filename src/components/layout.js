import React from "react"
import Menu from "./menu"
import theodo from "../assets/theodo.svg"

export default function Layout({ children }) {
  return (
    <div className="h-screen pb-14 bg-right">
      <Menu />

      <div className="container mx-auto items-center pt-12 pb-20 px-12 md:px-20 xl:px-40">
        {children}
        <img
          className="fixed w-500 h-500 -right-16 bottom-4"
          src={theodo}
          height="500px"
          width="500px"
          alt=""
        />
        <div className="fixed bg-white bottom-0 w-full py-6 text-sm text-center md:text-left">
          <span className="text-gray-500 no-underline hover:no-underline">
            &copy; Theodo - {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  )
}
