<template>
  <div>
    <div class="w3-top">
    <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
      <router-link to="/" class="nav-link">
      <a class="w3-bar-item w3-button">B2T</a>
      </router-link>
      </div>
  </div>
  <div id="q-app">
    <router-view />
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style scoped lang="scss">
html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif;}
.w3-sidebar {
  z-index: 3;
  width: 250px;
  top: 43px;
  bottom: 0;
  height: inherit;
}
  .w3-sidebarr {
    float: right;
    z-index: 3;
    width: 250px;
    top: 43px;
    bottom: 0;
    height: inherit;
}

.nav-link.router-link-exact-active {
  border-bottom: 3px solid #06c4d1;
}
.nav-link.router-link-exact-active a {
  color: #06c4d1;
}
</style>
