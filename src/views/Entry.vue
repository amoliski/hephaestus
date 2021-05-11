<template>
  <div class="__entry__" ref="entry">
    {{$route.params.entry_name}}
    <div class="viewer" :style="{
      backgroundImage: 'url(\''+image_src+'\')', backgroundPositionX: x_pos }">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Entry',
    data() {
      return {
        x_pos: 0,
      };
    },
    computed: {
      image_src() {
        return `/img/sequences/${this.$route.params.entry_name.toLowerCase()}.jpg`;
      },
    },
    mounted() {
      window.addEventListener('mousemove', (e) => {
        // const x = e.clientX;
        requestAnimationFrame(() => {
          const offset = Math.floor(e.clientX / 50) * (window.innerWidth > 1240 ? 500 : 300);
          this.x_pos = `${-1 * offset}px`;
        });
      });
    },
  };
</script>

<style lang="scss">
  .__entry__ {
    background-color: #1A262D;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .viewer {
      background-color: white;
      width: 500px;
      @media screen and (max-width: 1240px) {
        width: 300px;
      }
      max-height: calc(100vh - 20px - 85px);
      margin-left: 50px;
      margin-right: 50px;
      @media screen and (max-width: 1240px) {
        margin-left: 25px;
        margin-right: 25px;
      }
      aspect-ratio: 1 / 1;
      background-size: cover;
      border-radius: 100%;
      border: 10px solid transparent;
      @media screen and (max-width: 1240px) {
        border: 5px solid transparent;
      }
      transition: border .2s ease;
      background-clip: padding-box;
    }
  }
</style>
