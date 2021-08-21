import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

const SliderContainer = styled.div`
  background: linear-gradient(210deg, #0973ba, #c3272e);
  color: white;
  padding: 4rem 0;
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
      file(relativePath: { eq: "madden-company-logo1.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  let { title } = sideMetadata.site.siteMetadata
  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <Img
            style={{ position: "inherit" }}
            alt={title}
            objectFit="contain"
            objectPosition="50% 50%"
            fluid={sideMetadata.file.childImageSharp.fluid}
          />
        </div>
      </Slider>
    </SliderContainer>
  )
}

export default SlickSlider
