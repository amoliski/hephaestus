<template>
  <div class="__navigation__">
    <div class="navigation_content">
      <NavigationContent></NavigationContent>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import NavigationContent from '@/components/desktop/NavigationContent.vue';

  export default defineComponent({
    name: 'Navigation',
    components: {
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
  }
</style>
