import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

export default function Index() {
  return (
    <Layout>
      <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left">
        Les solutions de recherche
      </h1>
      <Link to="/search/algolia">Algolia</Link>
    </Layout>
  )
}
