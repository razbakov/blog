<template>
  <main class="markdown">
    <article class="container w-full mx-auto md:max-w-xl px-4 pb-8">
      <h1>{{ $page.title }}</h1>
      <p>{{ $page.description }}</p>
      <img class="mb-4" v-if="$page.frontmatter.cover" :src="$page.frontmatter.cover" />
      <Content />
    </article>
  </main>
</template>
