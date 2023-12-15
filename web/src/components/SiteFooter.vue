<style>

</style>
<script>
  import NavLinks from '../components/NavLinks.vue';
  import { mapGetters } from 'vuex'
  export default {
    name: 'site-footer',
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
      year() {
        return new Date().getFullYear();
      },
    },
  }
</script>
<template>
  <footer class="footer fixed-bottom bg-light py-3">
    <!-- footer -->
    <div class="container">
      <div class="row">

        <div class="col-12 col-sm">
          <div class="nav-item"><address class="m-0"><font-awesome-icon :icon="['fas', 'location-dot']" /> {{ site.address1 }} {{ site.address2 }}</address></div>
        </div>
        <div class="col-12 col-sm-auto text-right">
          <div class="nav-item"><a class="nav-link" :href="'mailto:' + site.email + '?subject=Website Inquiry'"><font-awesome-icon :icon="['fas', 'envelope']" size="lg" /> {{ site.email }}</a></div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm">
            <span>Copyright &copy; 2023-{{ year }} <span class="text-standout">Eight9 Design Network INC</span></span>
          </div>
          <div class="col-12 col-sm-auto text-right">
            <span class="">Developed by <a class="misc-link" href="https://eight9.net/">Eight9 Design Network INC</a></span>
          </div>
        </div>
      </div>
    </div>

  </footer>

</template>
