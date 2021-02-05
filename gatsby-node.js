const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulECommerceCore(filter: { node_locale: { eq: "fr-FR" } }) {
        nodes {
          description {
            raw
          }
          title
          logo {
            gatsbyImageData(layout: FIXED, width: 100)
            title
          }
        }
      }
    }
  `)

  result.data.allContentfulECommerceCore.nodes.forEach(node => {
    createPage({
      path: "/global/" + node.title,
      component: path.resolve(`./src/templates/core.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        title: node.title,
      },
    })
  })
}
