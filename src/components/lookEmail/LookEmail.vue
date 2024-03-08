<template>
  <div class="mail-top">
    <IntroHeader />
  </div>
  <div class="mail-content">
    <ReadForm v-if="MessageType === 0" />
    <ReadForm
      friendLabel="学校名称"
      placeholder="请输入学校名称"
      v-if="MessageType === 1"
    />
    <ReadForm
      friendLabel="学校名称"
      placeholder="请输入学校名称"
      v-if="MessageType === 2"
    />
    <ReadForm
      friendLabel="许愿暗号"
      placeholder="请输入许愿暗号"
      v-if="MessageType === 3"
    />
  </div>
  <FloatMenu/>
</template>

<script setup>
import IntroHeader from "../header/IntroHeader.vue";
import { useRouter, useRoute } from "vue-router";
import ReadForm from "../readForm/ReadForm.vue";
import FloatMenu from "../FloatMenu.vue";

const router = useRouter();
const route = useRoute();

const MessageType = parseInt(route.params.type);
</script>

<style scoped>
.mail-top {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mail-content {
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
