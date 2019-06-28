/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const fs = require(`fs`)
// const appRootDir = require(`app-root-dir`).get()

const markdownTemplatePath = path.resolve(`src/templates/markdownTemplate.js`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise(resolve => {
        graphql(`
            query {
                allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/content/md/" } }
                ) {
                    nodes {
                        html
                        timeToRead
                        parent {
                            ... on File {
                                name
                            }
                        }
                    }
                }
                allMenuYaml {
                    nodes {
                        id
                        items {
                            id
                        }
                    }
                }
            }
        `)
            .then(({ data: { allMarkdownRemark, allMenuYaml } }) => {
                const allYaml = allMenuYaml.nodes.flatMap(node =>
                    node.items.map(item => item.id)
                )
                const allMd = allMarkdownRemark.nodes

                allMd.forEach(md => {
                    const filename = md.parent.name

                    if (allYaml.includes(filename)) {
                        const path = `/${
                            allMenuYaml.nodes.find(node =>
                                node.items.find(item => item.id === filename)
                            ).id
                        }/${filename}`

                        createPage({
                            path,
                            component: markdownTemplatePath,
                            context: { ...md },
                        })
                    }
                })

                resolve(true)
            })
            .catch(err => {
                console.log(err)
                throw new Error(err)
            })
    })
}
//   const errors = docgenResult.errors || markdownResult.errors
//   if (errors) {
//     reject(new Error(errors))
//     return
//   }

//   const allComponents = docgenResult.data.allComponentMetadata.edges.map(
//     (edge, i) =>
//       Object.assign({}, edge.node, {
//         filePath: `/components/${edge.node.displayName}/`,
//         html: markdownResult.data.allMarkdownRemark.edges[i].node.html,
//       })
//   )

//   const exportFileContents =
//     allComponents
//       .reduce((accumulator, { displayName, filePath }) => {
//         const absolutePath = path.resolve(
//           path.join(`src`, filePath, displayName)
//         )
//         accumulator.push(
//           `export { default as ${displayName} } from "${absolutePath}"`
//         )
//         return accumulator
//       }, [])
//       .join(`\n`) + `\n`

//   fs.writeFileSync(
//     path.join(appRootDir, `.cache/components.js`),
//     exportFileContents
//   )

//   allComponents.forEach(data => {
//     const { filePath } = data
//     const context = Object.assign({}, data, {
//       allComponents,
//     })
//     createPage({
//       path: filePath,
//       component: componentPageTemplate,
//       context,
//     })
//   })

//   createPage({
//     path: `/components/`,
//     component: tableOfContentsTemplate,
//     context: {
//       allComponents,
//     },
//   })
// })
