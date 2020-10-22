import React, { useState } from "react"

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
    shopify: 0,
    contentful: 0,
  },
}

const questions = [
  {
    label: "personnalisation front poussée ?",
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
    label: "avez vous des règles métier complexes ?",
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
    label: "avez vous une recherce avancée ?",
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
    label: "nombre de produits ou arborescence complexe",
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
    <div>
      <span>{currentQuestion && currentQuestion.label}</span>
      {currentQuestion ? (
        currentQuestion.answers.map(a => (
          <button
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
          onClick={() => {
            setQuestionIndex(0)
            setScores(categories)
          }}
          value="reset"
        >
          Reset
        </button>
      )}
      <div>
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
            <div key={category}>
              {category} : {maxName}
            </div>
          )
        })}
      </div>
    </div>
  )
}
