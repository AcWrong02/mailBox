<template>
  <div class="mail-top">
    <IntroHeader />
  </div>
  <div class="mail-content">
    <CountDown v-if="MessageType === 2"></CountDown>
    <writeForm @submit="handleSubmit" v-if="MessageType === 0" />
    <writeForm
      friendLabel="留言暗号"
      placeholder="填写暗号或学校名称"
      content-placeholder="请填写好班级、姓名和具体留言内容"
      @submit="handleSubmit"
      v-if="MessageType === 1"
    />
    <writeForm
      friendLabel="留言暗号"
      placeholder="填写暗号或者学校名称"
      content-placeholder="建议填写好学校、班级、姓名和具体留言内容"
      @submit="handleSubmit"
      v-if="MessageType === 2"
    />
    <writeForm
      friendLabel="许愿暗号"
      placeholder="请输入许愿暗号"
      content-placeholder="请填写你的愿望"
      buttonText="许愿"
      isWish
      @submit="handleSubmit"
      v-if="MessageType === 3"
    />
  </div>
  <van-dialog v-model:show="show" title="留言成功" show-cancel-button>
    <!-- <img src="../../../public/poster.png" style="width: 100%;height: 380px;"/> -->
    <Poster :type="messageTypeMap[MessageType]" :friendName="friendName"/>
  </van-dialog>
</template>

<script setup>
import { ref } from "vue";
import IntroHeader from "../header/IntroHeader.vue";
import CountDown from "../countDown/CountDown.vue";
import { useRouter, useRoute } from "vue-router";
import writeForm from "../writeForm/writeForm.vue";
import { createMessage, approveMessage } from "../../api/index.js";
import { showToast } from "vant";
import Poster from "../Poster.vue";

const router = useRouter();
const route = useRoute();

const MessageType = parseInt(route.params.type);

const show = ref(false);

const messageTypeMap = {
    0: "给ta的话",
    1: "中考加油",
    2: "高考加油",
    3: "许愿墙",
}

const friendName = ref("");

const handleSubmit = async (params) => {
  const res = await createMessage({
    messageType: MessageType,
    receiverName: params.friendName,
    content: params.message,
  });
  friendName.value = params.friendName
  if (res.status == 200) {
    if (MessageType === 3) {
      // showToast("许愿成功 审核通过后即可查看愿望");
    } else {
      // showToast("提交成功 审核通过后即可查看留言");
      show.value = true;
    }
    const messageId = res.data.data.messageId;
    approveMessage({
      messageId,
      messageStatus: 1,
    });
    // console.log("MessageId: ", messageId);
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
