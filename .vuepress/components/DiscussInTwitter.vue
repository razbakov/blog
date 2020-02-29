<template>
  <div v-if="$page.frontmatter.tweet" class="container w-full md:max-w-xl mx-auto px-4 pb-8">
    <h2>Comments</h2>
    <p>You can comment on this post by replying to this tweet.</p>
    <div v-html="oembedTweet" />
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  components: { Tweet },
  computed: {
    async oembedTweet() {
      if (!this.$page.frontmatter.tweet) {
        return false
      }

      const tweetUrl = this.$page.frontmatter.tweet
      const oembedResponse = await fetch(new Request(`https://publish.twitter.com/oembed?url=${tweetUrl}`))
      const oembedTweet = oembedResponse.json()

      return oembedTweet.html
    }
  }
}
</script>
