<template>
<div>
  <div class="w3-top">
  <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
    <a v-on:click='isOpen = !isOpen' class="w3-bar-item w3-button w3-left w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)"><i class="fa fa-bars"></i></a>
    <router-link to="/" class="nav-link">
    <a class="w3-bar-item w3-button">Home</a>
    </router-link>
    <router-link to="/about-creator/" class="nav-link">
    <a class="w3-bar-item w3-button w3-hide-small w3-hover-white">About Creator</a>
    </router-link>
    <router-link to="/blog/" class="nav-link">
    <a class="w3-bar-item w3-button w3-hide-small w3-hover-white">Blog</a>
    </router-link>
    <router-link to="/write-for-us/" class="nav-link">
    <a class="w3-bar-item w3-button w3-hide-small w3-hover-white">Write for us</a>
  </router-link>
  </div>
</div>
<!-- Sidebar -->
<div v-if="isOpen">
<nav class="w3-sidebar w3-bar-block w3-large w3-theme-l5 w3-animate-left" id="mySidebar">
  <a href="javascript:void(0)" v-on:click='isOpen = !isOpen' class="w3-right w3-xlarge w3-padding-large w3-hover-black"><i class="fa fa-remove"></i></a>
  <h4 class="w3-bar-item"><b>Converter</b></h4>
  <router-link to="/ascii-to-binary/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">ASCII to Binary</a>
  </router-link>
  <router-link to="/decimal-to-binary/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Decimal to Binary</a>
  </router-link>
  <router-link to="/binary-to-decimal/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Binary to Decimal</a>
  </router-link>
  <router-link to="/binary-to-hexadecimal/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Binary to Hexadecimal</a>
  </router-link>
  <router-link to="/hexadecimal-to-binary-converter/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Hexadecimal to Binary</a>
  </router-link>
  <router-link to="/decimal-to-hexadecimal/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Decimal to Hexadecimal</a>
  </router-link>
  <router-link to="/hexadecimal-to-decimal/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Hexadecimal to Decimal</a>
  </router-link>
  <router-link to="/decimal-to-octal/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Decimal to Octal</a>
  </router-link>
  <router-link to="/octal-to-decimal/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Octal to Decimal</a>
  </router-link>
  <router-link to="/binary-to-octal/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Binary to Octal</a>
  </router-link>
  <router-link to="/octal-to-binary-converter/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Octal to Binary</a>
  </router-link>
  <router-link to="/hexadecimal-to-octal/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Hexadecimal to Octal</a>
  </router-link>
  <router-link to="/qr-code-reader/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">QR Code Reader</a>
  </router-link>
  <router-link to="/qr-code-generator/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">QR Code Generator</a>
  </router-link>
  <router-link to="/decimal-to-fraction/" class="nav-link">
  <a class="w3-bar-item w3-button w3-hover-black">Decimal to Fraction</a>
  </router-link>
</nav>
</div>
<!-- Overlay effect when opening sidebar on small screens -->

<!-- Main content: shift it to the right by 250 pixels when the sidebar is visible -->

<!-- END MAIN -->
</div>
</template>
<script>
export default {
  data () {
    return {
      isOpen: false,
      text_value: null,
      total: null,
      ans: '',
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.open
    }
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
