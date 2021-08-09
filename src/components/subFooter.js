import React from "react"
import { Container } from "reactstrap"

import logo from "../assets/images/btc-logo.png"

let SubFooter = ({ title }) => (
  <div className="bg-light">
    <Container className="pb-3">
      <div className="site-info d-flex justify-content-center">
        © {new Date().getFullYear()}
        {` `}
        Website crafted by
        {` `}
        <a href="https://builttocode.dev">
          <img
            style={{
              maxWidth: `7rem`,
              paddingLeft: `.5rem`,
            }}
            src={logo}
            alt="Built to Code"
          />
        </a>
      </div>
    </Container>
  </div>
)

export default SubFooter
