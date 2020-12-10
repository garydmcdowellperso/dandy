<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import FooterBar from "@/components/FooterBar";
export default {
  components: {
    NavBar,
    SideBar,
    FooterBar
  }
};
</script>

<template>
  <div>
    <nav-bar />

    <div class="container section">
      <div class="columns">
        <div class="column is-2">
            &nbsp;
        </div>

        <div class="column is-6">
          <slot />
        </div>

        <div class="column is-2 ">
          <side-bar />
        </div>

        <div class="column is-2">
            &nbsp;
        </div>
      </div>
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