const newsletterFeed = require(`./src/@lekoarts/gatsby-theme-minimal-blog/utils/newsletterFeed`);

require(`dotenv`).config({
    path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;
const feed = true, feedTitle = `Shirani Blog`;

module.exports = {
    siteMetadata: {
        siteTitle: `Amirhosein Shirani`,
        siteTitleAlt: `Shirani Blog`,
        siteUrl: `https://shirani.me`,
        siteHeadline: `Blog - Shirani`,
        author: `Amirhosein Shirani`,
        siteDescription: `Scripts which has been written by Amirhosein Shirani, Iranian Entrepreneur and Executive.`,
        siteLanguage: `en`,
        siteImage: `/banner.jpg`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
                        title: `Essays`,
                        slug: `/blog`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Twitter`,
                        url: `https://twitter.com/amirhshirani`,
                    },
                    {
                        name: `Instagram`,
                        url: `https://www.instagram.com/amirhoseinshirani/`,
                    },
                    {
                        name: 'Linkedin',
                        url: 'https://www.linkedin.com/in/amirhosein-shirani/',
                    }
                ],
                showCopyButton: true
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        `gatsby-plugin-sitemap`,
        "gatsby-plugin-theme-ui",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `amirhosein shirani blog`,
                short_name: `amirhosein shirani blog`,
                description: `Scripts which has been written by Amirhosein Shirani, Iranian Entrepreneur and Executive.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-netlify`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
        feed && {
            resolve: `gatsby-plugin-feed`,
            options: newsletterFeed(feedTitle),
        },
    ].filter(Boolean),
};


