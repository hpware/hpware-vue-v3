<script setup>
import { ref, onMounted } from "vue";
import { animate, scroll } from 'motion';
const loading = ref(null);

onMounted(() => {
  animate(
    loading.value,
    { rotate: 90 },
    { type: "spring", ease: "easeInOut",repeat: Infinity, repeatDelay: 0.2 }
  );
});
</script>
<template>
  <div class="center">
    <!--Loading Animation-->
    <div class="loading" ref="loading"></div>
</div>
</template>
<style scoped>
.loading {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: transparent;
  background-image: url("");
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>