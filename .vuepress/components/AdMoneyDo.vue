<template>
  <div class="container bg-green-100 text-center p-4 w-full md:max-w-xl mx-auto border border-green-400">
    <div class="mb-4">
        Я запустил новый проект &mdash; Планер Лично Бюджета
    </div>
    <a class="bg-green-500 text-white hover:bg-green-100 hover:text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow no-underline"
        :href="`https://moneydo-budget-planner.netlify.com/?utm_medium=${from}`"
        target="_blank"
        rel="noopener noreferrer">
      Открыть
    </a>
  </div>
</template>


<script>
export default {
  props: ['from']
}
</script>