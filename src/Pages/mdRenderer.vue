<script setup>
// Imports
import { ref, defineProps, onMounted } from 'vue'
import { marked } from 'marked'
import Loading from '@/components/Loading/SideToSide.vue'
// Set vars
const md = ref(null)
const loading = ref(true)
const notallowed = ref(false)
const allow = ['yuanhau.com', 'yuanh.xyz', '0nas.yuanhau.com/~hw/', 'zz.yuanhau.com']
// URL
let h = new URLSearchParams(window.location.search).get('h')
if (!h) {
    notallowed.value = true
} else if (h === '0nas' || h === '0nas.yuanhau.com') {
    h = '0nas.yuanhau.com/~hw/'
}
const File = new URLSearchParams(window.location.search).get('f');
async function fetchFile() {
    try {
        const fr = await fetch(`https://${h}/${File}.md`)
        if (!fr.ok) {
            throw new Error('Network response was not ok')
        }
        const text = await fr.text()
        md.value = marked(text)
    } catch (error) {
        console.error('Error fetching the post:', error)
        md.value = 'Error loading post.'
    } finally {
        loading.value = false
    }
}
if (allow.includes(h)) {
    onMounted(() => {
        fetchFile()
    })            
    } else {
        notallowed.value = true
    }

if (notallowed.value === true) {
    loading.value = false
}
</script>
<template>
    <title>MD Renderer | 吳元皓</title>
    <div v-if="loading">
        <Loading/>
    </div>
    <div v-else-if="!loading">
        <div v-if="notallowed">
            <h3>Link Not Allowed!</h3>
        </div>
        <div v-else>
            <div v-html="md" v-ref="md"></div>
        </div>
    </div>
</template>