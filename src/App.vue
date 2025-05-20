<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/module/MainHeader.vue'
import MainMenu from '@/module/MainMenu.vue'

</script>

<template>
  <ElConfigProvider>
    <div class="common-layout">
      <el-container>
        <el-header>
          <div class="wrapper">
            <MainHeader msg="Проект Dallet" desc="Проект предназначен для отработки навыков во vue3" />
            <MainMenu />
          </div>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </div>
  </ElConfigProvider>

</template>

<style scoped>

</style>
