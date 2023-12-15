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

  <ul class="navbar-nav" :class="css_class">
    <li class="nav-item">
      <router-link class="nav-link text-nowrap" :class="{active: active_route == 'home' }" to="#top" @click.native="scrollFix('#scroll')"><font-awesome-icon :icon="['fas', 'home']" /> Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-nowrap" :class="{active: active_route == 'products' }" to="#services" @click.native="scrollFix('#services')"><font-awesome-icon :icon="['fas', 'camera-retro']" /> Services</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-nowrap" :class="{active: active_route == 'contact' }" to="#contact" @click.native="scrollFix('#contact')"><font-awesome-icon :icon="['fas', 'envelope']" /> Contact</router-link>
    </li>
  </ul>

</template>
