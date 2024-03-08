<template>
  <div class="form-container">
    <van-form @submit="submitMessage">
      <van-cell-group inset>
        <van-field
          v-model="friendName"
          :label="friendLabel"
          :placeholder="placeholder"
        />
        <div
          style="width: 90%; height: 1px; background: #e89eca; margin: 0 auto"
        ></div>
        <van-field
          v-model="message"
          rows="6"
          autosize
          :label="contentLabel"
          type="textarea"
          maxlength="150"
          :placeholder="contentPlaceholder"
          show-word-limit
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button block native-type="submit"> 提交留言 </van-button>
      </div>
    </van-form>
    <div class="alert-message">
      提交留言前请认真阅读<router-link to="/">《留言规范》</router-link>和<router-link to="/">《隐私政策》</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "vant";

// 暗号
const friendName = ref("");

// 留言内容
const message = ref("");
const props = defineProps({
  friendLabel: {
    type: String,
    default: "好友名字",
  },
  placeholder: {
    type: String,
    default: "请填写好友名字或暗号",
  },
  contentLabel: {
    type: String,
    default: "留言内容",
  },
  contentPlaceholder: {
    type: String,
    default: "请填写留言内容",
  },
});

const submitMessage = () => {
  console.log("friendName", friendName);
  if (!friendName.value) {
    showToast(props.placeholder);
    return;
  }
  if (!message.value) {
    showToast(props.contentPlaceholder);
    return;
  }
  showToast("提交成功，审核通过即可显示");
};
</script>

<style scoped>
.form-container {
  width: 80%;
  background: #fff;
}
::v-deep(.van-button) {
  background-color: var(--theme-color);
  color: #fff;
  font-weight: bold;
}
</style>
