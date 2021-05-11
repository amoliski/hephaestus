<template>
  <button v-on:click="click" class="rounded-button"
       :style = "{borderColor: border_color, color: text_color, backgroundColor: background_color}">
    <slot/>
  </button>
</template>

<script>
  import variables from '../assets/style/vars.scss';

  export default {
    name: 'RoundedButton',
    props: {
      to: {
        required: false,
      },
      delay: {
        required: false,
        default: 0,
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
    methods: {
      click() {
        if (this.to) {
          setTimeout(() => {
            this.$router.push(this.to);
          }, this.delay);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/style/vars.scss";
  .rounded-button{
    cursor: pointer;
    box-sizing: content-box;
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
