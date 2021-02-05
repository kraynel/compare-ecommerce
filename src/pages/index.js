import React, { useState } from "react"
import Layout from "../components/layout"

import { useAllQuestions } from "../hooks/questions"
import { useAllEcommerceCore } from "../hooks/ecommercecore"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ShopifyDesc from "../components/shopify-desc"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [scores, setScores] = useState({})
  const [args, setArgs] = useState([])

  const questions = useAllQuestions()
  const ecommerceCores = useAllEcommerceCore()
  const currentQuestion = questions[questionIndex] ?? null
  let maxScore = 0
  let defaultTech = "Shopify"
  let maxName = defaultTech
  Object.keys(scores).forEach(tech => {
    if (
      scores[tech] > maxScore ||
      (scores[tech] === maxScore && maxName === defaultTech)
    ) {
      maxScore = scores[tech]
      maxName = tech
    }
  })
  const winner = ecommerceCores.find(c => c.title === maxName)

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
        <p className="mb-4 font-bold text-gray-900">
          {currentQuestion?.title?.title}
        </p>
        {/* {currentQuestion?.subtitle && (
          <p className="text-gray-700">{currentQuestion.subtitle}</p>
        )} */}
        <p className="mt-4">
          {currentQuestion ? (
            currentQuestion.answers.map(a => (
              <button
                className="mr-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                value={a.title.title}
                key={a.title.title}
                onClick={e => {
                  setScores(scores => {
                    let newScores = { ...scores }
                    a.ponderations.forEach(p => {
                      newScores = { ...scores }
                      if (!newScores[p.ecommercecore.title]) {
                        newScores[p.ecommercecore.title] = 0
                      }
                      newScores[p.ecommercecore.title] += p.weight
                    })
                    return newScores
                  })
                  if (a?.argumentTitle) {
                    setArgs(args => {
                      a.ponderations.forEach(p => {
                        args.push({
                          label: a.argumentTitle.argumentTitle,
                          key: p.ecommercecore.title,
                          arg: p.argument.raw,
                        })
                      })
                      return args
                    })
                  }
                  setQuestionIndex(index => index + 1)
                }}
              >
                {a.title.title}
              </button>
            ))
          ) : (
            <button
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              onClick={() => {
                setQuestionIndex(0)
                setScores({})
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
            <div>
              <span className="mb-4 font-bold text-gray-900">
                Notre recommandation
              </span>
              <Link className="m-2" to="/global">
                {winner.title}{" "}
                <GatsbyImage
                  className="w-20 inline-block"
                  image={winner.logo.gatsbyImageData}
                  alt={winner.title}
                />
              </Link>
              {winner?.description?.raw
                ? documentToReactComponents(
                    JSON.parse(winner?.description?.raw)
                  )
                : null}
              {maxName === "Shopify" && <ShopifyDesc />}
              {args
                .filter(({ key, label }) => key === maxName && label)
                .map(({ label, arg }, index) => (
                  <details className="mt-4" key={index}>
                    <summary className="font-bold">{label}</summary>
                    {documentToReactComponents(JSON.parse(arg))}
                  </details>
                ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
