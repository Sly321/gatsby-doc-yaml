import React from "react"
import Layout from "../../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Properties from "../../components/properties"

const Button = () => {
    // const cmptName = "Button"

    // TODO UseConfigurable Input or Template
    const data = useStaticQuery(graphql`
        query {
            componentMetadata(displayName: { eq: "Button" }) {
                docblock
                displayName
                doclets
                props {
                    tsType {
                        name
                    }
                    type {
                        name
                    }
                    name
                    required
                    description {
                        text
                    }
                    doclets
                }
            }
            allMenuYaml(
                filter: { items: { elemMatch: { name: { eq: "Button" } } } }
            ) {
                nodes {
                    title
                }
            }
        }
    `)

    const { componentMetadata, allMenuYaml } = data

    // TODO allMenuYaml.nodes[0] possible nullPointer
    return (
        <Layout
            title={`${componentMetadata.displayName} | ${allMenuYaml.nodes[0].title}`}
        >
            <h2>{componentMetadata.displayName}</h2>
            <Properties componentProperties={componentMetadata.props} />
        </Layout>
    )
}

export default Button
