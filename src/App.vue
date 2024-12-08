<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="link-wrapper">
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/impressum">Impressum</RouterLink>
      <RouterLink class="link" to="/datenschutz">Datenschutzerklärung</RouterLink>
    </div>
  </footer>
</template>