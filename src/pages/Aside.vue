<template>
  <div class="aside">
    <div
      v-for="menu in menus"
      class="aside-item"
      :key="menu.name"
      :class="{
        'is-active': menu.name === activeMenu
      }"
      @click="handleClick(menu.name)"
    >
      {{ menu.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import menus from './data/menu.json';

const router = useRouter();
const route = useRoute();
const activeMenu = computed(() => route.name);

function handleClick (name: string) {
  if (activeMenu.value === name) return;

  router.push({ name });
}
</script>

<style lang="scss" scoped>
.aside {
  width: 200px;
  border-right: 1px solid #ccc;

  &-item {
    height: 30px;
    line-height: 30px;
    text-indent: 10px;
    cursor: pointer;

    &.is-active {
      background-color: pink;
    }
  }
}
</style>
