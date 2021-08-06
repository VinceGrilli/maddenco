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
    </section>
  </PageTemplate>
)

export default GalleryPage
