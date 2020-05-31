module.exports = {
  siteMetadata: {
    title: `ThiagoTec`,
    description: `A portfolio & blog personal site.`,
    author: `@thienry`,
    siteUrl: `https://thiagotec.com`,
    image: `/thiagotec.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FF8585`,
        theme_color: `#FF8585`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://thiagotec-api.herokuapp.com`,
        queryLimit: 1000,
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          },
          {
            family: `Open Sans`
          },
          {
            family: `Poppins`
          }
        ]
      }
    },
    {
      siteMetadata: {
        siteUrl: `https://thiagotec.com`,
      },
      resolve: `gatsby-plugin-sitemap`,
    },
    /*{
      resolve: `gatsby-source-instagram`,
      options: {
        type: `user-profile`,
        username: `thienry`,
      },
    }*/
  ],
}
