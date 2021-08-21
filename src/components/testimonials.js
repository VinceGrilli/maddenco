import React from "react"
import { Col, Row, Container } from "reactstrap"
import { FaStar } from "react-icons/fa"
import styled from "styled-components"

let Background = styled.div`
  background: linear-gradient(to bottom, #f9fbfd 0, #fff 100%);
`

let Testimonial = ({ stars = 5, content, client, location }) => (
  <Col md={4}>
    {[...Array(stars)].map((star) => (
      <FaStar className="mr-1" color="#ec9a3c" />
    ))}
    <p className="mt-3">{content}</p>
    <h6 className="font-weight-bold mb-0">{client}</h6>
    <small className="text-secondary">{location}</small>
  </Col>
)

const Testimonials = () => (
  <Background>
    <Container className="py-5">
      <h2 className="text-center">Client Testimonials</h2>
      <Row className="d-flex justify-content-center">
        <Col md="7">
          <p className="text-center text-secondary">
            We've been providing top quality plumbing & heating services on Cape
            Cod for over a decade. Here’s what our clients say.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Testimonial
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          client="Bruce Wayne"
          location="Brewster"
        />
        <Testimonial
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          client="Luke Skywalker"
          location="Harwich"
        />
        <Testimonial
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          client="Clark Kent"
          location="Orleans"
        />
      </Row>
    </Container>
  </Background>
)

export default Testimonials
