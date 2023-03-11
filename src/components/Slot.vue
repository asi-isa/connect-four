<script setup>
defineEmits(["click"]);
</script>

<template>
  <div
    class="w-10 aspect-square rounded-full bg-[var(--bg)] border-2 border-[var(--black)] shadow-2xl cursor-pointer"
    @click="$emit('click')"
  />
</template>
