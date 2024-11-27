<script setup>
import Getmd from '@/components/GetMD.js'

GetMD('/mds/other/scraper.md');
</script>

<template>
  <meta content="author-email" name="web+aiscrapecontact@yuanhau.com" />
  <div v-html="md" v-ref="md"></div>
</template>

<style scoped>

</style>