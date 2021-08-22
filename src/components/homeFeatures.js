import React from "react"
import { Container, Col, Row } from "reactstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

let StyledFeature = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition-duration: 0.25s;
  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }
`

let Feature = ({ title, description, img }) => (
  <Col md={4} className="mb-3">
    <StyledFeature>
      <Img fluid={img} />
      <div className="p-3">
        <h5 className="text-center">{title}</h5>
        <p>{description}</p>
      </div>
    </StyledFeature>
  </Col>
)

let HomeFeatures = () => {
  const data = useStaticQuery(graphql`
    fragment defaultImage on File {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query featuresQuery {
      slide1: file(relativePath: { eq: "finish-shower.jpeg" }) {
        ...defaultImage
      }
      slide2: file(relativePath: { eq: "new-construction1.jpg" }) {
        ...defaultImage
      }
      slide3: file(relativePath: { eq: "radiant-heat1.jpeg" }) {
        ...defaultImage
      }
      slide4: file(relativePath: { eq: "gas1.jpeg" }) {
        ...defaultImage
      }
      slide5: file(relativePath: { eq: "tankless1.jpg" }) {
        ...defaultImage
      }
      slide6: file(relativePath: { eq: "Boiler1.jpeg" }) {
        ...defaultImage
      }
    }
  `)
  return (
    <Container className="py-5">
      <Row>
        <Feature
          title="Finish Work"
          description="Kitchen & bath remodels. Faucet, sink, & toilet replacements. Fridge & ice machine hookups. Outdoor showers and more! "
          img={data.slide1.childImageSharp.fluid}
        />
        <Feature
          title="New Construction"
          description="Hot water tanks & boilers, washer & dryer hookups, frost-proof sillcocks and much more... Rough to finish we do it all!"
          img={data.slide2.childImageSharp.fluid}
        />
        <Feature
          title="Radiant Heat"
          description="We specailize in the installation and maintenance of hydronic radiant floor systems."
          img={data.slide3.childImageSharp.fluid}
        />
      </Row>
      <Row>
        <Feature
          title="Gas"
          description="We do new meter connections, propane/oil conversions, fireplaces & pits, pool heaters, generators & all in-home gas appliances"
          img={data.slide4.childImageSharp.fluid}
        />
        <Feature
          title="Tankless Water Heaters"
          description="Save space and energy with a modern on-demand tankless hot water heater. Never worry about hot water shortages again"
          img={data.slide5.childImageSharp.fluid}
        />
        <Feature
          title="Boilers"
          description="We are experienced in the installation and replacement of all types of boilers to keep your home heated efficiently"
          img={data.slide6.childImageSharp.fluid}
        />
      </Row>
    </Container>
  )
}

export default HomeFeatures
