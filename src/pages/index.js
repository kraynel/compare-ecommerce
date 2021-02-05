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
import ShopifyDesc from "../components/shopify-desc"

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
        answerLabel: "Vous lancez un nouveau site de e-commerce",
        ponderation: [
          {
            category: "checkout",
            key: "shopify",
            value: 1,
            arg: () => (
              <>
                <p>
                  Pour le lancement de votre site, privilégiez l'approche "POC"
                  pour tester votre idée et trouver le product / market fit. En
                  utilisant Shopify, une solution très peu coûteuse à mettre en
                  place, vous pourrez lancer votre site sans des délais très
                  courts, en quelques jours, et rentrer au contact des
                  utilisateurs.
                </p>
                <p>
                  {" "}
                  Après les premières ventes, vous pourrez capitaliser sur de
                  premiers précieux insights pour affiner votre offre, votre
                  organisation logistique et votre stratégie d'acquisition et de
                  conversion. Vous serez également à même d'analyser les données
                  utilisateurs grâce aux nombreux plugins proposés par Shopify
                  afin de continuer à améliorer votre store en réalisant des
                  investissements plus poussés sur des fonctionnalités plus
                  personnalisées.
                </p>
              </>
            ),
          },
        ],
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
        answerLabel: "Vous pensez faire moins de 1M€ de CA en années 2 et 3",
        ponderation: [
          {
            category: "checkout",
            key: "shopify",
            value: 2,
            arg: () => (
              <>
                <p>
                  La solution Shopify est parfaitement adaptée pour les sites
                  générant moins 1 M€ de chiffre d'affaire. L'argument principal
                  est celui du coût.{" "}
                </p>
                <p>
                  Pour comparer les coûts d'une solution SaaS comme Shopify avec
                  les solutions all-in-one historiques Open Source comme Magento
                  ou Prestashop est souvent complexe. Il ne faut pas s’arrêter
                  aux coûts de licences, mais bien prendre en compte le Total
                  Cost of Ownership (TCO) : les coûts d’hébergement, de montée
                  de version, de développements de plugin personnalisés par des
                  agences expertes, les licences de plugins, les maintenances,
                  etc..
                </p>
                <p>
                  Sur le moyen terme (moins de 3 ans), les solutions SaaS comme
                  Shopify sont généralement moins coûteuses que les solutions
                  historiques, et permettent de lancer des sites avec un coût
                  progressif.
                </p>
                <p>
                  Sur ce tableau sur lequel nous avons comparé les coûts réels
                  déclarés par l'un de nos partenaires au CA d'environ 1M€, avec
                  les coûts théoriques d'un site faisant un chiffre d'affaire
                  similaire, et réalisé avec Shopify
                </p>
              </>
            ),
          },
        ],
      },
      {
        label: "Entre 100 k€ et 1M€",
        answerLabel: "Vous pensez faire moins de 1M€ de CA en années 2 et 3",
        ponderation: [
          {
            category: "checkout",
            key: "shopify",
            value: 1,
            arg: () => (
              <>
                <p>
                  La solution Shopify est parfaitement adaptée pour les sites
                  générant moins 1 M€ de chiffre d'affaire. L'argument principal
                  est celui du coût.{" "}
                </p>
                <p>
                  Pour comparer les coûts d'une solution SaaS comme Shopify avec
                  les solutions all-in-one historiques Open Source comme Magento
                  ou Prestashop est souvent complexe. Il ne faut pas s’arrêter
                  aux coûts de licences, mais bien prendre en compte le Total
                  Cost of Ownership (TCO) : les coûts d’hébergement, de montée
                  de version, de développements de plugin personnalisés par des
                  agences expertes, les licences de plugins, les maintenances,
                  etc..
                </p>
                <p>
                  Sur le moyen terme (moins de 3 ans), les solutions SaaS comme
                  Shopify sont généralement moins coûteuses que les solutions
                  historiques, et permettent de lancer des sites avec un coût
                  progressif.
                </p>
                <p>
                  Sur ce tableau sur lequel nous avons comparé les coûts réels
                  déclarés par l'un de nos partenaires au CA d'environ 1M€, avec
                  les coûts théoriques d'un site faisant un chiffre d'affaire
                  similaire, et réalisé avec Shopify
                </p>
              </>
            ),
          },
        ],
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
        answerLabel: "Vous avez un budget <20k pour l'implémentation",
        ponderation: [
          {
            category: "checkout",
            key: "shopify",
            value: 1,
            arg: () => (
              <>
                <p>
                  Shopify vous permet de lancer une boutique parfaitement
                  fonctionnelle en quelques heures. L'essentiel du travail à
                  réaliser est un travail de configuration : ajout des fiches
                  produits, En vous basant sur les templates proposés par
                  Shopify et la communauté, et en configurant les nombreuses
                  fonctionnalités proposées nativement, vous pouvez dans un
                  premier temps lancer un premier MVP rapidement pour tester
                  votre idée et réaliser vos premières ventes sans réaliser un
                  investissement trop important.
                </p>
                <p>
                  L'ajout de plugins, dont certains sont gratuits, vous
                  permettra de compléter avec d'éventuelles fonctionnalités qui
                  vous paraitraient manquantes : retargeting, fidélité, chèques
                  cadeaux, etc...
                </p>
                <p>
                  Vous pouvez pour configurer votre boutique vous appuyer sur un
                  freelance expert en Shopify, passer par une agence
                  spécialisée, ou le faire vous-même en vous aidant de la
                  documentation très fournie proposée par l'éditeur.
                </p>
              </>
            ),
          },
        ],
      },
      {
        label: "Entre 20 et 100 k€",
        answerLabel:
          "Vous avez un budget compris entre 20k et 100k pour l'implémentation",
        ponderation: [
          {
            category: "checkout",
            key: "shopify",
            value: 1,
            arg: () => (
              <>
                <p>
                  Dans ce budget, vous pourrez lancer une boutique avec un
                  design personnalisé, éventuellement quelques fonctionnalités
                  custom en plus du natif Shopify.
                </p>

                <p>
                  Dans un premier temps, nous vous recommandons de lancer
                  rapidement un POC (Proof of Concept) très rapidement pour
                  commencer à avoir des premiers retours utilisateurs. Shopify
                  vous permet de lancer une boutique parfaitement fonctionnelle
                  en quelques heures. L'essentiel du travail à réaliser est un
                  travail de configuration : ajout des fiches produits, En vous
                  basant sur les templates proposés par Shopify et la
                  communauté, et en configurant les nombreuses fonctionnalités
                  proposées nativement, vous pouvez dans un premier temps lancer
                  un premier MVP rapidement pour tester votre idée et réaliser
                  vos premières ventes sans réaliser un investissement trop
                  important.
                </p>

                <p>
                  L'ajout de plugins, dont certains sont gratuits, vous
                  permettra de compléter avec d'éventuelles fonctionnalités qui
                  vous paraitraient manquantes : retargeting, fidélité, chèques
                  cadeaux, etc...
                </p>

                <p>
                  Dans un second temps, vous pourrez vous baser sur les retours
                  utilisateurs pour pousser la personnalisation :
                </p>
                <ul>
                  <li>
                    Possibilité de personnaliser, grâce au langage Liquid, les
                    templates front-end, qui utilisent le langage Liquid, très
                    simple à maîtriser pour tout développeur connaissant les
                    bases du HTML ou du CSS
                  </li>
                  <li>
                    Intégrer des app en javascript directement dans le code
                  </li>
                  <li>Créer vos propres apps custom</li>
                  <li>
                    Vous connecter à des briques externes (logistique ou
                    marketing par exemple) grâce à la très puissante core API
                    rest
                  </li>
                </ul>
              </>
            ),
          },

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
        answerLabel:
          "Vous n'avez pas d'attente poussée pour la personnalisation du design du front",
        ponderation: [
          {
            category: "checkout",
            key: "shopify",
            value: 1,
            arg: () => (
              <>
                <p>
                  Niveau 1 : choisir et utiliser un template proposé par Shopify
                </p>
                <p>
                  Eventuellement, possibilité de le personnaliser en le mettant
                  à vos couleurs
                </p>
              </>
            ),
          },
        ],
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
        answerLabel:
          "Vous n'avez pas de besoins fonctionnels très personnalisés",
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
        answerLabel: "Vous n'avez pas d'équipe technique en interne",
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
  const [args, setArgs] = useState([])

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
      <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
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
                  setArgs(args => {
                    a.ponderation.forEach(p => {
                      args.push({
                        label: a.answerLabel,
                        key: p.key,
                        arg: p.arg,
                      })
                    })
                    return args
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
                setArgs([])
              }}
              value="reset"
            >
              Réessayer
            </button>
          )}
        </p>
        {!currentQuestion && (
          <div className="mt-10">
            <p className="mb-4 font-bold text-gray-900">Notre recommandation</p>
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
                <div key={category}>
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
                  {maxName === "shopify" && <ShopifyDesc />}
                  {args
                    .filter(
                      ({ key, arg, label }) =>
                        key === maxName && typeof arg === "function" && label
                    )
                    .map(({ label, arg }, index) => (
                      <details className="mt-4" key={index}>
                        <summary className="font-bold">{label}</summary>
                        {arg()}
                      </details>
                    ))}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </Layout>
  )
}
