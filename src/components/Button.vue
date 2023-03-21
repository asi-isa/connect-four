<script setup>
const props = defineProps(["title", "bg"]);

defineEmits(["click"]);
</script>

<template>
  <div
    class="flex items-center justify-between p-2 rounded-md cursor-pointer shadow-lg border-2 border-[var(--black)]"
    :class="[
      props.bg === 'red'
        ? 'bg-[var(--accent-red)]'
        : 'bg-[var(--accent-yellow)] text-black',
    ]"
    @click="$emit('click')"
  >
    <p class="text-lg font-semibold uppercase">{{ props.title }}</p>
    <div class="flex gap-1">
      <i-cil-smile class="text-3xl" />
      <i-cil-smile class="text-3xl" />
    </div>
  </div>
</template>
