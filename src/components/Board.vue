<script setup>
function onClick(n) {
  console.log(n);
}

defineEmits(["slotClicked"]);
</script>

<template>
  <div
    class="flex flex-wrap justify-center gap-3 py-2 pb-6 rounded-2xl bg-[var(--white)]"
  >
    <template v-for="slotNum in 42">
      <Slot @click="$emit('slotClicked', slotNum)" />
    </template>

    <PlayerTurn />
  </div>
</template>
