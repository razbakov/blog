const hostname = "https://razbakov.com";

const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./.vuepress/theme/**/*.*",
    "./.vuepress/components/**/*.*",
    "./!(node_modules)/**/*.md",
    "./*.md"
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  title: "Aleksey Razbakov",
  description: "Indie Hacker. Web Developer. Salsa Dancer.",
  themeConfig: {
    nav: [
      { text: "Blog", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Uses", link: "/uses/" },
      { text: "About", link: "/about/" }
    ],
    hostname: hostname
  },
  head: [
    ["link", { rel: "icon", href: "/icons/icon-512x512.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#2f80ed" }],
    [
      "meta",
      { name: "google-site-verification", content: "lRlZ5U83s7NwROJk4j4gyNkI0MEvkmDMMxw1pD9pLdc" }
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "apple-touch-icon", href: "/icons/icon-152x152.png" }],
    ["link", { rel: "mask-icon", href: "/icons/icon.svg", color: "#2f80ed" }],
    ["meta", { name: "msapplication-TileImage", content: "/icons/icon-144x144.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  plugins: {
    "vuepress-plugin-reading-time": {},
    "@vuepress/blog": {
      directories: [
        {
          id: "post",
          dirname: "blog",
          path: "/",
          title: "Blog",
          pagination: {
            perPagePosts: 2
          }
        },
        {
          id: "project",
          dirname: "projects",
          title: "Portfolio",
          path: "/projects/",
          layout: "IndexProjects",
          itemLayout: "Project",
          itemPermalink: "/projects/:slug"
        }
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ["tag", "tags"],
          path: "/tag/",
          layout: "Tag",
          frontmatter: { title: "Tag" },
          itemlayout: "Tag",
          pagination: {
            perPagePosts: 3
          }
        }
      ],
      sitemap: {
        hostname: hostname
      }
    },
    feed: {
      canonical_base: hostname
    },
    "vuepress-plugin-disqus-comment": {
      shortname: "razbakov"
    },
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: true
    },
    container: {
      type: "details",
      before: info =>
        `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ""}\n`,
      after: () => "</details>\n"
    },
    seo: {}
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
      ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
    ]
  }
};
