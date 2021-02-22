<template>
  <base-actionbar>
    <template #action-text>Selected Items</template>
    <template #action-items>
      <base-action-item
        icon-code="f304"
        alt-text="Edit Category"
        background-color="var(--color-secondary-surface)"
        foreground-color="var(--color-accent)"
      ></base-action-item>
      <base-action-item
        icon-code="f2ed"
        alt-text="Delete Category"
        background-color="var(--color-secondary-surface)"
        foreground-color="var(--color-accent)"
      ></base-action-item>
    </template>
  </base-actionbar>
</template>
