import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import { useAllEcommerceCore } from "../../hooks/ecommercecore"

export default function Index() {
  const ecommerceCores = useAllEcommerceCore()

  return (
    <Layout>
      <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left">
        Les solutions "core ecommerce"
      </h1>
      <ul>
        {ecommerceCores.map(core => (
          <li>
            <Link key={`/global/${core.title}`} to={`/global/${core.title}`}>
              {core.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
