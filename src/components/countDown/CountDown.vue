<template>
  <div class="countdown-title">
    <div class="countdown-title__sentence">考的全会，蒙的全对</div>
    <div class="countdown-title__desc">高考倒计时</div>
    <van-count-down
      :time="timeDifference"
      format="DD 天 HH 时 mm 分 ss 秒"
      style="text-align: center; font-size: 20px; margin: 15px"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
// 获取当前日期
const currentDate = new Date();

// 设置2024年高考日期（假设为6月7日）
const examDate = new Date(2024, 5, 7); // 月份是从0开始计数的，所以5表示6月

// 计算时间差
const timeDifference = ref(examDate - currentDate);
</script>

<style scoped>
.countdown-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
}
.countdown-title__sentence {
  text-align: center;
  margin: 15px;
  color: var(--theme-color);
}
.countdown-title__desc {
  text-align: center;
  margin: 15px;
}
</style>
