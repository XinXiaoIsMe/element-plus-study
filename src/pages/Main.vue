<template>
  <div class="main">
    <Aside />
    <div class="test-area">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Aside from './Aside.vue';
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  height: 100%;

  .test-area {
    flex: 1;
    padding: 10px;
  }
}
</style>
