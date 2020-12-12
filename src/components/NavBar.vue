<template>
  <nav class="navbar">
    <div class="navbar-menu" :class="{'is-active': open}">
      <div class="navbar-start">
          <ValueBlock title="skill"  value="6"/>
          <ValueBlock title="stamina"  value="6"/>
          <ValueBlock title="luck"  value="6"/>
      </div>

      <div class="navbar-end">
        <span v-if="isLoggedIn">
            <a @click="logout">Logout</a>
        </span>
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
    computed: {
        isLoggedIn : function(){ return this.$store.getters.isAuthenticated},
    },
    methods: {
        async logout (){
            await this.$store.dispatch('LogOut')
            this.$router.push('/login')
        }
    },
    components: {
        ValueBlock
    }
};
</script>

