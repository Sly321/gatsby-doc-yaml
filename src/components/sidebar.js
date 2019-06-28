import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"

import "./sidebar.css"

export default function Sidebar({ style }) {
    const data = useStaticQuery(graphql`
        query {
            allMenuYaml {
                nodes {
                    id
                    title
                    items {
                        id
                        name
                    }
                }
            }
        }
    `)

    const { nodes } = data.allMenuYaml

    return (
        <nav className="sidebar py-1" style={style}>
            {nodes.map(({ title, id, items }) => {
                const titleLink = `/${id}`

                return (
                    <section
                        key={id}
                        className={`sidebar--section ${
                            location.pathname.includes(titleLink)
                                ? "active"
                                : ""
                        }`}
                    >
                        <div className="sidebar--title">{title}</div>
                        <ul className="py-2">
                            {items.map(item => {
                                const itemLink = `/${id}/${item.id}`
                                return (
                                    <li key={item.id}>
                                        <Link
                                            className={`sidebar--link ${
                                                location.pathname === itemLink
                                                    ? "active"
                                                    : ""
                                            }`}
                                            to={itemLink}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                )
            })}
        </nav>
    )
}

Sidebar.propTypes = {
    style: PropTypes.object,
}
