module.exports = {

    siteMetadata: {
        title: 'Personal website',
        description: 'This is my personal portfolio website!',
    },

    plugins : ['gatsby-plugin-emotion', 'gatsby-plugin-react-helmet', 'gatsby-transformer-sharp', 'gatsby-plugin-sharp',
    {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts: {
                default: require.resolve('./src/components/layout.js'),
            }
        }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'posts',
            path: 'posts',
        }
    },
    
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'images',
            path: 'images',
        }
    },
],
};