import { useStaticQuery, graphql } from "gatsby"

export const useAllEcommerceCore = () => {
  const result = useStaticQuery(graphql`
    {
      allContentfulECommerceCore(filter: { node_locale: { eq: "fr-FR" } }) {
        nodes {
          description {
            raw
          }
          title
          logo {
            gatsbyImageData(layout: FIXED, width: 50)
            title
          }
        }
      }
    }
  `)

  return result.allContentfulECommerceCore.nodes
}
