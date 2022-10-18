<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary justify-content-center">
    <div class="navbar-nav">
      <router-link to="/" class="navbar-brand nav-item nav-link ">
        <i class="fa fa-home" aria-hidden="true"></i>
      </router-link>
      <router-link to="/guessing" class="navbar-brand nav-item nav-link">Guessing</router-link>
      <router-link to="/results" class="navbar-brand nav-item nav-link">Results</router-link>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({}) 
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
