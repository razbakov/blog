<template>
  <div v-if="recentFiles" class="container w-full md:max-w-xl mx-auto px-4 pb-8">
    <h2>You might also like</h2>
    <ul>
      <li v-for="post in recentFiles">
        <a :href="post.path">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    recentFiles() {
      let files = this.$site.pages
        .filter(p => p.regularPath !== this.$page.regularPath)
        .filter(
          p =>
            (p.frontmatter.language || "en") ===
            (this.$page.frontmatter.language || "en")
        )
        .filter(p => {
          return p.regularPath.indexOf("/blog/") >= 0;
        })
        .sort((a, b) => {
          let aDate = new Date(a.frontmatter.date).getTime();
          let bDate = new Date(b.frontmatter.date).getTime();
          let diff = aDate - bDate;
          if (diff < 0) return 1;
          if (diff > 0) return -1;
          return 0;
        })
        .slice(0, 5);

      return files;
    }
  }
};
</script>
