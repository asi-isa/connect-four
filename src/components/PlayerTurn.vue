<script setup></script>

<template>
  <div
    class="con w-48 h-40 flex flex-col justify-end items-center pb-3 absolute -bottom-[42%] before:bg-[var(--accent-red)]"
  >
    <p class="text-lg font-medium">PLAYER 1'S TURN</p>
    <p class="text-4xl font-semibold">15 S</p>
  </div>
  <svg
    class="absolute invisible"
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <filter id="round">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
</template>

<style scoped>
.con {
  filter: url(#round);
  display: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.con::before {
  content: "";
  position: absolute;
  inset: 0;
  clip-path: polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%);
}
</style>
