const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query Company {
            allNewdataXlsxSheet1 {
                edges {
                    node {
                        Company_Name
                    }
                }
            }
        }
    `)

    data.allNewdataXlsxSheet1.edges.forEach(edge => {
        actions.createPage({
            path: '/nps-benchmarks/' + edge.node.Company_Name,
            component: path.resolve('./src/templates/company-details.js'),
            context: { company: edge.node.Company_Name }
        })
    })
}