<style>
  .nav-item {
    margin: 0.2em .5em;
  }
</style>
<script>
  import NavLinks from '../components/NavLinks.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'site-header',
    components: {
      NavLinks,
    },
    computed: {
      ...mapGetters([
        'get_site_info',
      ]),
      site() {
        return this.get_site_info;
      },
    },
  }
</script>
<template>
  <header class="">

    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top sitehead">
      <div class="container-fluid">
        <a class="navbar-brand sitehead-brand" href="#">Eight9 Design Network</a>

        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle Navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center nav-sitehead" id="navbarMenu">
          <NavLinks />
        </div>

      </div>
    </nav>

  </header>

  </template>
