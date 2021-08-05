import React from "react"
import styled from "styled-components"

const Background = styled.div`
  background: linear-gradient(210deg, #0973ba, #c3272e);
  color: white;
  padding: 8rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  text-align: center;
`

let PageTitle = ({ title }) => (
  <Background>
    <h1>{title}</h1>
  </Background>
)

export default PageTitle
