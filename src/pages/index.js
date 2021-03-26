import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import '../styles/global.css'

export default function Home() {
  return (
    <Layout>
      <section className="header">
        <div>
          <h2>SurveySparrow</h2>
          <h3>Do more than just surveys.</h3>
          <p>An Omni-channel Experience Management Platform.</p>
          <Link className="btn" to="/nps-benchmarks">NPS BENCHMARKS</Link>
        </div>
        <div className="image-div">
          <img src="/ss-banner-customer-experience-v2.png" alt="Hero"/>
        </div>
      </section>
    </Layout>
  )
}