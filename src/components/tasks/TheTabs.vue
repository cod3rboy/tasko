<template>
  <ul class="tab-container">
    <li class="tab-item active">
      <router-link :to="{ name: 'active-tasks' }">
        <i class="far fa-clock"></i> Active
      </router-link>
    </li>
    <li class="tab-item">
      <router-link :to="{ name: 'finished-tasks' }">
        <i class="far fa-calendar-check"></i> Finished
      </router-link>
    </li>
    <li class="tab-item">
      <router-link :to="{ name: 'missed-tasks' }">
        <i class="far fa-calendar-times"></i> Missed
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.tab-container {
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  padding: 0;
  font-size: 1.4rem;
  margin: 0;
}
.tab-item {
  flex: 1 1 0%;
}
.tab-item > a {
  display: block;
  background-color: var(--color-secondary-surface);
  color: var(--color-accent);
  text-decoration: none;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  height: 100%;
  text-align: center;
  padding: 0.5em 0.2em;
  letter-spacing: 0.1em;
}
.tab-container .tab-item:not(:first-child) a {
  border-left: 1px solid rgba(0, 0, 0, 0.25);
}
.tab-item > a:hover {
  filter: brightness(1.2);
}
.tab-item > a:active {
  filter: brightness(1.4);
}
.tab-item a.router-link-active {
  border-bottom: 0.2em solid var(--color-accent);
  font-weight: bold;
}
.tab-item a.router-link-active > i {
  animation: rotate-icon 0.6s ease-in-out forwards;
}
@keyframes rotate-icon {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
