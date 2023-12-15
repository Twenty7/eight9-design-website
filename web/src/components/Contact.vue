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
  <div class="contact-view">

    <section id="contact-form" class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="content-head center">
            <h3 class="center_divider">Contact</h3>
          </div>

          <p class="content-sub text-center">Questions? We'd love to talk things over with you.</p>
          <div class="clearfix"></div>
          <div class="form_elements">
            <form class="contact-form" id="contact_form" @submit.prevent="submit" :disabled="disabled">
              <div class="row">
                <div class="col-md-4">
                  <div class="input-group mb-3">
                    <span class="input-group-text"><font-awesome-icon :icon="['fas', 'user']" /></span>
                    <input type="text" class="form-control" name="contact_name" placeholder="Your Name" aria-label="Your Name" required v-model="form.name" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group mb-3">
                    <span class="input-group-text"><font-awesome-icon :icon="['fas', 'at']" /></span>
                    <input type="text" class="form-control" name="contact_email" placeholder="E-Mail Address" aria-label="E-Mail Address" required v-model="form.email" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group mb-3">
                    <span class="input-group-text"><font-awesome-icon :icon="['fas', 'question']" /></span>
                    <input type="text" class="form-control" name="contact_subject" placeholder="Subject" aria-label="Subject" required v-model="form.subject" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="input-group mb-3">
                    <textarea class="form-control" placeholder="Your Message" aria-label="Your Message" required v-model="form.message"></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="input-group mb-3">
                    <button type="submit" class="btn btn-primary" id="contact_button">Send Message</button>
                  </div>
                </div>
              </div>
            </form>

            <div class="alert alert-success" role="alert" v-if="status == 'success'">
              <h4 class="alert-heading">Message Sent</h4>
              <p>Thanks for sending your message! We'll get back to you shortly.</p>
            </div>
            <div class="alert alert-danger" role="alert" v-if="status == 'error'">
              <h4 class="alert-heading">Error Sending Message</h4>
              <p>There was a problem sending your message. Please try again.</p>
            </div>
            <div class="alert alert-danger" role="alert" v-if="status == 'missing'">
              <h4 class="alert-heading">Form Incomplete</h4>
              <p>Please complete all the fields in the form before sending.</p>
            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>
