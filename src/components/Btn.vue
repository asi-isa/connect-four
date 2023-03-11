<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["click"]);
</script>

<template>
  <p
    class="px-6 py-2 bg-[var(--bg-dark)] rounded-3xl font-medium cursor-pointer uppercase"
    @click="$emit('click')"
  >
    {{ props.title }}
  </p>
</template>
