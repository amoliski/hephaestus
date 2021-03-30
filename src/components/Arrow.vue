<template>
  <div>
    <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- eslint-disable-next-line -->
      <path d="M16.5392 4.48032C16.7345 4.28506 16.7345 3.96848 16.5392 3.77322L13.3572
      0.591236C13.162 0.395973 12.8454 0.395973 12.6501 0.591235C12.4549 0.786498 12.4549
      1.10308 12.6501 1.29834L15.4786 4.12677L12.6501 6.9552C12.4549 7.15046 12.4549 7.46704
      12.6501 7.6623C12.8454 7.85757 13.162 7.85757 13.3572 7.6623L16.5392 4.48032ZM0.295726
      4.62677L16.1857 4.62677L16.1857 3.62677L0.295726 3.62677L0.295726 4.62677Z"
      :fill="fill_color"
      />
    </svg>
  </div>
</template>

<script>
  import variables from '@/assets/style/vars.scss';

  export default {
    name: 'Arrow',
    props: {
      color: {
        type: String,
        default: 'accent',
      },
    },
    computed: {
      fill_color() {
        return variables[this.color];
      },
    },
  };
</script>

<style scoped>
  div {
    display: inline-block;
  }
</style>
