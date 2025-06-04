import { ref } from "vue";

export const useMain = () => {
  const driwer = ref(false);

  const showDriwer = async () => {
    driwer.value = !driwer.value;
  }

  return {
    driwer,
    showDriwer,
  }
}
