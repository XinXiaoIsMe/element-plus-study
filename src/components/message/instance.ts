import { shallowReactive } from 'vue';
import type { VNode, ComponentInternalInstance } from 'vue';

export type MessageContext = {
  id: string;
  vm: ComponentInternalInstance;
  vnode: VNode;
}

// 使用响应式数据，保证instances数据更新后，触发offset更新
export const instances = shallowReactive<MessageContext[]>([]);

export function getInstance (id: string) {
  const index = instances.findIndex(instance => instance.id === id);
  const current = instances[index];
  let prev: MessageContext | undefined;

  if (index > 0) {
    prev = instances[index - 1];
  }
  
  return {
    prev,
    current
  }
}

export function getLastOffset (id: string): number {
  const { prev } = getInstance(id);
  if (!prev) return 0;
  return prev.vm.exposed!.bottom.value;
}

export function getOffsetOrSpace (id: string, offset: number) {
  const index = instances.findIndex(instance => instance.id === id);
  return index > 0 ? 16 : offset;
}
