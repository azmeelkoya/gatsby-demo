import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import '../../styles/global.css'

export default function NPS({ data }) {
  const companies = data.allNewdataXlsxSheet1.edges
 
  return (
    <Layout>
      <div className="benchmarks">
        <h2>NPS Benchmarks</h2>
        <h3>See the NPS Benchmarks given below</h3>
        <div className="companies">
          { companies.map(company => (
            <Link to={"/nps-benchmarks/" + company.node.Company_Name} key={company.node.Company_Name}>
              <div>
                <h3>{company.node.Company_Name}</h3>
                <p>Score: {company.node.NPS}</p>
                <p>Type: {company.node.Business_Type}</p>
                <p>Size: {company.node.Employee_Size_}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
 
export const query = graphql`
  query BenchmarksPage {
    allNewdataXlsxSheet1 {
      edges {
        node {
          Company_Name
          NPS
          Business_Type
          Employee_Size_
        }
      }
    }
  }
`