<script setup>
import { ref } from "vue";

import Modal from "../components/Modal.vue";
import ConnectFour from "../game";

const game = ref(new ConnectFour());

// TODO start programmatically
game.value.start();

function onContinue() {
  game.value.continue();
}

function onMenu() {
  console.log("menu btn clicked");
}

function onRestart() {
  console.log("restart btn clicked");
}

function onSlotClicked(num) {
  game.value.play(num);
}
</script>

<template>
  <div class="flex flex-col gap-10 px-2 py-8 h-screen">
    <div class="flex items-center justify-between">
      <Btn title="menu" @click="onMenu" />

      <Logo />

      <Btn title="restart" @click="onRestart" />
    </div>

    <div class="flex gap-4 justify-evenly">
      <ScoreCard
        name="PLAYER 1"
        :points="game.player1.points"
        color="bg-[var(--accent-red)]"
        align-icon="left"
      />
      <ScoreCard
        name="PLAYER 2"
        :points="game.player2.points"
        color="bg-[var(--accent-yellow)]"
        align-icon="right"
      />
    </div>

    <Board :game="game" @slotClicked="onSlotClicked" />

    <div
      class="absolute bottom-0 left-0 right-0 h-1/3 bg-[var(--bg-dark)] rounded-t-[5rem] -z-10"
    />
  </div>

  <Teleport to="body">
    <modal :show="game.isGameOver()">
      <template #header>
        <p>Game is over.</p>
      </template>

      <template #body>
        <div>
          <p @click="onContinue">continue</p>
          <p>exit</p>
        </div>
      </template>
    </modal>
  </Teleport>
</template>
