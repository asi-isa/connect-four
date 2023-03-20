<script setup>
const props = defineProps(["board", "currentPlayer"]);

defineEmits(["slotClicked"]);

function onClick(n) {
  console.log(n);
}
</script>

<template>
  <div
    class="flex flex-wrap justify-center gap-3 py-2 pb-6 rounded-2xl bg-[var(--white)]"
  >
    <template v-for="(slot, index) in props.board" :key="`${index}-${slot}`">
      <Slot :color="slot" @click="$emit('slotClicked', index)" />
    </template>

    <PlayerTurn :currentPlayer="props.currentPlayer" />
  </div>
</template>
