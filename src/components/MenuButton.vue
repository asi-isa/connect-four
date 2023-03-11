<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "bg-[var(--white)]",
  },
});
</script>

<template>
  <router-link
    :to="props.to"
    class="p-2 rounded-md text-lg font-semibold uppercase text-[var(--black)] cursor-pointer shadow-lg"
    :class="props.color"
  >
    {{ props.title }}
  </router-link>
</template>
