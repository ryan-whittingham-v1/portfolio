import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Headshot = () => {
    const data = useStaticQuery(graphql`
    query {
            contentfulAsset(title: {eq: "Ryan Whittingham Face1"}){
                fixed(width: 75) { 
                    width
                    height
                    src
                    srcSet
                }
            }
             
     } 
    `)

    return (
        <div>
            <Img fixed={data.contentfulAsset.fixed} />
        </div>
    )

}
export default Headshot
