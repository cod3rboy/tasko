<template>
  <section>
    <the-tabs :category="categoryId"></the-tabs>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>
<script>
import TheTabs from "./TheTabs.vue";
export default {
  props: ["categoryId"],
  components: {
    TheTabs,
  },
};
</script>

<style scoped>
/* Vue Transition Classes for <router-view> */
.v-enter-from {
  transform: translateX(-100vw);
  opacity: 0;
}
.v-leave-to {
  transform: translateX(100vw);
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 300ms ease-in-out;
}
.v-enter-to,
.v-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
