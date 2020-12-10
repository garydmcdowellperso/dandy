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

