let thisyear = String(new Date().getFullYear());

module.exports = {
    siteMetadata: {
        title: "自動車保険一括見積もりプレゼント全キャンペーン{thisyear}"
    },
    plugins: [
    
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
    ]
}