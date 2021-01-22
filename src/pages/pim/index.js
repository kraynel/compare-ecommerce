import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

export default function Index() {
  return (
    <Layout>
      <h1 class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left">
        Les solutions de gestions de produits (PIM)
      </h1>
      <Link to="/pim/akeneo">Akeneo</Link>
    </Layout>
  )
}
