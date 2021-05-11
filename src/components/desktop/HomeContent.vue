<template>
  <div class="__home_content__" :class="{transition_out: transition_out}">
    <div class="top">
      <nav_bar></nav_bar>
    </div>
    <div class="main">
      <div class="text" ref="text">
        <div class="the">
          The
        </div>
        <div class="hep">
          Hephaestus <br />
          <span class="col">Collection</span>
        </div>
        <div class="blurb">
          A gallery of <span class="underline">artificially generated</span> paintings <br>
          and prose. Discover beauty in binary.
        </div>
        <rounded-button to='navigation' color="turquoise" border="transparent"
                        :delay="1000" v-on:click="transition_out = true"
                        background="primary">
          Enter the Collection
          <arrow color="turquoise"></arrow>
        </rounded-button>
      </div>
      <div class="image"></div>
    </div>
    <div class="nav">
      <div class="nav_buttons">
        <router-link to="about_project">
          About this project
          <arrow color="primary"></arrow>
        </router-link>
        <router-link to="about_technology">
          About this technology
          <arrow color="primary"></arrow>
        </router-link>
        <router-link to="shop">
          Shop our gallery
          <arrow color="primary"></arrow>
        </router-link>
      </div>
      <div class="warning">
        <div><span class="accent_fg">*&nbsp;</span>
          This site contains bizarre and <br />
          unsettling ai generated content</div>
      </div>
    </div>
  </div>
</template>

<script>
  import roundedButton from '@/components/RoundedButton.vue';
  import arrow from '@/components/Arrow.vue';
  import nav_bar from '@/components/Nav.vue';

  export default {
    name: 'HomeContent',
    components: {
      roundedButton,
      arrow,
      nav_bar,
    },
    data() {
      return {
        transition_out: false,
      };
    },
  };
</script>

<style lang="scss">
  @import "../../assets/style/vars";
  .__home_content__ {
    display: grid;
    grid-template-rows: 20px 1fr 85px;
    height: 100vh;
    width: 100%;
    &.transition_out{
      .text{
        opacity: 0;
      }
      .image {
        transform: scale(0.835) translateX(calc(-25vw - 61px)) translateY(-47px);
        border-color: $primary;
      }

    }
    .main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }
    .image{
      transform: translateX(-30px);
      border: 12px solid transparent;
      transition: transform .25s;
      width: 600px;
      height:600px;
      border-radius: 100%;
      background-clip: padding-box;
      aspect-ratio: 1 / 1;
      background-size: cover;
      background-color: transparent;
      background-image: url('/img/5%202.png');
    }
    .text{
      max-width: 100vw;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-family: $areplos;
      z-index: 10;
      transition: opacity 1s;
      transform: translateX(20px);
      .the{
        font-size: 25px;
        text-align: start;
        padding-left: 55px;
      }
      .hep{
        font-size: 116px;
        line-height: 111px;
      }
      .col{
        padding-left: 10px;
      }
      .underline {
        text-decoration: underline;
      }
      .blurb {
        margin-top: 10px;
        font-size: 13px;
        line-height: 20px;
        text-align: start;
        color: $secondary;
        margin-bottom: 10px;
        width: 293px;
        padding-left: 182px;
      }
    }
    .nav {
      border-top: 1px solid $tertiary;
      display: grid;
      grid-template-columns: 1fr 250px;
      width: 100vw;
      .nav_buttons{
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      a {
        flex-grow: 1;
        max-width: 180px;
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
        height: 1.5em;
      }
      .warning {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        margin-right: 30px;
        color: $secondary;
        font-size: 11px;
        font-weight: lighter;
        font-family: "Open Sans", sans-serif;
      }
    }
  }
</style>
