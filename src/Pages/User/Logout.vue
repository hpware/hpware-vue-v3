<script setup>
import cookie from "vue-cookie";
import Loading from "@/components/Loading/SideToSide.vue";
cookie.set("admin-login", "");
</script>

<template>
  <Loading />
  <meta http-equiv="refresh" content="2;url=/user/login" />
</template>

<style scoped></style>
