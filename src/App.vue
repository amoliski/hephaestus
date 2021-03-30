<template>
  <div class="noise"></div>
  <loading :loading="loading" :progress="loading_progress"
           v-on:click="loading = false;"></loading>
  <transition name="slide">
    <router-view/>
  </transition>
</template>

<script>
  import { defineComponent } from 'vue';
  import Loading from './components/Loading.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Loading,
    },
    mounted() {
      const interval = setInterval(() => {
        this.loading_progress += (0.05 * this.dir);
        if (this.loading_progress > 1) {
          this.dir = -1;
        } else if (this.loading_progress < 0) {
          this.dir = 1;
        }
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        this.loading = false;
      }, 2000);
    },
    data() {
      return {
        loading: true,
        loading_progress: 1,
        dir: 1,
      };
    },
  });
</script>

<style lang="scss">
@import "./assets/style/base.scss";
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

</style>
