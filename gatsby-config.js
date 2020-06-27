module.exports = {
  siteMetadata: {
    title: `Movie Palace`,
    description: `Find out the most recent, pouplar movies and TV shows in one place, ratings, release dates, durations, casts.`,
    author: `James Muriithi <muriithijames556@gmail.com>`,
    siteUrl: `https://movie-palace.netlify.app/`,
    siteLanguage: `en`,
    ogLanguage: `en`,
    headline: `Movie Palace`,
    twitter: `@jam_es_muriithi`,
    facebook: `james-muriithi`,
    banner: `/preview.png`
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
        name: `Movie Palace`,
        short_name: `Movie Palace`,
        start_url: `/`,
        background_color: `#28282d`,
        theme_color: `#28282d`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [ `/movie/*` ] },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly : ['components/'], // Purge only these files/folders
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
