import { useStaticQuery, graphql } from "gatsby"

export const useAllQuestions = () => {
  const result = useStaticQuery(graphql`
    {
      allContentfulQuestion(filter: { node_locale: { eq: "fr-FR" } }) {
        nodes {
          title {
            title
          }
          answers {
            argumentTitle {
              argumentTitle
            }
            title {
              title
            }
            ponderations {
              weight
              argument {
                raw
              }
              ecommercecore {
                title
              }
            }
            question {
              title {
                title
              }
            }
          }
        }
      }
    }
  `)

  return result.allContentfulQuestion.nodes
}
