<template>
  <button
    :class="btnClass"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useNamespace } from '../../composable/use-namespace';
import { ButtonProps, defaultProps, ButtonEmits } from './button';

defineOptions({
  name: 'ElButton',
});

const props = withDefaults(defineProps<ButtonProps>(), defaultProps);
const emit = defineEmits<ButtonEmits>();

const ns = useNamespace('button');
const btnClass = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('plain', props.plain),
  ns.is('round', props.round),
  ns.is('disabled', props.disabled)
]);

function handleClick (evt: MouseEvent) {
  if (props.disabled) return;
  emit('click', evt);
}
</script>

<style lang="scss">
@import "./button.scss";
</style>
