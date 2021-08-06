import React from "react"
import PageTemplate from "../components/pageTemplate"
import { Gallery, GallerySection } from "../components/gallery"

const GalleryPage = () => (
  <PageTemplate title="Gallery">
    <section className="container">
      <h3>New Construction</h3>
      <Gallery section={GallerySection.NewConstruction} />
      <h3>Finish Work</h3>
      <Gallery section={GallerySection.FinishWork} />
      <h3>Radiant Heat</h3>
      <Gallery section={GallerySection.RadiantHeat} />
      <h3>Boilers</h3>
      <Gallery section={GallerySection.Boilers} />
      <h3>Gas</h3>
      <Gallery section={GallerySection.Gas} />
    </section>
  </PageTemplate>
)

export default GalleryPage
