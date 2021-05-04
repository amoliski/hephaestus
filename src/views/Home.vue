<template>
  <div class="__home__">
    <div class="home_content">
      <HomeContent></HomeContent>
    </div>
    <div class="home_content_mobile">
      <HomeContentMobile></HomeContentMobile>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import HomeContent from '@/components/desktop/HomeContent.vue';
  import HomeContentMobile from '@/components/mobile/HomeContentMobile.vue';

  export default defineComponent({
    name: 'Home',
    components: {
      HomeContentMobile,
      HomeContent,
    },
    mounted() {
      window.addEventListener('resize', this.handle_resize);
      this.handle_resize();
    },
    methods: {
      handle_resize() {
        // const { text } = this.$refs;
        // console.log(text);
        // console.log(text.innerWidth);
      },
    },
    watch: {
      'window.innerWidth': function watch(e) {
        console.log(e);
      },
    },
  });
</script>

<style lang="scss">
  @import "../assets/style/vars.scss";

  .__home__ {
    display: grid;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: $turquoise;
    & > .home_content{
      display: block;
    }
    & > .home_content_mobile{
      display: none;
    }
  }

  @media screen and (max-width: 1240px) {
    .__home__ {
      & > .home_content{
        display: none;
      }
      & > .home_content_mobile{
        display: block;
      }
    }
  }
</style>
