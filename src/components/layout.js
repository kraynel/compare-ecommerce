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

      <div className="container pt-16 md:pt-32 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {children}
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <span className="text-gray-500 no-underline hover:no-underline">
            &copy; Theodo - {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  )
}
