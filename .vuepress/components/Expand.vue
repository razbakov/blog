<template>
  <div class="bg-gray-200 p-3">
    <h6 @click="isOpen = !isOpen" class="m-0">
      {{ title }}
    </h6>
    <div v-show="isOpen">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data: () => ({
    isOpen: false
  })
};
</script>

<style></style>
