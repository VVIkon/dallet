<script setup lang="ts">
  interface IProps {
    hStr: string;
    pStr: string;
  }
  defineProps<IProps>()
</script>
<template>
  <h1>{{ hStr }}</h1>
  <p>{{ pStr }}</p>
</template>
