<template>
  <router-link :to="to" class="rounded-button"
    :style = "{borderColor: border_color, color: text_color, backgroundColor: background_color}"
  >
    <slot/>
  </router-link>
</template>

<script>
  import variables from '../assets/style/vars.scss';

  export default {
    name: 'RoundedButton',
    props: {
      to: {
        required: true,
      },
      color: {
        type: String,
        default: 'primary',
      },
      background: {
        type: String,
        default: 'accent',
      },
      border: {
        type: String,
        default: 'secondary',
      },
    },
    computed: {
      text_color() {
        return variables[this.color];
      },
      background_color() {
        return variables[this.background];
      },
      border_color() {
        return variables[this.border];
      },
    },
  };
</script>

<style scoped>
  .rounded-button{
    width: 240px;
    color: $secondary;
    display: inline-flex;
    justify-content: space-between;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid $tertiary;
    padding: 10px 20px;
    border-radius: 30px;
  }
</style>
