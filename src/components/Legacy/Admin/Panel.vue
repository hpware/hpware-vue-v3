<script setup>
import { ref } from "vue";
import NavSpace from "@/components/Other/NavSpace.vue";
import cookie from "vue-cookie";
const ENVusername = import.meta.env.VITE_ADMINUSERNAME;
const logged_in = ref("no");
if (cookie.get("admin-login") === `yes_${{ ENVusername }}`) {
  logged_in.value = "yes";
}
// Announcements
import Announcements from "@/components/Admin/Announcements.vue";
const AnnouncementsTransition = ref(false);
const toggleAnnouncements = () => {
  if (BlogCreateTransition.value) {
    BlogCreateTransition.value = !BlogCreateTransition.value;
  }
  AnnouncementsTransition.value = !AnnouncementsTransition.value;
};
// Blog Post Create
import CreateBlog from "@/components/Admin/Blog.vue";
const BlogCreateTransition = ref(false);
const toggleBlogCreate = () => {
  if (AnnouncementsTransition.value) {
    AnnouncementsTransition.value = !AnnouncementsTransition.value;
  }
  BlogCreateTransition.value = !BlogCreateTransition.value;
};
if (logged_in === "yes") {
} else {
  const countdown = ref(10);
  var intervalId = setInterval(updateCountdown, 1000);
  function updateCountdown() {
    countdown.value -= 1;
    if (countdown.value === 0) {
      clearInterval(intervalId);
    }
  }
}
// Change Password & Logout
const changePasswordAction = () => {
  alert(
    "密碼更改功能暫時未開放使用\n請聯絡網站管理員或上 vercel.app 更改密碼\n謝謝 :) ",
  );
};
const logoutAction = () => {
  window.location.href = "/user/logout";
};
</script>

<template>
  <title>管理員控制台 | 吳元皓的網站 v3</title>
  <div class="admin-page">
    <h3>管理員控制台</h3>
    <div v-if="logged_in === 'yes'">
      <button @click="logoutAction()" class="not-a-button">
        <i class="bi bi-box-arrow-left"></i>登出</button
      ><button @click="changePasswordAction" class="not-a-button">
        <i class="bi bi-option"></i> 更改密碼</button
      ><br />
      <i class="bi bi-person-circle" style="font-size: 3em; color: #5ad9ef"></i
      ><br /><span style="color: #5ad9ef">{{ ENVusername }}</span
      ><br />
      <h4>Actions:</h4>
      <button @click="toggleAnnouncements()">更改公告</button>
      <NavSpace />
      <button @click="toggleBlogCreate()">新增文章</button>
      <Transition name="fade" duration="100">
        <div v-if="AnnouncementsTransition">
          <Announcements />
        </div>
      </Transition>
      <Transition name="fade" duration="100">
        <div v-if="BlogCreateTransition">
          <CreateBlog />
        </div>
      </Transition>
    </div>
    <div v-else>
      <meta
        http-equiv="refresh"
        content="5;url=/admin/login?ref=failed_login"
      />
      <h4 id="countdown"></h4>
      <p>這個網頁必須登入才可使用！</p>
      <p>將在5秒後自動導向至登入頁面...</p>
      <p><a href="/admin/login?ref=failed_login">登入</a></p>
    </div>
  </div>
</template>

<style scoped>
button {
  color: black;
}
input,
textarea {
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
}
textarea {
  font-family: Arial, Helvetica, sans-serif;
}
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1em;
  cursor: pointer;
  border-radius: 50%;
}
</style>
