<script setup>
// Default
import { ref } from "vue";
import NavSpace from "@/components/Other/NavSpace.vue";
import cookie from "vue-cookie";
import CryptoJS from "crypto-js";
import AES from "crypto-js/aes";
import SHA256 from "crypto-js/sha256";

// Login Function
const login = ref("no");
const username = ref("");
const logout = ref("");
const ENVusername = import.meta.env.VITE_ADMINUSERNAME;
const cookieUSERNAME = ref(import.meta.env.VITE_ADMINUSERNAME);

const pwd = ref("");
const ENVpwdHASH = import.meta.env.VITE_ADMINPWDHASH;

// Check Login Creds
if (cookie.get("admin-login") === `yes_${{ cookieUSERNAME }}`) {
  login.value = "yes";
}
const checkUser = () => {
  const pwdHASH = SHA256(pwd.value).toString();
  if (pwdHASH === ENVpwdHASH && username.value === ENVusername) {
    cookie.set("admin-login", `yes_${{ username }}`, { expires: "1d" });
    login.value = "yes";
  } else {
    login.value = "failed";
  }
};

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
// Logout & Change Password (Nav Bar for Admins)
const logoutAction = () => {
  login.value = "";
  logout.value = "yes";
  cookie.set("admin-login", "no");
};
const changePasswordAction = () => {
  alert(
    "密碼更改功能暫時未開放使用\n請聯絡網站管理員或上 vercel.app 更改密碼\n謝謝 :) ",
  );
};
</script>

<template>
  <title>管理員登入重新導向 | 吳元皓的網站 v3</title>
  <meta http-equiv="refresh" content="0;url=/user/login?ref=old-admin" />
  <div class="admin-page">
    <h3>管理員系統</h3>
    <h4 v-if="logout === 'yes'">
      <i class="bi bi-box-arrow-left"></i>&nbsp;登出成功!
    </h4>
    <div v-if="login === 'yes'">
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
    <div v-if="login === 'no'">
      <p>這個網頁必須登入才可使用</p>
      <br />
      <form @submit="checkUser">
        <label for="username">使用者</label><br />
        <input type="text" id="username" v-model="username" required /><br />
        <label for="password">&nbsp;密碼</label><br />
        <input type="password" v-model="pwd" required />
        <br />
        <button type="submit">送出</button>
      </form>
    </div>
    <div v-if="login === 'failed'">
      <i class="bi bi-person-circle" style="font-size: 3em; color: red"></i>
      <p>密碼錯誤或使用者不存在 ( •̯́ ^ •̯̀)</p>
      <br />
      <button
        onclick="window.location.href=window.location.href"
        style="background-color: khaki"
      >
        重試
      </button>
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
