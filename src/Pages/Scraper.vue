<script setup>
import GetMD from '@/components/GetMD.js'

const md = GetMD('/mds/other/scrape.md');
</script>

<template>
  <meta content="author-email" name="web+aiscrapecontact@yuanhau.com" />
  <div v-html="md" v-ref="md"></div>
</template>

<style scoped>

</style>