<script setup>
import Logo from "../components/Logo.vue";
import MenuButton from "../components/MenuButton.vue";
</script>

<template>
  <div class="flex flex-col gap-12 justify-center h-screen p-3">
    <div class="self-center"><Logo /></div>

    <div class="flex flex-col gap-3">
      <MenuButton
        title="play vs AI"
        color="bg-[var(--accent-red)]"
        to="/game"
      />
      <MenuButton
        title="play vs player"
        color="bg-[var(--accent-yellow)]"
        to="/game"
      />
      <MenuButton title="game rules" to="/game" />
    </div>
  </div>
</template>
