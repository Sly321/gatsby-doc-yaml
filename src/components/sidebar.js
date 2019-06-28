import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Sidebar() {
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
    console.log(nodes)

    return (
        <>
            {nodes.map(({ title, id, items }) => {
                return (
                    <section key={id}>
                        <h2>{title}</h2>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    <Link to={`${id}/${item.id}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )
            })}
            <div>Insgesamt: </div>
        </>
    )
}
