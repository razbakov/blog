module.exports = {
  title: 'Aleksey Razbakov',
  description: 'Web Developer',
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/' },
      // { text: 'Projects', link: '/projects/' },
      { text: 'About', link: '/about/' },
      // { text: 'Contact', link: '/contact/' },
    ],
  },
  plugins: [
    'vuepress-plugin-reading-time',
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: 'blog',
          path: '/',
          pagination: {
            perPagePosts: 2,
          },
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          layout: 'Tag',
          frontmatter: { title: 'Tag' },
          itemlayout: 'Tag',
          pagination: {
            perPagePosts: 3
          }
        },
      ]
    }],
    ['feed', {
      canonical_base: 'https://razbakov-blog.netlify.com',
    }],
    '@vuepress/pwa',
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
}
