<template>
  <div class="__loading__" :class="{loading:loading}">
    <div class="loading_image">
      <div class="stack">
        <img src="~@/assets/img/logo.svg"/>
        <img src="~@/assets/img/logo_blur.svg" :style="{opacity: progress}"/>
      </div>
    </div>
    <div class="loading_text areplos">
      Loading...
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Loading',
    components: {
    },
    props: {
      progress: {
        type: Number,
        default: 1,
      },
      loading: {
        type: Boolean,
        default: true,
      },
    },
  });
</script>

<style lang="scss">
  @import "~@/assets/style/vars.scss";
  .__loading__ {
    background: $dark;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;

    &.loading {
      opacity: 1;
      pointer-events: all;
    }

    .loading_text{
      font-family: $areplos;
      text-align: end;
      width: 500px;
    }

    .loading_image{
      width: 200px;
      height: 105px;
      margin-bottom: 25px;
      .stack {
        height: 200px;
        width: 200px;
        position: relative;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 200px;
          transition: opacity 0.2s ease;
        }
      }
    }
  }

</style>
