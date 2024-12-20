<script setup>
  const goLink = new URL(window.location.href).SearchParams.get("go");
  setTimeOut(() => {
      window.location.href = goLink;
  }, 3000)
</script>
<template>
  <div>
    <h2>台灣是一個國家! 不要讓國民黨摧毀一切!</h2>
  </div>
</template>
