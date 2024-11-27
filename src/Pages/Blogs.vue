<script setup>
// Import
import { ref, onMounted } from "vue";
import { marked } from "marked";
import Loading from '@/components/Loading/SideToSide.vue'
// Vars
const list = ref();
const loading = ref(true);
// Fetch List
async function fetchList() {
    try {
        const listURL = await fetch("https://blogge.yuanh.xyz/yuanh-list.md");
        const listText = await listURL.text();
        list.value = marked(listText);
    } catch (error) {
        blog.value = "系統錯誤!";
    } finally {
        loading.value = false;
    }
}
onMounted(() => {
    fetchList();
})
</script>
<template>
    <title>Blog | 吳元皓</title>
    <div v-if="loading">
        <Loading/>
    </div>
    <div v-else-if="!loading">
        <h2>部落格</h2>
        <div v-html="list" v-ref="list"></div>
    </div>
</template>
<style>
ul {
  list-style-type:disc;
  display:inline-block;
  text-align:left;
}
</style>