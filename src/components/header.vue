<template>

<!-- Sidebar -->
</template>
<script>
export default {
  data(){
    return {
        }
},
methods: {
}
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
