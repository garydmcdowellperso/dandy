<template>
  <div class="sidebar">
    <li v-for="item in fetchState.nextEvents" :key="item.message">
        <div class="box" v-on:click="sendAndNav(item)">
          {{item}}
        </div>
        <br />
    </li>
  </div>
</template>

<script>
import { fetchMachine } from "../fetchMachine";

export default {
  name: "App",
  computed: {
    fetchState() {
        return fetchMachine.current;
    },
    fetchContext() {
        return fetchMachine.context;
    }
  },
  data() {
    function sendAndNav (item) {
        fetchMachine.send(item)
        //this.$router.push({ path: item })
    }

    return {
        sendAndNav: sendAndNav,
    }
  },    
  method: {
  },
};
</script>

<style lang="scss">
li {list-style-type: none;}
</style>