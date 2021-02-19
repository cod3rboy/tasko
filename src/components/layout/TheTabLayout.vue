<template>
  <section class="tab-layout">
    <the-tabs :category="categoryId"></the-tabs>
    <div
      class="list"
      :class="{ 'stop-scroll': !shouldShowScrollbar }"
      @scroll="tryHideFab"
    >
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <base-float-button
      icon-code="f067"
      alt-text="Create New Task"
      :link="{ name: 'new-task', params: { categoryId: categoryId } }"
      :visible="!shouldHideFab"
    >
    </base-float-button>
  </section>
</template>
<script>
import TheTabs from "./TheTabs.vue";
export default {
  props: {
    categoryId: {
      type: String,
      required: true,
      default: null,
    },
  },
  components: {
    TheTabs,
  },
  data() {
    return {
      shouldHideFab: false,
      fabScrollThresh: 200, // Max Scroll Top value after which fab must hide
    };
  },
  computed: {
    shouldShowScrollbar() {
      return !this.$store.getters.isDrawerVisible;
    },
  },
  methods: {
    tryHideFab(event) {
      const scrollTop = event.target.scrollTop;
      if (scrollTop > this.fabScrollThresh) this.shouldHideFab = true;
      else this.shouldHideFab = false;
    },
  },
};
</script>
<style scoped>
.tab-layout {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
}
.list {
  overflow: hidden auto;
}
.list.stop-scroll {
  overflow: hidden;
}
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
