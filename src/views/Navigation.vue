<template>
  <div class="home">
    <div class="square primary">primary</div>
    <div class="square secondary">secondary</div>
    <div class="square tertiary">tertiary</div>
    <div class="square accent">accent</div>
    <div class="square olive">olive</div>
    <div class="square olive_dark">olive_dark</div>
    <div class="square turquoise">turquoise</div>
    <div class="square turquoise_dark">turquoise_dark</div>
    <div class="square navy">navy</div>
    <div class="square navy_dark">navy_dark</div>
    <div class="square dark">dark</div>
    <div class="square dark_dark">dark_dark</div>
    <br>
    <div class="square primary_fg">primary</div>
    <div class="square secondary_fg">secondary</div>
    <div class="square tertiary_fg">tertiary</div>
    <div class="square accent_fg">accent</div>
    <div class="square olive_fg">olive</div>
    <div class="square olive_dark_fg">olive_dark</div>
    <div class="square turquoise_fg">turquoise</div>
    <div class="square turquoise_dark_fg">turquoise_dark</div>
    <div class="square navy_fg">navy</div>
    <div class="square navy_dark_fg">navy_dark</div>
    <div class="square dark_fg">dark</div>
    <div class="square dark_dark_fg">dark_dark</div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Navigation',
    components: {
    },
  });
</script>

<style lang="scss">
  @import "../assets/style/vars.scss";
  .square {
    font-family: 'Areplos Book Pro', serif;
    display: inline-block;
    height: 100px;
    width: 160px;
  }

</style>
