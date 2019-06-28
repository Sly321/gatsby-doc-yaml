import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { Parser, ProcessNodeDefinitions } from "html-to-react"

const isValidNode = () => true
const isCodeExample = ({ name = `` } = {}) => name === `pre`

const parser = new Parser()
const processNodeDefinitions = new ProcessNodeDefinitions(React)
// const getHtmlCode = children => children[0].children[0].data

// const ExampleNodeProcessor = ({ children }) =>
//     React.createElement(ComponentPreview, { code: getHtmlCode(children) })

const processingInstructions = [
    {
        shouldProcessNode: isCodeExample,
        processNode: ({ children }) => children,
    },
    {
        shouldProcessNode: isValidNode,
        processNode: processNodeDefinitions.processDefaultNode,
    },
]

class Example extends React.Component {
    render() {
        console.log(this.props)
        const { html } = this.props.pageContext
        const reactml = parser.parseWithInstructions(
            html,
            isValidNode,
            processingInstructions
        )

        return (
            <Layout title="Maybe i can get Loaded">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Layout>
        )
    }
}

Example.propTypes = {
    pageContext: PropTypes.object,
}

export default Example
