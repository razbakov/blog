<template>
  <div v-if="tweetId" class="container w-full md:max-w-xl mx-auto px-4 pb-8">
    <h2>Comments</h2>
    <p>You can comment on this post by replying to this tweet.</p>
    <Tweet :id="tweetId"/>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  components: { Tweet },
  computed: {
    tweetId() {
      if (!this.$page.frontmatter.tweet) {
        return false
      }

      return this.$page.frontmatter.tweet.toString()
    }
  }
}
</script>
