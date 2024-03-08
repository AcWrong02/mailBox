import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: "/", component: ()=> import('@/components/HomePage.vue') },
  { path: "/selectLook", component: ()=>import('@/components/lookEmail/SelectType.vue') },
  { path: "/selectWrite", component: ()=>import('@/components/setEmail/SelectType.vue') },
  { path: "/writeEmail/:type", component: ()=>import('@/components/setEmail/WriteEmail.vue') },
  { path: "/readEmail/:type", component: ()=>import('@/components/lookEmail/LookEmail.vue') },
  { path: "/rules", component: ()=>import('@/components/rules/MessageStandard.vue') },
];

const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router;
