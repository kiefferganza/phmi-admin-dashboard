<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand >Admin Dashboard</b-navbar-brand>


    <b-collapse id="nav-collapse" is-nav class="text-white">
      <b-navbar-nav >
        <b-nav-item> 
          <router-link to="/home" class="text-white">Dashboard</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/backup" class="text-white">Backup</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link v-if="!loggedIn" to="/" class="text-white">Sign In</router-link>
        </b-nav-item>
    </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" v-if="loggedIn">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
            <b-dropdown-item ><router-link :to="{name: 'Logout'}">Logout</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      
    </b-collapse>
  </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
