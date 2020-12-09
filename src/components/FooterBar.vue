<template>
  <footer class="footer">
      <ValueBlock title='gold' value="6"/>
      <ValueBlock title='jewels'/>
      <ValueBlock title='potions'/>
  </footer>
</template>

<script>
import ValueBlock from './ValueBlock';

export default {
  components: {
    ValueBlock
  }
};
</script>

<style lang="scss">
.footer {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  font-family: "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100%;
  width: 100%;
  background-image: url("http://www.commentnation.com/backgrounds/images/stone_tile_background_dark_brown_seamless.jpg"); 
}
</style>