import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="grid w-full justify-center content-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          Construisez votre stack e-commerce !
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          <p>Des SaaS, de l'open-source, du custom.</p>
          <p>Adoptez l'approche best-of-breed.</p>
        </p>
      </div>
    </Layout>
  )
}
