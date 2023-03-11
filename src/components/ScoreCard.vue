<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  alignIcon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-1 px-6 py-2 bg-[var(--white)] border-2 border-[var(--black)] shadow-lg rounded-3xl"
  >
    <div
      class="absolute rounded-full"
      :class="[
        props.alignIcon === 'left' ? '-left-4' : '-right-4',
        props.color,
      ]"
    >
      <i-cil-smile class="text-[var(--black)] text-3xl" />
    </div>

    <p class="text-[var(--black)] font-bold text-lg">{{ props.name }}</p>

    <p class="text-[var(--black)] font-bold text-2xl">{{ props.points }}</p>
  </div>
</template>
