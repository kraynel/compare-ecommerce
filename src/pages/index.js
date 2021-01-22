import React, { useState } from "react"
import Layout from "../components/layout"
import shopifyLogo from "../assets/shopify.svg"
import algoliaLogo from "../assets/algolia.svg"
import akeneoLogo from "../assets/akeneo.svg"
import syliusLogo from "../assets/sylius.svg"
import vuestorefrontLogo from "../assets/vuestorefront.svg"
import contentfulLogo from "../assets/contentful.svg"

import { Link } from "gatsby"

const categoryDetails = {
  checkout: { link: "/global", title: "Core ecommerce" },
  front: { link: "/front", title: "Front" },
  products: { link: "/pim", title: "PIM" },
  search: { link: "/search", title: "Recherche" },
  content: { link: "/cms", title: "Contenu édito" },
}

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
    label: "Avez vous besoin d'un rendu fortement personnalisé ?",
    sublabel:
      "La plupart des moteurs ecommerce proposent des templates 'tout en un', qui permettent de démarrer sans phase de design avancée. Ces templates sont personnalisables, mais dans le cas de personnalisation fortes ou d'une veritable image de marque très poussée, ces moteurs de templatings peuvent être trop limités.",
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
    sublabel:
      "Certains sites e-commerce partent de mécanismes très classiques, pas besoin de réinventer la roue !",
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
    sublabel:
      "C'est parfois le cas si vous offrez un très grand nombre de références, ou que vous souhaitez notamment réordonner les résultats de recherche avec des règles marketing.",
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
    sublabel:
      "Un grand nombre de produits ou des spécifictés de mises en lignes peuvent vous contraintre à utiliser un PIM.",
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
      <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          Construisez votre stack e-commerce !
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          Des SaaS, de l'open-source, du custom. Adoptez l'approche
          best-of-breed
        </p>
      </div>
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <p className="mb-4 font-bold text-gray-900">
          {currentQuestion && currentQuestion.label}
        </p>
        <p className="text-gray-700">
          {currentQuestion && currentQuestion.sublabel}
        </p>
        <p className="mt-4">
          {currentQuestion ? (
            currentQuestion.answers.map(a => (
              <button
                className="mr-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              onClick={() => {
                setQuestionIndex(0)
                setScores(categories)
              }}
              value="reset"
            >
              Réessayer
            </button>
          )}
        </p>
        {!currentQuestion && (
          <div className="mt-10">
            <p className="mb-4 font-bold text-gray-900">Nos recommandations</p>
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
                <div className="capitalize" key={category}>
                  <Link className="mr-2" to={categoryDetails[category].link}>
                    {categoryDetails[category].title} :
                  </Link>
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
        )}
      </div>
    </Layout>
  )
}
