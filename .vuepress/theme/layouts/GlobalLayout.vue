<template>
  <div id="global-layout" class="font-sans leading-normal tracking-normal">
    
    <header>
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="mb-4">
          <router-link to="/" class="no-underline leading-none hover:no-underline font-extrabold text-4xl">
            {{ $site.title }}
          </router-link>
          <p>{{ $site.description }}</p>
        </div>
        <ul class="flex text-lg">
          <li v-for="item in $themeConfig.nav">
            <router-link class="shadow rounded-full mr-2 px-4 py-2 hover:bg-gray-200" :to="item.link" exact>{{ item.text }}</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <DefaultGlobalLayout />
    <footer></footer>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout }
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>