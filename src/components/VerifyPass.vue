<template>
  <div class="title">审核列表</div>
  <div class="review-list">
    <template v-for="(item, index) in reviewList" :key="item.messageId">
      <div class="message-card">
        <div class="message-card__top">
          <div class="number">第{{ index }}条</div>
          <div class="createtime">创建时间：{{ getTime(item.timestamp) }}</div>
        </div>
        <div
          style="
            width: 90%;
            height: 2px;
            background: var(--theme-color);
            margin: 0 auto;
          "
        ></div>
        <div class="messgae-card__content">
          <div class="message-type">
            类别:{{ messageTypeMap[item.messageType] }}
          </div>
          <div class="message-signal">留言暗号：{{ item.receiverName }}</div>
          <div class="message-content">留言内容：{{ item.content }}</div>
        </div>
        <div class="message-buttons">
            
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getReviewMessage } from "../api/index.js";

const reviewList = ref([]);

const getReviewList = async () => {
  const res = await getReviewMessage({ condition: 1, arg1: 0 });
  if (res) {
    reviewList.value = res.data.data;
    console.log(reviewList.value);
  }
};

const messageTypeMap = {
  0: "给ta的话",
  1: "中考加油",
  2: "高考加油",
  3: "许愿",
};

const getTime = (time) => {
  console.log(time);
  return time.slice(0, 10) + "-" + time.slice(11, 19);
};
getReviewList();
</script>

<style scoped>
.title {
  text-align: center;
}

.number {
  margin-right: 15px;
}

.message-card {
  background: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
}

.message-card__top {
  display: flex;
  font-size: 18px;
  margin: 5px;
}
</style>
