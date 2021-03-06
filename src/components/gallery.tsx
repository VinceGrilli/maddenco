import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import styled from "@emotion/styled"

export const Gallery = (props: Props) => {
  const imageData = useStaticQuery(graphql`
    query {
      newConstruction: allFile(
        filter: { relativeDirectory: { in: "new-construction" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      finishWork: allFile(
        filter: { relativeDirectory: { in: "finish-work" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      radiantHeat: allFile(
        filter: { relativeDirectory: { in: "radiant-heat" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      tankless: allFile(
        filter: { relativeDirectory: { in: "tankless" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      boilers: allFile(
        filter: { relativeDirectory: { in: "boilers" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      gas: allFile(
        filter: { relativeDirectory: { in: "gas" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <GalleryContainer>
      {imageData[props.section].nodes.map((img: any) => (
        <GatsbyImage fluid={img.childImageSharp.fluid} />
      ))}
    </GalleryContainer>
  )
}

type Props = {
  section: GallerySection
}

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 0.5rem;
  margin-bottom: 3rem;
`

export enum GallerySection {
  NewConstruction = "newConstruction",
  FinishWork = "finishWork",
  RadiantHeat = "radiantHeat",
  Boilers = "boilers",
  Gas = "gas",
  Tankless = "tankless"
}
