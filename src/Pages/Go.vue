<script setup>
const goLink = new URLSearchParams(window.location.search).get("l");
import { ref } from "vue";
const location = ref("");
if (goLink === "ig") {
  window.location.href = "https://www.instagram.com/yh_.5_26/?ref=yuanh.xyz";
  location.value = "IG";
} else if (goLink === "gh") {
  window.location.href = "https://github.com/hpware?ref=yuanh.xyz";
  location.value = "GitHub";
} else if (goLink === "th") {
  const PostURL = new URLSearchParams(window.location.search).get("post");
  location.value = "Threads";
  if (!PostURL) {
    window.location.href = "https://threads.net/@yh_.5_26?ref=yuanh.xyz";
  } else if (PostURL) {
    window.location.href = `https://threads.net/@yh_.5_26/post/${PostURL}?ref=yuanh.xyz`;
  }
} else if (goLink === "em") {
  window.location.href = "mailto:web@yuanhau.com";
  location.value = "電子郵件";
} else if (goLink === "old-site") {
  window.location.href = "https://v2.yuanh.xyz?ref=yuanh.xyz";
  location.value = "舊網站";
} else if (goLink === "dc") {
  window.location.href="https://discord.com/users/918723093646684180";
  location.value = "Discord";
} else if (goLink === "gh-repo") {
  window.location.href =
    "https://github.com/hpware/hpware-vue-v3-public?ref=yuanh.xyz";
  location.value = "hpware-vue-v3 公開版";
} else if (goLink === "en-site") {
  window.location.href = "https://hwtw.cc?ref=yuanh.xyz";
  location.value = "英文網站(已死)";
} else if (goLink === "analytics") {
  window.location.href = "https://vd.yuanhau.com?ref=yuanh.xyz";
} else if (goLink === "blog") {
  const blogPost = new URLSearchParams(window.location.search).get("p");
  location.value = "yuanhau.com 部落格";
  if (!blogPost) {
    window.location.href = "https://yuanhau.com?ref=yuanh.xyz";
  } else if (blogPost) {
    window.location.href = `https://yuanhau.com/?p=${blogPost}?ref=yuanh.xyz`;
  }
} else if (goLink === "git") {
  const GitRepo = new URLSearchParams(window.location.search).get("repo");
  const Username = new URLSearchParams(window.location.search).get("user");
  location.value = "Git 伺服器";
  if (!Username) {
    window.location.href = `https://git.hwtw.cc/howard/${GitRepo}?ref=yuanh.xyz`;
  } else if (Username) {
    if (repo) {
      window.location.href = `https://git.hwtw.cc/${Username}/${GitRepo}?ref=yuanh.xyz`;
    } else {
      window.location.href = "/OopsError";
    }
  } else {
    window.location.href = "/OopsError";
  }
} else if (goLink === "gitcode-cn") {
  window.location.href = "https://gitcode.com/yuanhau";
  location.value = "GitCode";
} else if (goLink === "ypt"){
  window.location.href = "https://link.yeolpumta.com/P3R5cGU9Z3JvdXBJbnZpdGUmaWQ9NDIzMDA2Nw=="
  location.value = "讀書APP";
} else {
  window.location.href = "/OopsError?ref=redirectpage";
}
</script>
<template>
  <title>重新導向到 {{location}} | 吳元皓的網站 v3</title>
  <meta name="robots" content="noindex nofollow">
  <meta name="googlebot" content="nosnippet">
  <meta name="googlebot-news" content="nosnippet">
  <meta name="googlebot" content="notranslate">
  <h1 id="redirect">正在幫你重新導向到 {{location}}</h1>
</template>
