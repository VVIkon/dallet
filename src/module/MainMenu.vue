<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">

      <RouterLink to="/">Home</RouterLink>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>Projects</template>
      <el-menu-item index="1-2">
        <RouterLink to="/hangman">Виселица</RouterLink>
      </el-menu-item>
      <el-menu-item index="1-3">
        <RouterLink to="/cocktails">Коктейли</RouterLink>
      </el-menu-item>
      <el-menu-item index="1-4">
        <RouterLink to="/about">About</RouterLink>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
