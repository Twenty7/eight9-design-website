<style>

</style>
<script>
  // import { mapGetters } from 'vuex'
  export default {
    name: 'nav-links',
    props: {
      css_class: {
        default: 'no-print',
      },
    },
    components: {

    },
    computed: {
      // ...mapGetters([
      //   'get_user',
      // ]),
      active_route() {
        return this.$route.name;
      },
    },
    mounted() {
    },
  }
</script>
<template>

  <ul id="site-navbar" class="navbar-nav" :class="css_class">
    <li class="nav-item">
      <router-link class="nav-link text-nowrap" to="#section-home" ><font-awesome-icon :icon="['fas', 'home']" /> Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-nowrap" to="#section-services"><font-awesome-icon :icon="['fas', 'camera-retro']" /> Services</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-nowrap" to="#section-contact"><font-awesome-icon :icon="['fas', 'envelope']" /> Contact</router-link>
    </li>
  </ul>

</template>
