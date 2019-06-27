import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Sidebar from "../../components/sidebar"

const Button = props => {
    console.log(props)
    return (
        <Layout>
            <SEO title="Button" />
        </Layout>
    )
}

export default Button
