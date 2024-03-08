<template>
  <div class="float-menu" @click="handleMenuClick">
    <div class="float-menu__inner">
      <div>创建</div>
      <div>留言</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const handleMenuClick = () => {
  router.replace("/selectWrite");
};
</script>

<style scoped>
.float-menu {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 10px;
  width: 60px;
  height: 60px;
  background: var(--theme-color);
  border-radius: 50%;
}

.float-menu__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  font-size: 13px;
  color: #fff;
}
</style>
