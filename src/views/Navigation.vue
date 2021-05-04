<template>
  <div class="__navigation__">
    <div class="navigation_content">
      <NavigationContent></NavigationContent>
    </div>
    <div class="navigation_content_mobile">
      <NavigationContentMobile></NavigationContentMobile>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import NavigationContent from '@/components/desktop/NavigationContent.vue';
  import NavigationContentMobile from '@/components/mobile/NavigationContentMobile.vue';

  export default defineComponent({
    name: 'Navigation',
    components: {
      NavigationContentMobile,
      NavigationContent,
    },
  });
</script>

<style lang="scss">
  @import "../assets/style/vars.scss";

  .__navigation__ {
    display: grid;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: $turquoise;
    & > .navigation_content{
      display: block;
    }
    & > .navigation_content_mobile{
      display: none ;
    }
  }

  @media screen and (max-width: 1240px) {
    .__navigation__ {
      & > .navigation_content{
        // display: none;
        display: block;
      }
      & > .navigation_content_mobile{
        // display: block;
        display: none;
      }
    }
  }
</style>
