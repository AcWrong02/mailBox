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
      </van-cell-group>
      <div style="margin: 16px">
        <van-button block native-type="submit"> {{ buttonText }} </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "vant";

// 暗号
const friendName = ref("");

const props = defineProps({
  friendLabel: {
    type: String,
    default: "好友名字",
  },
  placeholder: {
    type: String,
    default: "请填写好友名字或暗号",
  },
  buttonText: {
    type: String,
    default: "查看留言",
  },
});

const emits = defineEmits(["submit"]);

const submitMessage = () => {
  if (!friendName.value) {
    showToast(props.placeholder);
    return;
  }
  emits("submit", friendName.value);
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
