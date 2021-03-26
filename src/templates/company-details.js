import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function CompanyDetails({ data }) {
    const { Company_Name, NPS, About, Source, Headquater, Industry, Type, Business_Type, Employee_Size_, Founded } = data.allNewdataXlsxSheet1.edges[0].node

    return (
        <Layout>
            <div className="details">
                <div className="flex">
                  <div className="left-div">
                    <h2>{ Company_Name }</h2>
                    <p>{ About }</p>
                  </div>
                  <h3>NPS<br/> <span>{ NPS }</span> </h3>
                </div>
                <div className="table-div">
                  <table>
                    <tbody>
                      <tr>
                        <td>Headquarters</td>
                        <td>{ Headquater }</td>
                      </tr>
                      <tr>
                        <td>Industry</td>
                        <td>{ Industry }</td>
                      </tr>
                      <tr>
                        <td>Business type</td>
                        <td>{ Business_Type }</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>{ Type }</td>
                      </tr>
                      <tr>
                        <td>Employee size</td>
                        <td>{ Employee_Size_ }</td>
                      </tr>
                      <tr>
                        <td>Founded</td>
                        <td>{ Founded }</td>
                      </tr>
                      <tr>
                        <td>Source</td>
                        <td>{ Source }</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery($company: String) {
    allNewdataXlsxSheet1(filter: {Company_Name: {eq: $company}}) {
      edges {
        node {
          Company_Name
          NPS
          About
          Source
          Headquater
          Industry
          Type
          Business_Type
          Employee_Size_
          Founded
        }
      }
    }
  }
`
  
