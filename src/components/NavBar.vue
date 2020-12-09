<template>
  <nav class="navbar">
    <div class="navbar-menu" :class="{'is-active': open}">
      <div class="navbar-start">
          <ValueBlock title="skill"  value="6"/>
          <ValueBlock title="stamina"  value="6"/>
          <ValueBlock title="luck"  value="6"/>
      </div>

      <div class="navbar-end">
          <ValueBlock />
      </div>
    </div>
  </nav>
</template>

<script>
import ValueBlock from './ValueBlock';

export default {
  data() {
    return {
      open: false
    };
  },
  components: {
    ValueBlock
  }
};
</script>

<style lang="scss">
.navbar {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  font-family: "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100%;
  background-image: url("http://www.commentnation.com/backgrounds/images/stone_tile_background_dark_brown_seamless.jpg"); 
}

</style>