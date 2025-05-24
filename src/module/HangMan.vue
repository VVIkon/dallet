<script setup lang="ts">
import { ref } from 'vue';
import '@/assets/hangman.css'
import hmHeader from './hangman/hmHeader.vue';
import hmMan from './hangman/hmMan.vue';
import hmWrongLetter from './hangman/hmWrongLetter.vue';
import hmWord from './hangman/hmWord.vue';
import hmPopup from './hangman/hmPopup.vue';
import hmNotification from './hangman/hmNotification.vue';
import { useRandomWord } from './hangman/composables/useRandomWord';
import { useLetters } from './hangman/composables/useLetters';

const { word, randomName } = useRandomWord();
const {letters, correctLetters, wrongLetters, winGame, loseGame, addInLetters, resetLetters } = useLetters(word);
const notification = ref<InstanceType<typeof hmNotification> | null>(null);

window.addEventListener('keydown', ({key}) => {
  if(winGame.value || loseGame.value)
    return;
  const lowerKey = key.toLowerCase();
  if (letters.value.includes(lowerKey)) {
    notification.value?.open();
    setTimeout(() => notification.value?.close(), 2000);
    return;
  }
  addInLetters(lowerKey);
})

const newStart = ((msg: { fetchName: boolean }) =>{
  resetLetters();
  if (msg.fetchName) {
    randomName();
  }
})
</script>
<template>
  <div class="hangman-container">
    <el-row>
      <el-col :xs="2" :sm="4" :md="7" :lg="6"  :xl="8" >
        <div style="color: transparent"></div>
      </el-col>
      <el-col :xs="20" :sm="16" :md="14" :lg="12"  :xl="8" >
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
      </el-col>
      <el-col :xs="2" :sm="4" :md="7" :lg="6"  :xl="8" >
        <div style="color: transparent"></div>
      </el-col>

    </el-row>
  </div>
</template>


