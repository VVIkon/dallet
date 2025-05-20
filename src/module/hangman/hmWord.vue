<script setup lang="ts">
interface IProps{
  word: string;
  correctLetters: string[];
}
defineProps<IProps>();
</script>
<template>
  <div class="word">
      <span v-for="(letter, ind) in word" :key="ind" class="letter">
        {{ correctLetters.includes(letter) ? letter : '' }}
      </span>
    </div>
</template>
