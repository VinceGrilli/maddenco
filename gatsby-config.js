let gtm = "1234"

module.exports = {
  siteMetadata: {
    title: `Madden Company`,
    description: `Fully Licenced & Insured Plumbing Company`,
    author: `Built to Code`,
    siteUrl: `https://gatsby-strapi-starter.netlify.com/`,
    phone: "1800123456",
    address: "123 fake street",
    email: "contact@test.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/assets/gallery`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: gtm,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "./src/assets/images/gatsby-icon.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preact`,
  ],
}
