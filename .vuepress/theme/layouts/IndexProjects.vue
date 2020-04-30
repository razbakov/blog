<template>
  <main
    class="container w-full md:max-w-xl mx-auto md:grid md:grid-cols-2 gap-2 p-4 md:p-0"
    v-if="$pagination"
  >
    <article v-for="page in $pagination.pages" class="block p-4">
      <div class="flex">
        <img class="h-10 w-10 mr-4" :src="page.frontmatter.icon" :alt="page.title" />
        <div>
          <h2 class="text-2xl font-extrabold hover:underline leading-tight">
            <a v-if="page.frontmatter.url" :href="page.frontmatter.url" target="_blank">
              {{ page.title }}
            </a>
            <router-link v-else :to="page.path">
              {{ page.title }}
            </router-link>
          </h2>
          <div>{{ page.frontmatter.description }}</div>
          <div
            class="font-normal text-xs rounded-full inline-block px-2 py-0"
            :class="getBadgeColor(page.frontmatter.status)"
          >
            {{ page.frontmatter.status }}
          </div>
        </div>
      </div>
    </article>
    <div class="mb-16 text-center markdown">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </main>
</template>

<script>
import format from "date-fns/format";

export default {
  methods: {
    time(val) {
      return format(new Date(val), "do MMMM yyyy");
    },
    getBadgeColor(status) {
      const map = {
        draft: "bg-gray-300",
        launched: "bg-green-300",
        archived: "bg-gray-300",
        alumni: "bg-green-300"
      };

      return map[status] ?? "";
    }
  }
};
</script>
