import React, { useState } from "react"
import Layout from "../components/layout"
import shopifyLogo from "../assets/shopify.svg"
import algoliaLogo from "../assets/algolia.svg"
import akeneoLogo from "../assets/akeneo.svg"
import syliusLogo from "../assets/sylius.svg"
import vuestorefrontLogo from "../assets/vuestorefront.svg"
import contentfulLogo from "../assets/contentful.svg"

const categories = {
  checkout: {
    shopify: 0,
    sylius: 0,
  },
  front: {
    vuestorefront: 0,
  },
  products: {
    akeneo: 0,
  },
  search: {
    algolia: 0,
  },
  content: {
    contentful: 0,
  },
}

const questions = [
  {
    label: "Personnalisation front poussée ?",
    answers: [
      {
        label: "oui",
        ponderation: [{ category: "front", key: "vuestorefront", value: 1 }],
      },
      {
        label: "non",
        ponderation: [],
      },
    ],
  },
  {
    label: "Avez vous des règles métier complexes ?",
    answers: [
      {
        label: "oui",
        ponderation: [
          { category: "checkout", key: "sylius", value: 1 },
          { category: "content", key: "contentful", value: 1 },
        ],
      },
      {
        label: "non",
        ponderation: [{ category: "checkout", key: "shopify", value: 1 }],
      },
    ],
  },

  {
    label: "Avez vous un besoin de recherce avancée ?",
    answers: [
      {
        label: "oui",
        ponderation: [{ category: "search", key: "algolia", value: 1 }],
      },
      {
        label: "non",
        ponderation: [],
      },
    ],
  },
  {
    label:
      "Y a-t-il des contraintes créées par le nombre de produits ou une arborescence complexe ?",
    answers: [
      {
        label: "oui",
        ponderation: [{ category: "products", key: "akeneo", value: 1 }],
      },
      {
        label: "non",
        ponderation: [],
      },
    ],
  },
]

const getLogo = name => {
  switch (name) {
    case "algolia":
      return algoliaLogo
    case "shopify":
      return shopifyLogo
    case "contentful":
      return contentfulLogo
    case "sylius":
      return syliusLogo
    case "akeneo":
      return akeneoLogo
    case "vuestorefront":
      return vuestorefrontLogo
    default:
      return null
  }
}

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [scores, setScores] = useState(categories)

  const currentQuestion = questions[questionIndex] ?? null
  let maxScore = 0
  let defaultTech = "shopify"
  Object.keys(scores.checkout).forEach(tech => {
    if (scores.checkout[tech] > maxScore) {
      maxScore = scores.checkout[tech]
      defaultTech = tech
    }
  })

  return (
    <Layout>
      <p>{currentQuestion && currentQuestion.label}</p>
      <p class="mt-4">
        {currentQuestion ? (
          currentQuestion.answers.map(a => (
            <button
              class="mr-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              value={a.label}
              key={a.label}
              onClick={e => {
                setScores(scores => {
                  let newScores = { ...scores }
                  a.ponderation.forEach(p => {
                    newScores[p.category] = { ...scores[p.category] }
                    newScores[p.category][p.key] += p.value
                  })
                  return newScores
                })
                setQuestionIndex(index => index + 1)
              }}
            >
              {a.label}
            </button>
          ))
        ) : (
          <button
            class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            onClick={() => {
              setQuestionIndex(0)
              setScores(categories)
            }}
            value="reset"
          >
            Reset
          </button>
        )}
      </p>
      <div class="mt-10">
        {Object.keys(scores).map(category => {
          let maxScore = 0
          let maxName = defaultTech
          Object.keys(scores[category]).forEach(tech => {
            if (scores[category][tech] > maxScore) {
              maxScore = category[tech]
              maxName = tech
            }
          })

          return (
            <div class="capitalize" key={category}>
              {category} :{" "}
              {getLogo(maxName) && (
                <img
                  className="w-20 inline-block"
                  src={getLogo(maxName)}
                  alt={maxName}
                />
              )}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
