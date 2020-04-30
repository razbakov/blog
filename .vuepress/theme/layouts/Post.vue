<template>
  <main>
    <article class="markdown container w-full md:max-w-xl mx-auto px-4 pb-4">
      <h1>{{ $page.title }}</h1>
      <div class="flex justify-between text-sm mb-8">
        <div>
          <time :datetime="$page.frontmatter.date">{{ time($page.frontmatter.date) }}</time>
          <span class="ml-4 text-blue-600 text-sm">{{ $page.frontmatter.category }}</span>
        </div>
        <div class="text-gray-600">
          <span>{{ $page.readingTime.text }}</span>
        </div>
      </div>
      <img class="mb-4" v-if="$page.frontmatter.image" :src="$page.frontmatter.image" />
      <Content />
    </article>
    <vue-disqus />
    <RecentPosts class="markdown" />
  </main>
</template>

<script>
import format from "date-fns/format";

export default {
  methods: {
    time(val) {
      return format(new Date(val), "do MMMM yyyy");
    }
  }
};
</script>
