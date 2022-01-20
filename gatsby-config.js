module.exports = {
    siteMetadata: {
        title: "自動車保険一括見積もりプレゼント全キャンペーン2022"
    },
    plugins: [
    
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        "gatsby-plugin-mdx",
    ]
}