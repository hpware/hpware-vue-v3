<script setup>
// Setup Imports
import Loading from '@/components/Loading/SideToSide.vue'
import OopsError from '@/Pages/OopsError.vue'
import { marked } from "marked";
import { ref, defineProps } from "vue";
// Setup Variables
const post = ref();
const loading = ref(true);

// Get Post from URL
const props = defineProps({
    name: String
})
// Fetch the post
async function fetchPost() {
    try {
        const response = await fetch(`/mds/posts/${props.name}.md`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const text = await response.text();
        post.value = marked(text);
    } catch (error) {
        console.error('Error fetching the post:', error);
        post.value = 'Error loading post.';
    } finally {
        loading.value = false;
    }
}
// onMounted
onMounted(() => {
    fetchPost();
})
</script>
<template>
    <title>{{ props.name }} | 吳元皓</title>
    <div v-if="loading">
        <Loading/>
    </div>
    <div v-else-if="!loading">
    <div v-if="!props.name || props.name === null">
        <OopsError/>
    </div>
    <div v-else>
        <div v-html="post" v-ref="post"></div>
    </div>
</div>
</template>