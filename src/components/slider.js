import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

const SliderContainer = styled.div`
  background: linear-gradient(210deg, #0973ba, #c3272e);
  color: white;
  padding: 10rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
`

let SlickSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const sideMetadata = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  let { title, description } = sideMetadata.site.siteMetadata
  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </Slider>
    </SliderContainer>
  )
}

export default SlickSlider
