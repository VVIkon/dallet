<script setup lang="ts">
import '@/assets/cocktail/main.sass'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { API_PATHS } from "@/constants";
import CoctailLayout from "../layout/CoctailLayout.vue";
import { useCocktails } from '../composable/useCocktails';

const { getRandomCocktail, cocktail } = useCocktails();
getRandomCocktail();
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <CoctailLayout
      :imgUrl="cocktail.thumb || ''"
    >
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.name || ''  }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper :slides-per-view="3" :space-between="50" class="swiper">
              <swiper-slide v-for="(ingredient, key) in cocktail.ingredients" :key="key">
                <img :src="`${API_PATHS.INGREDIENT_PIC}${ingredient.measure}-Small.png`" />
                <div class="name">
                  {{ ingredient.name }}
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions">
            {{ cocktail.instructions || '' }}
          </div>
        </div>
      </div>
    </CoctailLayout>
  </div>
</template>

<style lang="sass" scoped>

.slider
  padding: 50px 0

.swiper
  width: 586px

.name
  padding-top: 20px
</style>
