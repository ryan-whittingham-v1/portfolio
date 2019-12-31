import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"


const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>This is my contact page. 3..2..1..Contact.</p>
      <a href="https://google.com" target="_blank">
        Google
      </a>
    </Layout>
  )
}

export default ContactPage
