<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed z-20 inset-0 bg-black/50 flex transition duration-300"
    >
      <div
        class="modal-container w-72 m-auto p-4 bg-[var(--bg-dark)] rounded-2xl shadow-lg transition-all duration-300 flex flex-col gap-6"
      >
        <p class="text-lg font-semibold">
          <slot name="header"></slot>
        </p>

        <slot name="body"></slot>
      </div>
    </div>
  </Transition>
</template>

<style>
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
