import { h, render } from 'vue';
import type { MessageParams } from './message';
import { instances, MessageContext } from './instance';
import Message from './message.vue';

let seed = 1;
export default function (options: MessageParams) {
  const id = `message_${seed++}`;
  const props = {
    ...options,
    id,
    // 需要在before-leave钩子中移除instance，不能在after-leave中移除
    // 为了保证多个message依次隐藏的动画效果，需要前一个message和后一个
    // message的相对距离保持不变，以免发生抖动。移除instance时，会触发
    // top值变化，message上移，而上一个message此时translate值也发生变化，这样
    // 就保证两者相对距离不变。如果在after-leave中移除message，会导致上
    // 一个message移除时，当前message位置不变，在after-leave中同时触发了translate
    // 和top变化，造成抖动
    onClose () {
      const index = instances.findIndex(instance => instance.id === id);
      if (index === -1) return;
      instances.splice(index, 1);
    },
    onDestroy () {
      render(null, container);
    }
  };
  const vnode = h(Message, props);
  const container = document.createElement('div');
  render(vnode, container);
  document.body.appendChild(container.firstElementChild!);

  const vm = vnode.component!;
  const instance: MessageContext = {
    id,
    vnode,
    vm
  };
  instances.push(instance);
}
