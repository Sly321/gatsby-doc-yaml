import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"
import { Helmet } from "react-helmet"

const Layout = ({ children, title, lang }) => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang,
                }}
                title={title}
                titleTemplate={`%s | ${siteMetadata.title}`}
            >
                <link
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </Helmet>
            <div>
                <Header siteTitle={title} />
                <div style={{ flexGrow: 1, marginTop: 80 }}>
                    <main className="p-1" style={{ marginRight: 80 }}>
                        {children}
                    </main>
                    <footer>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">❤️</a>
                    </footer>
                </div>
                <Sidebar
                    style={{
                        position: "fixed",
                        right: 0,
                        height: "100%",
                        width: 200,
                        top: 0,
                        marginTop: 80,
                        zIndex: 1,
                    }}
                />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    lang: PropTypes.string,
    title: PropTypes.string.isRequired,
}

Layout.defaultProps = {
    lang: `en`,
}

export default Layout
