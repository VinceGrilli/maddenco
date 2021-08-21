import React from "react"
import { Container, Row, Col } from "reactstrap"
import Link from "./link"
import styled from "styled-components"
import footerItems from "../data/footer.json"

const FooterStyling = styled.footer`
  padding: 3rem 0;
  background: #f8f9fa;
  a,
  a:hover {
    color: inherit;
  }
  ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
      a,
      a:hover {
        color: inherit;
      }
    }
  }
`

let Footer = () => (
  <FooterStyling>
    <Container className="d-flex justify-content-around">
      <Row>
        {footerItems.map((item) => (
          <Col key={item.name} xs={12} md={3}>
            <h5>
              <Link to={item.url}>{item.name}</Link>
            </h5>
          </Col>
        ))}
      </Row>
    </Container>
  </FooterStyling>
)

export default Footer
