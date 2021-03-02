import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Core({ data }) {
  return (
    <Layout>
      <GatsbyImage
        critical
        className="w-150 inline-block"
        image={data.contentfulECommerceCore.logo.gatsbyImageData}
        alt={data.contentfulECommerceCore.title}
      />
      {data.contentfulECommerceCore?.description?.raw &&
        documentToReactComponents(
          JSON.parse(data.contentfulECommerceCore.description.raw)
        )}
    </Layout>
  )
}

export const query = graphql`
  query($title: String = "") {
    contentfulECommerceCore(
      title: { eq: $title }
      node_locale: { eq: "fr-FR" }
    ) {
      title
      description {
        raw
      }
      logo {
        gatsbyImageData(width: 150)
      }
    }
  }
`
