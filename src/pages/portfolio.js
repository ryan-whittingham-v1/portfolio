import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"


const AboutPage = () => {
  return (
    <Layout>
      <Head title="Portfolio" />
      <h1>Portfolio</h1>
      <p>I hope to have links to live projects here in the near future. 📓</p>
      <p>For now you can look at my github page <a href="https://github.com/ryan-whittingham-v1">here.</a></p>
    </Layout>
  )
}

export default AboutPage
