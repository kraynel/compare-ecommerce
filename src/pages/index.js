import React, { useState } from "react"
import Layout from "../components/layout"
import shopifyLogo from "../assets/shopify.svg"
import shopifyPlusLogo from "../assets/shopify-plus.svg"
import algoliaLogo from "../assets/algolia.svg"
import akeneoLogo from "../assets/akeneo.svg"
import syliusLogo from "../assets/sylius.svg"
import vuestorefrontLogo from "../assets/vuestorefront.svg"
import contentfulLogo from "../assets/contentful.svg"
import commercetoolsLogo from "../assets/commercetools.svg"

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
    shopifyplus: 0,
    commercetools: 0,
    sylius: 0,
  },
}

const questions = [
  {
    label: "Votre projet est-il ?",
    answers: [
      {
        label: "Le lancement d'un nouveau site",
        ponderation: [{ category: "checkout", key: "shopify", value: 1 }],
      },
      {
        label: "La refonte d'un site existant",
        ponderation: [
          { category: "checkout", key: "shopifyplus", value: 1 },
          { category: "checkout", key: "commercetools", value: 1 },
          { category: "checkout", key: "shopify", value: 1 },
        ],
      },
    ],
  },
  {
    label: "Quel Chiffre d'Affaire prévoyez-vous en années 2 et 3 ?",
    answers: [
      {
        label: "Entre 0 et 100 k€",
        ponderation: [{ category: "checkout", key: "shopify", value: 2 }],
      },
      {
        label: "Entre 100 k€ et 1M€",
        ponderation: [{ category: "checkout", key: "shopify", value: 1 }],
      },
      {
        label: "Plus d'1M€",
        ponderation: [{ category: "checkout", key: "shopifyplus", value: 1 }],
      },
      {
        label: "Plus de 10M€",
        ponderation: [{ category: "checkout", key: "commercetools", value: 2 }],
      },
    ],
  },

  {
    label: "Quel est votre budget pour l'implémentation ?",
    answers: [
      {
        label: "< 20 k€",
        ponderation: [{ category: "checkout", key: "shopify", value: 1 }],
      },
      {
        label: "Entre 20 et 100 k€",
        ponderation: [
          { category: "checkout", key: "shopify", value: 1 },
          { category: "checkout", key: "shopifyplus", value: 1 },
        ],
      },
      {
        label: "> 100k€ ",
        ponderation: [
          { category: "checkout", key: "shopifyplus", value: 1 },
          { category: "checkout", key: "commercetools", value: 1 },
        ],
      },
    ],
  },
  {
    label:
      "Attendez-vous un niveau de personnalisation poussé sur le design du front ?",
    answers: [
      {
        label: "oui",
        ponderation: [],
      },
      {
        label: "non",
        ponderation: [{ category: "checkout", key: "shopify", value: 1 }],
      },
    ],
  },
  {
    label:
      "Avez-vous besoin de fonctionnalités très personnalisées par rapport à un site de e-commerce classique ?",
    answers: [
      {
        label: "oui",
        ponderation: [
          { category: "checkout", key: "sylius", value: 1 },
          { category: "checkout", key: "commercetools", value: 1 },
        ],
      },
      {
        label: "non",
        ponderation: [
          { category: "checkout", key: "shopifyplus", value: 1 },
          { category: "checkout", key: "shopify", value: 1 },
        ],
      },
    ],
  },
  {
    label: "Quel nombre de produits prévoyez-vous de proposer ?",
    answers: [
      {
        label: "< 20 000",
        ponderation: [{ category: "checkout", key: "shopify", value: 1 }],
      },
      {
        label: "> 20 000",
        ponderation: [{ category: "checkout", key: "sylius", value: 1 }],
      },
    ],
  },
  {
    label: "Avez-vous une équipe technique en interne ?",
    answers: [
      {
        label: "Oui",
        ponderation: [],
      },
      {
        label:
          "Non, mais je prévois d'en recruter une avant la fin de l'implémentation",
        ponderation: [],
      },
      {
        label: "Non",
        ponderation: [
          { category: "checkout", key: "shopifyplus", value: 1 },
          { category: "checkout", key: "shopify", value: 1 },
        ],
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
    case "shopifyplus":
      return shopifyPlusLogo
    case "contentful":
      return contentfulLogo
    case "sylius":
      return syliusLogo
    case "akeneo":
      return akeneoLogo
    case "vuestorefront":
      return vuestorefrontLogo
    case "commercetools":
      return commercetoolsLogo
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
        <p className="mb-4 font-bold text-gray-900">{currentQuestion?.label}</p>
        {currentQuestion?.sublabel && (
          <p className="text-gray-700">{currentQuestion.sublabel}</p>
        )}
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
                if (
                  scores[category][tech] > maxScore ||
                  (scores[category][tech] === maxScore &&
                    maxName === defaultTech)
                ) {
                  maxScore = scores[category][tech]
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
