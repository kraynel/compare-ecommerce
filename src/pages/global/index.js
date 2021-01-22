import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

export default function Index() {
  return (
    <Layout>
      <h1 class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left">
        Les solutions "core ecommerce"
      </h1>
      <ul>
        <li>
          <Link to="/global/bigcommerce">BigCommerce</Link>
        </li>
        <li>
          <Link to="/global/shopify">Shopify</Link>
        </li>
        <li>
          <Link to="/global/sylius">Sylius</Link>
        </li>
      </ul>
    </Layout>
  )
}
