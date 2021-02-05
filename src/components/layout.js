import React from "react"
import bg from "../assets/bg.svg"
import Menu from "./menu"

export default function Layout({ children }) {
  return (
    <div
      className="h-screen pb-14 bg-right bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Menu />

      <div className="container mx-auto items-center pt-12 px-12 md:px-20 xl:px-40">
        {children}
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left">
          <span className="text-gray-500 no-underline hover:no-underline">
            &copy; Theodo - {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  )
}
