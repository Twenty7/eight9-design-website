<style lang="scss">
  .landing-box {
    .icon-box {
      min-height: 300px;
    }
  }
</style>
<script>
  export default {
    name: 'landing-box',
    props: [
      'cat',
    ],
    data() {
      return {
        show_more: false,
      }
    },
    computed: {
      total_items() {
        return this.cat.items.length;
      },
      show_items() {
        let items = [];
        let max = this.show_more ? this.total_items : 5;
        for (let i = 0; i < max; i++) {
          items.push(this.cat.items[i]);
        }
        return items;
      },
    },
    methods: {
      toggle_show() {
        console.log('Clickity');
        this.show_more = !this.show_more;
      },
    },
  }
</script>
<template>
  <div class="col-12 col-sm-6 col-md-4 col-xl-3 mt-3 mb-3 landing-box">
    <div class="p-3 border border-secondary rounded-4 text-center icon-box ">
      <div class="center-circle-icon"><font-awesome-icon :icon="['fas', cat.icon]" /></div>
      <h4 class="title">{{ cat.title }}</h4>
      <div class="description text-start">
        <div v-for="item in show_items"><font-awesome-icon :icon="['fas', 'right-long']" />{{ item }}</div>
        <div v-if="!show_more && total_items > 5"><a href="javascript://" @click="toggle_show">Show More</a></div>
        <div v-else-if="show_more && total_items > 5"><a href="javascript://" @click="toggle_show">Show Less</a></div>
      </div>
    </div>
  </div>

</template>
