<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import { useAuth } from './auth/composable/useAuth';

const {  getProfile, isTokenated } = useAuth();
if (isTokenated.value) {
  getProfile();
}
</script>

<template>
  <div class="welcome-container">
    <el-row>
      <el-col :xs="2" :sm="4" :md="7" :lg="6"  :xl="8" >
        <div style="color: transparent"></div>
      </el-col>
      <el-col :xs="20" :sm="16" :md="14" :lg="12"  :xl="8" >
        <WelcomeItem>
          <template #icon>
            <DocumentationIcon />
          </template>
          <template #heading>Виселица</template>
          Игра в "угадай имя"
        </WelcomeItem>
        </el-col>
      <el-col :xs="2" :sm="4" :md="7" :lg="6"  :xl="8" >
        <div style="color: transparent"></div>
      </el-col>
    </el-row>
  </div>
</template>
