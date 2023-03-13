<script setup>
const props = defineProps({
  color: {
    type: Number,
  },
});
defineEmits(["click"]);
</script>

<template>
  <div
    class="w-10 aspect-square rounded-full border-2 border-[var(--black)] shadow-2xl cursor-pointer"
    :class="{
      'bg-[var(--accent-red)]': props.color === 1,
      'bg-[var(--accent-yellow)]': props.color === 2,
      'bg-[var(--bg)]': props.color === undefined,
    }"
    @click="$emit('click')"
  />
</template>
