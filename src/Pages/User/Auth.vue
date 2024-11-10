<script setup>
// Default
import { ref } from "vue";
import cookie from "vue-cookie";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
import passport from "passport";

import NavSpace from "@/components/Other/NavSpace.vue";
import Nav from "@/components/UserPanel/Nav.vue";
import Error from "@/components/UserPanel/Error.vue";

// Captcha
const captchaToken = ref("");
const onCaptchaVerified = (token) => {
  captchaToken.value = token;
};
</script>

<template>
  <title>登入系統 | 吳元皓的網站 v3</title>

</template>

<style scoped>
button {
  color: black;
}
input {
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  background: rgba(141, 141, 141, 0.36);
  color: white;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius:10px;
}
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1em;
  cursor: pointer;
  border-radius: 50%;
}
div.login-form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #5050503c;
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  --webkit-box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}
</style>
