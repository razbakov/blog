const hostname = 'https://razbakov-blog.netlify.com';

const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./.vuepress/theme/**/*.*", "./!(node_modules)/**/*.md", "./*.md"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

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
  plugins: {
    'vuepress-plugin-reading-time': true,
    '@vuepress/blog': {
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
    },
    'feed': {
      canonical_base: hostname,
    },
    '@vuepress/pwa': true,
    'sitemap': {
      hostname: hostname
    },
    'robots': {
      host: hostname
    },
    'seo': true
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
      ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
    ]
  }
}
