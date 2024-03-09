const PORT = 9000;
const BASE_URL = `http://124.70.203.208:${PORT}`;
import axios from "axios";

// 创建留言
export const createMessage = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${BASE_URL}/message/create`, data).then((res) => {
      resolve(res);
    });
  });
};

// 获取审核留言列表
export const getReviewMessage = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/message/queryAll`, {
        params: params,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

// 审批祝福接口
export const approveMessage = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${BASE_URL}/message/approval`, data).then((res) => {
      resolve(res);
    });
  });
};

// 查询留言
export const getMessage = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/message/queryAll`, {
        params: params,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

// 删除留言
export const deleteMessage = (params) => {};
