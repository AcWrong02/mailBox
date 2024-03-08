<template>
  <div class="mail-top">
    <IntroHeader />
  </div>
  <div class="mail-content">
    <writeForm v-if="MessageType === 0"/>
    <writeForm friendLabel="学校名称" placeholder="请输入学校名称" content-placeholder="请填写好班级、姓名和具体留言内容"  v-if="MessageType === 1"/>
    <writeForm friendLabel="学校名称" placeholder="请输入学校名称" content-placeholder="请填写好班级、姓名和具体留言内容" v-if="MessageType === 2"/>
    <writeForm friendLabel="许愿暗号" placeholder="请输入许愿暗号" content-placeholder="请填写你的愿望" buttonText="许愿" isWish v-if="MessageType === 3"/>
  </div>
</template>

<script setup>
import IntroHeader from "../header/IntroHeader.vue";
import { useRouter, useRoute } from "vue-router";
import writeForm from "../writeForm/writeForm.vue";

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
