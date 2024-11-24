<script>
import cookie from "vue-cookie";
import Nav from "@/components/UserPanel/Nav.vue";
import Loading from "@/components/Loading/SideToSide.vue";
const user_account = cookie.get("user_account");
const loadingst = ref(true);
if (!user_account) {
  window.location.href='/user/login';
}
setTimeout(() => {
  loadingst.value = false;
}, 2000);

</script>
<template>
    <Nav />
    <div class="app" v-if="!loadingst">
        <h2>Test</h2>
    </div>
    <Loading v-else />
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>