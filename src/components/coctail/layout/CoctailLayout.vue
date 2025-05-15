<script setup lang="ts">
import { Back } from "@element-plus/icons-vue";
import { useCocktails } from '../composable/useCocktails';
import { useRouts } from '../composable/useRouts';

defineProps({
  imgUrl: {
    type: String,
    required: true,
    default: "/img/bg-1.jpg"
  }
})

const { isBackButtonVisible } = useCocktails();
const { goForCocktailRandom, goBack } = useRouts();
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackButtonVisible"
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="goBack"
        />
        <el-button class="btn" @click="goForCocktailRandom"> Случайный коклейль </el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.root
  display: flex
  min-height: 100vh
  background-color: #141414

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
  position: relative
  width: 70%
  padding: 32px 40px

.btn
  position: absolute
  top: 32px
  right: 40px
  font-size: 16px
  font-family: 'Raleway', 'Arial', sans-serif
  background-color: #FF0F82
  border-color: #FF0F82
  color: #FFFFFF

  &:hover,
  &:active
    background-color: #FF0F82, 10%
    border-color: #FF0F82, 10%

.btns
  display: flex
  justify-content: space-between
  align-items: center

.back
  background-color: transparent
  border-color: #fff

  &:hover
    border-color: #FF0F82
</style>
