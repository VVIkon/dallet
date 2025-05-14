<script setup lang="ts">
  interface Props {
    isWin: boolean;
    nameGame: string;
  }
  defineProps<Props>();
  const emit = defineEmits(['new-start']);
  const newStart = () => {
    emit('new-start', { fetchName: true });
  };
  window.addEventListener('keydown', ({key}) => {
    if(key === 'Enter') {
      newStart();
    }
  });
</script>
<template>
<div class="popup-container">
  <div class="popup">
    <h2 v-if="isWin">Поздравляю, вы победили! 😃</h2>
    <template v-else>
      <h2>Вы проиграли. 😕</h2>
      <h3>...имя: {{ nameGame }}</h3>
    </template>
    <button @click = "newStart()">Сыграть еще раз (Enter)</button>
  </div>
</div>
</template>
