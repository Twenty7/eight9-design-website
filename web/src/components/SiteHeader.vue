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

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinkContent" aria-controls="navbarLinkContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center nav-sitehead" id="navbarLinkContent">
          <NavLinks />
        </div>

        <div class="justify-content-end contact-sitehead">
          <a v-if="false" class="nav-item" :href="'mailto:' + site.email + '?subject=Website Inquiry'"><font-awesome-icon :icon="['fas', 'envelope']" size="lg" /> {{ site.email }}</a>
        </div>
      </div>
    </nav>

  </header>

  </template>
