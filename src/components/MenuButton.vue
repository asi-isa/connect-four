<script setup>
import SmileIcon from "~icons/fa-regular/Smile";

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
    class="flex items-center justify-between p-2 rounded-md cursor-pointer shadow-lg"
    :class="props.color"
  >
    <p class="text-lg font-semibold uppercase text-[var(--black)]">
      {{ props.title }}
    </p>
    <div class="flex gap-1">
      <i-cil-smile class="text-3xl text-[var(--black)]" />
      <i-cil-smile class="text-3xl text-[var(--black)]" />
    </div>
  </router-link>
</template>
