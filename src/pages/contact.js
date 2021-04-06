import React from "react"
import Layout from "../components/layout"
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form"

export default function Contact() {
  useHubspotForm({
    portalId: "2383597",
    formId: "2ff5b664-03b5-425c-9355-325262c22c68",
    target: "#hbpst-form",
  })

  return (
    <Layout>
      <div id="hbpst-form"></div>
    </Layout>
  )
}
