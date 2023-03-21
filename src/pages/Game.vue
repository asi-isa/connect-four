<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";

import Modal from "../components/Modal.vue";
import ConnectFour from "../game";

const router = useRouter();

const game = ref(new ConnectFour());

const gameNotStarted = ref(true);

// TODO start programmatically

function onStart() {
  gameNotStarted.value = false;
  game.value.start();
}

function onContinue() {
  game.value.continue();
}

function onRestart() {
  game.value.restart();
}

function onSlotClicked(num) {
  game.value.play(num);
}

function goHome() {
  router.replace("/");
}
</script>

<template>
  <div class="flex flex-col gap-10 px-2 py-8 h-screen">
    <div class="flex items-center justify-between">
      <Btn title="menu" @click="goHome" />

      <Logo />

      <Btn title="restart" @click="onRestart" />
    </div>

    <template v-if="!gameNotStarted">
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
    </template>
    <div
      class="absolute bottom-0 left-0 right-0 h-1/3 bg-[var(--bg-dark)] rounded-t-[5rem] -z-10"
    />
  </div>

  <Teleport to="body">
    <modal :show="game.isGameOver()">
      <template #header>Game Over</template>

      <template #body>
        <Button title="Continue" @click="onContinue" bg="red" />
        <Button title="Exit" @click="goHome" bg="yellow" />
      </template>
    </modal>
  </Teleport>

  <Teleport to="body">
    <modal :show="gameNotStarted">
      <template #header>Lets Play</template>

      <template #body>
        <Button title="Start" @click="onStart" bg="red" />
      </template>
    </modal>
  </Teleport>
</template>
