import { ref } from "vue";
import { getRandomName } from '../api/getRandomName';

export const useRandomWord = () => {
  const word = ref('');

  const randomName = async () => {
    try {
      word.value = await getRandomName();
    } catch (err) {
      console.error('Error', err);
      word.value = '';
    }
  }
  randomName();

  return {
    word,
    randomName
  }
}
