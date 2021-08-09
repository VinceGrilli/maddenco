import React from "react"

import { Container, Row, Col } from "reactstrap"
import Link from "../components/link"
import Button from "../components/btn"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaBolt, FaHome, FaWrench } from "react-icons/fa"
import Form from "../components/form"
import Slider from "../components/slider"
import Box from "../components/box"
import Hr from "../components/hr"
import Benefits from "../components/benefits"
import styled from "styled-components"
import HomeFeatures from "../components/homeFeatures"
import Testimonials from "../components/testimonials"

let StyledBackground = styled.div`
  background: linear-gradient(to bottom, #f9fbfd 0, #fff 100%);
`

let Service = ({ title, Icon = FaHome }) => (
  <Col xs={12} md={4} className="mb-3">
    <Link to="/">
      <Box>
        <Icon size={30} />
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
  </Col>
)

let Index = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Benefits />
    <StyledBackground>
      <Container className="py-5">
        <h2 className="text-center mb-4">Services</h2>
        <HomeFeatures />
      </Container>
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <Box style={{ textAlign: "left" }}>
                <h3 className="text-center">Contact Us Today!</h3>
                <Hr />
                <Form />
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledBackground>

    <Testimonials />
  </Layout>
)

export default Index
