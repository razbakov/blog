<template>
  <main class="markdown">
    <article class="container w-full md:max-w-xl mx-auto px-4 pb-8">
      <Content/>
    </article>
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
