import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Button = () => {
    const data = useStaticQuery(graphql`
        query {
            allComponentMetadata(filter: { displayName: { eq: "Button" } }) {
                totalCount
                nodes {
                    displayName
                    childrenComponentProp {
                        type {
                            value
                            raw
                        }
                        required
                        name
                        flowType
                    }
                }
            }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <SEO title="Button" />
        </Layout>
    )
}

export default Button
