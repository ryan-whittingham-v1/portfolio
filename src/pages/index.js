import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"
import Headshot from "../components/headshot"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
          contentfulAsset(title: {eq: "Ryan Whittingham Face1"}){
              fixed(width: 50) { 
                  width
                  height
                  src
                  srcSet
              }
          }
           
   } 
  `)
  return (
    <Layout>
      <Head title="Home" />


      <h2>Greetings Friend 🖐</h2>

      <p>
        My name is Ryan. <Img fixed={data.contentfulAsset.fixed} /> I'm a software developer from Battle Ground, Washington.
      </p>

      <p>
        Here you'll find examples of my work as well as my blog that details my adventures in coding.
        I encourage you to have a look 👀 around. Feel free to reach out if you have any questions.
        Thanks for stopping by.
      </p>
    </Layout>
  )
}
export default IndexPage
