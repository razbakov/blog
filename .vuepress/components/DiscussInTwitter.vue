<template>
  <div v-if="$page.frontmatter.tweet" class="container w-full md:max-w-xl mx-auto px-4 pb-8">
    <h2>Comments</h2>
    <blockquote>
      You can comment on this post by replying to <a :href="$page.frontmatter.tweet" target="_blank" rel="noreferrer">this tweet</a>.
    </blockquote>
  </div>
</template>
