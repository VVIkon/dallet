<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/module/MainHeader.vue';

</script>

<template>
  <ElConfigProvider>
    <div class="common-layout">
      <el-container>
        <el-header>
          <div class="wrapper2">
            <MainHeader msg="Проект Dallet" desc="Проект предназначен для отработки навыков во vue3" />
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
.el-main {
  margin-top:50px;
}
</style>
