<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuth } from './auth/composable/useAuth';
import MainMenu from '@/module/MainMenu.vue'

defineProps<{
  msg: string;
  desc: string;
}>()
const { state, isTokenated, getProfile, goToLogin } = useAuth();
const loadProfile = async () => {
  try {
    if (isTokenated.value)
      await getProfile();
  } catch (err) {
      console.error(err);
  }
};

onMounted(() => {
  loadProfile()
})

</script>

<template>
  <el-page-header>
    <template #title>
      <div class="flex items-center">
        <span class="text-large font-600 mr-3"> {{ msg }}</span>
      </div>
    </template>
    <template #default>
      <div class="flex items-center">
        <MainMenu />
      </div>
    </template>
   <template #extra>
      <el-button type="primary" style="margin-left: 16px" @click="goToLogin">
        {{ state?.authUser?.fio  || ' - '}}
      </el-button>
    </template>
  </el-page-header>
</template>

<style scoped>
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
