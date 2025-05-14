<script setup lang="ts">
import '@/assets/cocktail/main.sass'
// import { computed } from 'vue';
import { useCockTailStore } from "@/stores/CockTailStore";
import { storeToRefs } from "pinia";

const cocktailStore = useCockTailStore();
cocktailStore.getIngredients();
const { ingredients, ingredient, cocktails } = storeToRefs(cocktailStore);

function getCocktails() {
  // cocktailStore.getCocktails(ingredient);
  cocktailStore.getCocktails(cocktailStore.ingredient);
}

function removeIngredient() {
  cocktailStore.setIngredient(null);
}

</script>

<template>
<AppLayout
    imgUrl="/img/bg-1.jpg"
    :backFunc="removeIngredient"
    :is-back-button-visible="!!ingredient"
  >
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="cocktailStore.ingredient"
            placeholder="Choose main ingredient"
            size="large"
            filterable
            allow-create
            class="select"
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/img/cocktails.png" alt="Cocktails" class="img" />
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>

.select-wrapper
  padding-top: 50px

.select
  width: 220px

.text
  max-width: 516px
  margin: 0 auto
  padding-top: 50px
  line-height: 36px
  letter-spacing: 0.1em
  color: #D3D3D3

.img
  margin-top: 60px

.cocktails
  display: flex
  align-items: center
  flex-wrap: wrap
  max-height: 400px
  overflow-y: auto
  margin-top: 60px
</style>
