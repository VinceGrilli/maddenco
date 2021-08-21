import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FaWrench } from "react-icons/fa"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

let StyledImg = styled((props) => <Img {...props} />)`
  perspective: 1500px;
  perspective-origin: left center;
  overflow: visible !important;
  picture,
  img {
    transform: rotateY(-2deg) rotateX(2deg);
    box-shadow: 25px 60px 125px -25px rgba(80, 102, 144, 0.1),
      16px 40px 75px -40px rgba(0, 0, 0, 0.2);
    border-radius: 0.625rem;
    transition: 1s !important;
    &:hover {
      transform: rotateY(-5deg) rotateX(5deg);
    }
  }
`

let Benefit = ({ title, content }) => (
  <div className="d-flex mb-4">
    <FaWrench size={30} className="text-primary" />
    <div className="ml-3">
      <h4>{title}</h4>
      <p className="m-0 text-muted">{content}</p>
    </div>
  </div>
)

let Benefits = ({ data }) => (
  <Container className="py-5">
    <Row className="d-flex align-items-center">
      <Col md="6">
        <div className="mb-4">
          <h2 className="text-primary">Full Service Cape Cod Plumbers</h2>
          <p className="text-muted">Rough to finish we do it all!</p>
        </div>
        <Benefit
          title="Fully Licensed & Insured"
          content="We are a fully licensed and insured plumbing company servicing Cape Cod. We always get the job done right the first time."
        />
        <Benefit
          title="Quick Responce Time"
          content="We are Cape Cod's plumbing specialists. Quality and customer satisfaction are our top priorities."
        />
        <Benefit
          title="Modern Pluming & Heating Solutions"
          content="Our licensed plumbers are trained in the latest technology and we install top quality products."
        />
      </Col>
      <Col md="6">
        <StyledImg
          fluid={data.file.childImageSharp.fluid}
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </Col>
    </Row>
  </Container>
)

const BenefitsQuery = () => (
  <StaticQuery
    query={graphql`
      query BenefitsQuery {
        file(relativePath: { eq: "van.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => <Benefits data={data} />}
  />
)

export default BenefitsQuery
