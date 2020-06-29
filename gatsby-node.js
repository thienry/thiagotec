const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      posts: allStrapiBlogs {
        nodes {
          slug
        }
        totalCount
      }
    }
  `)

  const postsPerPage = 12
  const numPages = Math.ceil(result.data.posts.totalCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: path.resolve("src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  result.data.posts.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: post.slug,
      }
    })
  })
}
