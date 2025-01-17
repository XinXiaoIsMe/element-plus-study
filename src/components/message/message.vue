<template>
  <transition
    name="el-message-fade"
    @before-leave="$emit('close')"
    @after-leave="$emit('destroy')"
  >
    <div v-show="visible" class="el-message" ref="messageRef" :id="id" :style="customStyle">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import type { MessageProps } from './message';
import { getLastOffset, getOffsetOrSpace } from './instance';

const props = withDefaults(defineProps<MessageProps>(), {
  offset: 16,
  duration: 3000
});

const emit = defineEmits<{
  close: [];
  destroy: [];
}>();

const visible = ref(false);
const messageRef = ref<HTMLDivElement>();
const height = ref(0);
const lastOffset = computed(() => getLastOffset(props.id));
const offset = computed(() => lastOffset.value + getOffsetOrSpace(props.id, props.offset));
const bottom = computed(() => offset.value + height.value);
const customStyle = computed(() => ({
  top: `${offset.value}px`
}));

defineExpose({
  offset,
  visible,
  bottom
});

useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect().height;
});

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
  visible.value = true;
});
</script>

<style lang="scss">
@import "message.scss";
</style>
