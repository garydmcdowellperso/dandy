<template>
  <div>
    <h1>{{fetchState.meta[`spookydev.${fetchState.value}`].story}}</h1>
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
      return {
        state: fetchMachine.service.state,
        context: fetchMachine.context,
        current: fetchMachine.service.initialState,
      }
  },    
};
</script>
