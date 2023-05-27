<script setup></script>

<template>
  <!-- 一级路由出口组件 -->
  <RouterView />
  <div class="test">测试样式</div>
</template>

<style lang="scss">
.test {
  color: $priceColor;
}
</style>
