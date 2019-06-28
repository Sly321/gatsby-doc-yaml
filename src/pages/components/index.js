import React from "react"
import Image from "../../components/image"
import Layout from "../../components/layout"

const IndexPage = () => (
    <Layout title="Komponenten">
        <h2>Welcome!</h2>
        <p>What you can Expect.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    </Layout>
)

export default IndexPage
