<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <!-- The router displays the current page here. -->
    <RouterView />
  </main>
  <SiteFooter />
</template>

<style>
/* Shared base styles. Each view and component keeps its own layout styles. */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #3f3b46;
  background: #f5f5f6;
}

h1, h2, h3 {
  color: #5c4b72;
  font-weight: 700;
  line-height: 1.3;
  font-family: Helvetica, Arial, sans-serif;
}

strong, b {
  font-weight: 400;
}

p {
  margin: 0 0 16px;
}

a {
  color: #5c4b72;
}

a:hover {
  text-decoration: underline;
}

a:focus-visible {
  outline: 3px solid #746083;
  outline-offset: 4px;
}

img {
  display: block;
  max-width: 100%;
  object-fit: contain;
}

.container {
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
}
</style>
