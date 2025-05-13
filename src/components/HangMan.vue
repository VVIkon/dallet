<script setup lang="ts">
import '../assets/hangman.css'
import hmHeader from './hangman/hmHeader.vue';
import hmMan from './hangman/hmMan.vue';
import hmWrongLetter from './hangman/hmWrongLetter.vue';
import hmWord from './hangman/hmWord.vue';
import hmPopup from './hangman/hmPopup.vue';
import hmNotification from './hangman/hmNotification.vue';
import { computed, ref } from 'vue';
import axios from 'axios';

const url = 'https://api.randomdatatools.ru/?typeName=true&typeName=all&params=FirstName';
const word = ref('');
const letters= ref<string[]>([]);
const correctLetters = computed(() => letters.value.filter(w => word.value.includes(w) ))
const wrongLetters = computed(() => letters.value.filter(w => !word.value.includes(w) ))
const notification = ref<InstanceType<typeof hmNotification> | null>(null);
const winGame = computed(() => [...word.value].every(el => correctLetters.value.includes(el)))
const loseGame = computed(() => wrongLetters.value.length >= 6)

const randomName = async (url: string) => {
  try {
    const { data } = await axios<{FirstName: string}>(url);
    word.value = data.FirstName.toLowerCase() || '';
  } catch (err) {
    console.error('Error', err);
    word.value = '';
  }
}
randomName(url);

window.addEventListener('keydown', ({key}) => {
  if(winGame.value || loseGame.value)
    return;
  const lowerKey = key.toLowerCase();
  if (letters.value.includes(lowerKey)) {
    notification.value?.open();
    setTimeout(() => notification.value?.close(), 2000);
    return;
  }
  if(/[а-яё]/.test(lowerKey))
    letters.value.push(lowerKey);
})

const newStart = ((msg: { fetchName: boolean }) =>{
  letters.value = [];
  if (msg.fetchName) {
    randomName(url);
  }
})
</script>
<template>
  <hmHeader
    hStr='Висельница'
    pStr='Отгадайте имя - введите букву (Русскую)'
  />
  <div class="game-container">
    <hmMan
      :try-cnt="wrongLetters.length"
    />
    <hmWrongLetter
      :wrong-letters="wrongLetters"
    />
    <hmWord
      :word="word"
      :correct-letters="correctLetters"
    />
  </div>
  <hmPopup v-if="winGame || loseGame"
    :is-win="winGame"
    :name-game="word"
    @new-start="newStart"
  />
  <hmNotification
    ref="notification"
    msg="Вы уже вводили этот символ"
  />
</template>

