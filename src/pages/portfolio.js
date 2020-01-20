import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"


const AboutPage = () => {
  return (
    <Layout>
      <Head title="Portfolio" />
      <h1>Portfolio</h1>
      <p><a href="https://i-just-cant-decide.netlify.com/" target="blank">Randomized item selector app.</a></p>
      <p><a href="https://github.com/ryan-whittingham-v1" target="blank">My github page.</a></p>
    </Layout>
  )
}

export default AboutPage
