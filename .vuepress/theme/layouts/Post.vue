<template>
  <main class="markdown">
    <div class="flex justify-center items-center h-64 bg-gray-200">
      <div class="p-4">
        <h1>{{ $page.title }}</h1>
        <div class="flex justify-between text-sm">
          <div>
            <time :datetime="$page.frontmatter.date">{{ time($page.frontmatter.date) }}</time>
            <span class="ml-4 text-blue-600 text-sm">{{ $page.frontmatter.category }}</span>
          </div>
          <div class="text-gray-600">
            <span>{{ $page.readingTime.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <article class="container w-full md:max-w-xl mx-auto px-4 pb-4">
      <Content/>
    </article>
    <DiscussInTwitter />
    <RecentPosts />
  </main>
</template>

<script>
import format from 'date-fns/format';

export default {
  methods: {
    time(val) {
      return format(new Date(val), 'do MMMM yyyy');
    }
  }
}
</script>
