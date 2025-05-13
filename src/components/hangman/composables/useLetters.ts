import { computed, ref, type Ref } from "vue";

export const useLetters = (word: Ref<string>) => {
const letters= ref<string[]>([]);
const correctLetters = computed(() => letters.value.filter(w => word.value.includes(w) ));
const wrongLetters = computed(() => letters.value.filter(w => !word.value.includes(w) ));
const winGame = computed(() => [...word.value].every(el => correctLetters.value.includes(el)));
const loseGame = computed(() => wrongLetters.value.length >= 6);
const addInLetters = ( (key: string) => {
  if(/[а-яё]/.test(key))
    letters.value.push(key);
})
const resetLetters = (() => letters.value = [])
return {
  letters,
  correctLetters,
  wrongLetters,
  winGame,
  loseGame,
  addInLetters,
  resetLetters
}
}
