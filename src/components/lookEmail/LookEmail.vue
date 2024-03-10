<template>
  <div class="mail-top">
    <IntroHeader />
  </div>
  <div class="mail-content">
    <CountDown v-if="MessageType === 2"></CountDown>
    <ReadForm v-if="MessageType === 0" @submit="handleGetList" />
    <ReadForm
      friendLabel="留言暗号"
      placeholder="请输入暗号或学校名称"
      v-if="MessageType === 1"
      @submit="handleGetList"
    />
    <ReadForm
      friendLabel="留言暗号"
      placeholder="请输入暗号或学校名称"
      v-if="MessageType === 2"
      @submit="handleGetList"
    />
    <ReadForm
      friendLabel="许愿暗号"
      placeholder="请输入许愿暗号"
      buttonText="查看愿望"
      @submit="handleGetList"
      v-if="MessageType === 3"
    />
    <ReadList
      style="margin: 20px 0"
      v-if="isSearch"
      :messageList="messageList"
    />
  </div>
  <FloatMenu />
</template>

<script setup>
import IntroHeader from "../header/IntroHeader.vue";
import { useRouter, useRoute } from "vue-router";
import ReadForm from "../readForm/ReadForm.vue";
import FloatMenu from "../FloatMenu.vue";
import CountDown from "../countDown/CountDown.vue";
import ReadList from "../readList/ReadList.vue";
import { getMessage } from "../../api/index.js";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

const MessageType = parseInt(route.params.type);

// 是否为查询状态
const isSearch = ref(false);

//留言列表
const messageList = ref([]);

const handleGetList = async (single) => {
  const res = await getMessage({
    condition: 0,
    arg1: MessageType,
    arg2: single,
  });
  isSearch.value = true;
  console.log(res);
  if (res.data.code == 200) {
    messageList.value = res.data.data;
  }
};
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
