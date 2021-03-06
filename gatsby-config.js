module.exports = {
  siteMetadata: {
    title: `ThiagoTec`,
    description: `A portfolio & blog personal site.`,
    author: `@thienry`,
    twitterUsername: "@thienry14",
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
        name: `Thiagotec`,
        short_name: `Thiagotec`,
        start_url: `/`,
        background_color: `#1f4068`,
        theme_color: `#1f4068`,
        display: `minimal-ui`,
        icon: `src/images/thiagotec.png`, // This path is relative to the root of the site.
      },
    },
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
      resolve: `@el7cosmos/gatsby-plugin-prefetch-google-fonts`,
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
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `thiagotec-com-1`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-162098046-1",
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `pub-7506061554414091`
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.thiagotec.com`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    /*{
      resolve: `gatsby-source-instagram`,
      options: {
        type: `user-profile`,
        username: `thienry`,
      },
    }*/
  ],
}
