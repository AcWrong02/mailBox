<template>
  <div class="poster">
    <div class="poster-message">保存图片发给好友👇👇👇</div>
    <canvas id="myCanvas" style="display: none;"></canvas>
  </div>
  <img :src="imgSrc" alt="" style="width: 70%;"/>
</template>

<script setup>
import { onMounted, ref } from "vue";
import html2canvas from "html2canvas";

const props = defineProps({
  type: String,
  friendName: String,
});

const width = 300;
const height = 480;

const imgSrc = ref("");

onMounted(() => {
  // const poster = document.querySelector(".poster");
  const canvas = document.getElementById("myCanvas"); // 使用id来寻找canvas元素
  const cxt = canvas.getContext("2d"); // 创建context对象

  // 取可视化区域的宽、高并设置myCanvas的宽高
  //   const clientWidth = document.documentElement.clientWidth;
  //   const clientHeight = document.documentElement.clientHeight;
  canvas.width = width; // 设置myCanvas的宽
  canvas.height = height; // 设置myCanvas的高

  // 绘制一个矩形，用来做全局背景颜色
  cxt.fillStyle = "#fff";
  cxt.fillRect(0, 0, canvas.width, canvas.height); // fillRect方法是创建一个矩形，x坐标、y坐标、宽度、高度

  // 把图片绘制到myCanvas
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = "../../poster.png"; // 图片路径
  img.onload = () => {
    cxt.drawImage(img, 0, 0, width, height);
    // 绘制文字部分显示：
    cxt.fillStyle = "#ffffff";
    cxt.font = "16px 'Microsoft YaHei', 'SimHei', 'sans-serif'";
    const str = `暗号： ${props.friendName}`;
    cxt.textBaseline = "middle";
    cxt.textAlign = "left";
    let lineWidth = 0;
    let txtlimitWidth = 240; // 一行文字占用的宽度
    let initHeight = height - 300; // 绘制字体距离canvas顶部初始的高度
    let lastSubStrIndex = 0; // 每次开始截取的字符串的索引

    // 绘制文字的时候，如果当绘制的长度超出文字限制长度 txtlimitWidth, 就转行
    for (let i = 0; i < str.length; i++) {
      lineWidth += cxt.measureText(str[i]).width;
      if (lineWidth > txtlimitWidth) {
        cxt.fillText(str.substring(lastSubStrIndex, i), 20, initHeight); // 绘制截取部分
        initHeight += 20; // 20为字体的高度
        lineWidth = 0;
        lastSubStrIndex = i;
      }
      if (i == str.length - 1) {
        // 绘制剩余部分
        cxt.fillText(str.substring(lastSubStrIndex, i + 1), 50, initHeight);
      }
    }

    const str2 = `留言类型： ${props.type}`;
    let initHeight2 = height - 350; // 绘制字体距离canvas顶部初始的高度
    let lineWidth2 = 0;
    let lastSubStrIndex2 = 0;
    for (let i = 0; i < str2.length; i++) {
      lineWidth2 += cxt.measureText(str2[i]).width;
      if (lineWidth2 > txtlimitWidth) {
        cxt.fillText(str2.substring(lastSubStrIndex2, i), 20, initHeight2); // 绘制截取部分
        initHeight2 += 20; // 20为字体的高度
        lineWidth2 = 0;
        lastSubStrIndex2 = i;
      }
      if (i == str2.length - 1) {
        // 绘制剩余部分
        cxt.fillText(str2.substring(lastSubStrIndex2, i + 1), 50, initHeight2);
      }
    }
  };
  setTimeout(() => {
    const base64 = canvas.toDataURL("image/png");
    imgSrc.value = base64;
  }, 1000);
});
</script>

<style>
.poster-message{
  font-size: 15px;
  padding: 5px;
}
</style>
