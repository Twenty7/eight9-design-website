<style scoped>

</style>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'contact-view',
    components: {
    },
    data () {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
        status: 'pending',
        disabled: false,
      }
    },
    computed: {
      ...mapGetters([
        'get_site_info',
      ]),
      site() {
        return this.get_site_info;
      },
    },
    methods: {
      ...mapActions([
        'do_submit_contact',
      ]),
      submit() {
        let $this = this;
        if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
          this.status = 'missing';
          return false;
        }
        this.status = 'sending';
        this.disabled = true;
        this.do_submit_contact(this.form)
          .then(function(res) {
            $this.$set($this, 'status', 'success');
            this.status = 'success';
          }).finally(function() {
            
          }).catch(function(err) {
            this.status = 'error';
            this.disabled = false;
          });
      }
    },
  }
</script>

<template>
  <div class="services">


    <!-- Services section -->
    <section id="services-info" class="mt-5">
      <div class="container-fluid">
        <div class="row text-center">
          <div class="content-head center">
            <h3 class="center_divider">Services</h3>
          </div>

          <div class="clearfix"> </div>
          <div class="col-md-3 aligncenter">
            <div class="service_block">
              <span class="icon bg-white"><i class="icon"><font-awesome-icon :icon="['fas', 'phone']" /></i></span>
              <h5>Phone & Fax </h5>
              <span class="small">Phone: <a :href="'tel:' + site.phone" class="ci-link">{{ site.phone }}</a></span>
              <!--<span class="small">Fax : {{ fax }}</span>-->
            </div>
          </div>

          <div class="col-md-3 aligncenter">
            <div class="service_block">
              <span class="icon bg-white"><i class="icon"><font-awesome-icon :icon="['fas', 'location-dot']" /></i></span>
              <h5>Address</h5>
              <address>
                <span class="small">{{ site.address1 }}</span>
                <span class="small">{{ site.address2 }}</span>
              </address>
            </div>
          </div>

          <div class="col-md-3 aligncenter">
            <div class="service_block">
              <span class="icon bg-white"><i class="icon"><font-awesome-icon :icon="['fas', 'envelope']" /></i></span>
              <h5>Email & website</h5>
              <span class="small"><a :href="'mailto:' + site.email + '?subject=Website Inquiry'" class="ci-link">{{ site.email }}</a></span>
              <span class="small"><a :href="site.website" class="ci-link">{{ site.website }}</a></span>
            </div>
          </div>

          <div class="col-md-3 aligncenter">
            <div class="service_block">
              <span class="icon bg-white"><i class="icon"><font-awesome-icon :icon="['fas', 'question']" /></i></span>
              <h5>Got Questions ?</h5>
              <span class="small">Give us a call with any questions.</span>
              <span class="small"><a :href="'tel:' + site.phone" class="ci-link">Call us at: {{ site.phone }}</a></span>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
