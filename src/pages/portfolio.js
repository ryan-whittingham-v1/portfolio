import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"


const AboutPage = () => {
  return (
    <Layout>
      <Head title="Portfolio" />
      <h1>Portfolio</h1>
      <p>Indecisive App: <a href="https://i-just-cant-decide.netlify.com/"></a></p>
      <p>My github page <a href="https://github.com/ryan-whittingham-v1"></a></p>
    </Layout>
  )
}

export default AboutPage
