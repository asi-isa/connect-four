<script setup>
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
    default: "text-[var(--black)]",
  },
  bg: {
    type: String,
    default: "bg-[var(--white)]",
  },
});
</script>

<template>
  <router-link
    :to="props.to"
    class="flex items-center justify-between p-2 rounded-md cursor-pointer shadow-lg border-2 border-[var(--black)]"
    :class="props.bg"
  >
    <p class="text-lg font-semibold uppercase" :class="props.color">
      {{ props.title }}
    </p>
    <div class="flex gap-1">
      <i-cil-smile class="text-3xl" :class="props.color" />
      <i-cil-smile class="text-3xl" :class="props.color" />
    </div>
  </router-link>
</template>
