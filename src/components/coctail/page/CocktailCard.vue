<script setup lang="ts">
import '@/assets/cocktail/main.sass'
import CoctailLayout from "../layout/CoctailLayout.vue";
import { useCocktails } from '../composable/useCocktails';
import { useRouts } from '../composable/useRouts';

const { getCocktailsById, cocktail } = useCocktails();
const { cocktailId } = useRouts();

if (cocktailId.value)
  getCocktailsById(cocktailId.value);
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <CoctailLayout
      :imgUrl="cocktail.thumb || ''"
    >
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.name || '' }}</div>
          <div class="line"></div>
          <div class="list">
            <div
              v-for="(item, key) in cocktail.ingredients"
              :key="key"
              class="list-item"
            >
              {{ item.name }}
              <template v-if="item.measure">
                |
                {{ item.measure }}
              </template>
            </div>
          </div>
          <div class="instructions">
            {{ cocktail.instructions || ''}}
          </div>
        </div>
      </div>
    </CoctailLayout>
  </div>
</template>

