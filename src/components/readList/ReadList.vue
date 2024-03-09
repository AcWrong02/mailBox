<template>
  <div class="message-list">
    <div class="message-list__title">{{ title }}</div>
    <div
      style="
        width: 90%;
        height: 1px;
        background: var(--theme-color);
        margin: 0 auto;
      "
    ></div>
    <div class="message-items">
      <div class="message-empty" v-if="messageList.length === 0">
        <div>暂时还没有人给你留言哦~</div>
        <div>不过没关系，你可以给TA留个言呀</div>
      </div>
      <template v-for="item in messageList" :key="item.messageId">
        <div class="message-item">
          <div class="message-item__header">
            <div class="userinfo">
              <div class="useravtar">
                <svg
                  t="1709988555080"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6674"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M512 880.64c-128 0-240.571733-66.594133-307.2-163.84 0-102.4 204.834133-158.72 307.2-158.72 102.4 0 307.2 56.32 307.2 158.72-66.594133 97.245867-179.2 163.84-307.2 163.84m0-727.04c87.005867 0 153.6 66.56 153.6 153.6 0 87.108267-66.594133 153.6-153.6 153.6s-153.6-66.491733-153.6-153.6c0-87.04 66.594133-153.6 153.6-153.6M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0"
                    fill="#999999"
                    p-id="6675"
                  ></path>
                </svg>
              </div>
              <div class="username">匿名用户</div>
            </div>
            <div class="createtime">{{ transformTime(item.timestamp) }}</div>
          </div>
          <div class="message-item__content">{{ item.content }}</div>
          <div
            style="
              width: 100%;
              height: 1px;
              background: var(--theme-color);
              margin: 5px auto;
            "
          ></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "给你的留言",
  },
  messageList: {
    type: Array,
    default: () => [],
  },
});

const transformTime = (time) => {
  // 将字符串转换为Date对象
  const timestamp = new Date(time);

  // 获取年月日时分的信息
  const year = timestamp.getFullYear();
  const month = (timestamp.getMonth() + 1).toString().padStart(2, "0");
  const day = timestamp.getDate().toString().padStart(2, "0");
  const hours = timestamp.getHours().toString().padStart(2, "0");
  const minutes = timestamp.getMinutes().toString().padStart(2, "0");

  // 构建格式化字符串
  const formattedStr = `${year}/${month}/${day} ${hours}:${minutes}`;
  return formattedStr;
};
</script>

<style scoped>
.message-list {
  width: 80%;
  background: #fff;
  font-size: 15px;
  color: var(--theme-color);
}
.useravtar {
  width: 30px;
  height: 30px;
}
.message-list__title {
  margin-left: 15px;
  padding: 8px;
}
.message-empty {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 150px;
}
.message-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #979595;
  font-size: 14px;
}
.message-items {
  padding: 15px;
}
.userinfo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.useravtar {
  margin-right: 10px;
}

.message-item__content {
  color: #96989c;
  padding: 10px;
}
</style>
