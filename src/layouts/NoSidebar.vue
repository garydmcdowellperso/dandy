<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
export default {
  components: {
    NavBar,
    FooterBar
  }
};
</script>

<template>
  <div>
    <nav-bar />

    <div class="container">
      <slot />
    </div>

    <footer-bar />
  </div>
</template>

<style scoped>
@import "~bulma";
#app {
  font-family: "Times New Roman", Georgia, serif;
  font-size: 2  4px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100%;
  background-image: url("http://www.commentnation.com/backgrounds/images/stone_tile_background_dark_brown_seamless.jpg"); 
}

</style>