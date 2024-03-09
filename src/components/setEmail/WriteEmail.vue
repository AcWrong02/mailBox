<template>
  <div class="mail-top">
    <IntroHeader />
  </div>
  <div class="mail-content">
    <writeForm @submit="handleCouple" v-if="MessageType === 0" />
    <writeForm
      friendLabel="学校名称"
      placeholder="请输入学校名称"
      content-placeholder="请填写好班级、姓名和具体留言内容"
      v-if="MessageType === 1"
    />
    <writeForm
      friendLabel="学校名称"
      placeholder="请输入学校名称"
      content-placeholder="请填写好班级、姓名和具体留言内容"
      v-if="MessageType === 2"
    />
    <writeForm
      friendLabel="许愿暗号"
      placeholder="请输入许愿暗号"
      content-placeholder="请填写你的愿望"
      buttonText="许愿"
      isWish
      v-if="MessageType === 3"
    />
  </div>
</template>

<script setup>
import IntroHeader from "../header/IntroHeader.vue";
import { useRouter, useRoute } from "vue-router";
import writeForm from "../writeForm/writeForm.vue";
import { createMessage, approveMessage } from "../../api/index.js";
import { showToast } from "vant";

const router = useRouter();
const route = useRoute();

const MessageType = parseInt(route.params.type);

const handleCouple = async (params) => {
  const res = await createMessage({
    messageType: 0,
    receiverName: params.friendName,
    content: params.message,
  });
  if (res.status == 200) {
    showToast("提交成功 审核通过后即可查看留言");
    const messageId = res.data.messageId;
    approveMessage({
        messageId,,
        messageStatus: 1,
    })
    console.log("MessageId: ", messageId);
    // 自动审核通过
  } else showToast("出错了 请稍后再试");
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
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
