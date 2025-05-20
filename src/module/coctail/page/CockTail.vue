<script setup lang="ts">
import '@/assets/cocktail/main.sass'
import CocktailThumb from '../layout/CocktailThumb.vue';
import CoctailLayout from '../layout/CoctailLayout.vue';
import { useCocktails } from '../composable/useCocktails';


const { ingredients, component, cocktails, getCocktails } = useCocktails();
</script>

<template>

  <CoctailLayout
    imgUrl="/img/bg-1.jpg"
  >
    <div class="wrapper">
      <div v-if="!component || !cocktails" class="info">
        <div class="title">Выбор напитка</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="component"
            placeholder="Выбери главный инградиент"
            size="large"
            filterable
            allow-create
            class="select"
            @change="getCocktails"
          >
            <el-option
              v-for="(item, ind) in ingredients"
                :key="ind"
                :label="item"
                :value="item"
            />
          </el-select>
        </div>
        <div class="text">
          Попробуй рецепт вкусного коктеqля.
          Найди рецепт кокnейля по инградиентам при помощи коктейль - генератора
        </div>
        <img src="/img/cocktails.png" alt="Cocktails" class="img" />
      </div>
      <div v-else class="info">
        <div class="title">Коктейль с {{ component }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.name"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </CoctailLayout>
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
  max-height: 800px
  overflow-y: auto
  margin-top: 60px
</style>
