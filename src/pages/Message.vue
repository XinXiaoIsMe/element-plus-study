<template>
  <div>
    <el-button @click="showMessage">Message</el-button>
  </div>
</template>

<script lang="ts" setup>
import ElButton from '../components/button/button.vue';
import ElMessage from '../components/message';

function showMessage () {
  ElMessage({
    message: 'This is a message.'
  });
}
</script>
