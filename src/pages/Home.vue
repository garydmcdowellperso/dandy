<template>
  <div>
    <h1 v-html="fetchState.meta[`dandy.${fetchState.value}`].story"></h1>
  </div>
</template>

<script>
import { fetchMachine } from "../fetchMachine";

export default {
  name: "App",
  data() {
    function sendAndNav (item) {
        fetchMachine.send(item)
        //this.$router.push({ path: item })
    }

    return {
        sendAndNav: sendAndNav,
    }
  },    
  computed: {
    fetchState() {
        return fetchMachine.current;
    },
    fetchContext() {
        return fetchMachine.context;
    }
  },
};
</script>
