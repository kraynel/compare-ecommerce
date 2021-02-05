import React from "react"

export default function ShopifyDesc() {
  return (
    <div className="mt-5">
      <p>
        Le SaaS créé il y a 15 ans s'impose comme l'une des technologies
        incontournables du e-commerce. Challenger du{" "}
        <a href="https://www.cms-connected.com/News-Archive/December-2019/Gartner-Magic-Quadrant-for-Digital-Commerce-2019-Review">
          Gartner Magic Quadrant
        </a>
        en 2020, Shopify est une solution qui malgré son image de CMS à
        destination des petits acteurs, a su accompagner la croissance de pure
        players au chiffre d'affaire de plus de trois chiffres.
      </p>

      <p className="mt-5 font-bold">Fiche d'identité de Shopify</p>
      <ul className="list-disc">
        <li>Année de création : 2006</li>
        <li>Type de CMS : SaaS</li>
        <li>Headless : oui</li>
        <li>Licence : entre 29$ et 299 $ / mois</li>
        <li>Commission sur les ventes</li>
        <li>Ventes : de 0,5% à 2%</li>
        <li>Clients 100M$ de CA : Tesla, Gymshark, Kylie Cosmetics</li>
        <li>Clients en France : Asphalte, Tesla</li>
      </ul>
    </div>
  )
}
