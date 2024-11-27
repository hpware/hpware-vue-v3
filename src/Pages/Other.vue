<script setup>
import GetMD from '@/components/GetMD.js'

GetMD('/mds/other/otherthings.md');
</script>

<template>
  <title>其他 | 吳元皓</title>
  <div v-html="md" v-ref="md"></div>
</template>

<style scoped></style>
