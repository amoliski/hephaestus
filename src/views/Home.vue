<template>
  <div class="__home__">
    <div class="top"></div>
    <div class="main">
      <div class="text">
        <div class="the">
          The
        </div>
        <div class="hep">
          Hephaestus <br />
          <span class="col">Collection</span>
        </div>
        <div class="blurb">
          A gallery of <span class="underline">artifically generated</span> paintings <br>
          and prose. Discover beauty in binary.
        </div>
        <rounded-button to='home' color="turquoise" border="transparent" background="primary">
          Enter the Collection
          <arrow color="turquoise"></arrow>
        </rounded-button>
      </div>
      <div class="image">
        <img src="http://47.12.43.81:8080/img/5 2.png" alt="" />
      </div>
    </div>
    <div class="nav">
      <div class="nav_buttons">
        <router-link to="about_project">
          About this project
          <arrow color="primary"></arrow>
        </router-link>
        <router-link to="about_tech">
          About this technology
          <arrow color="primary"></arrow>
        </router-link>
        <router-link to="shop">
          Shop our gallery
          <arrow color="primary"></arrow>
        </router-link>
      </div>
      <div class="warning">
        <span class="accent_fg">*&nbsp;</span>
        This site contains bizarre and <br />
        unsettling ai generated content
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import arrow from '@/components/Arrow.vue';
  import roundedButton from '@/components/RoundedButton.vue';

  export default defineComponent({
    name: 'Home',
    components: {
      arrow,
      roundedButton,
    },
  });
</script>

<style lang="scss">
  @import "../assets/style/vars.scss";

  .__home__ {
    display: grid;
    height: 100vh;
    width: 100%;
    background-color: $navy;
    grid-template-rows: 20px 1fr 85px;

    .main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }
    .image{
      transform: translateX(-30px);
      img {
        width: 400px;
        height:400px;
        border-radius: 100%;
      }
    }
    .text{
      font-family: $areplos;
      z-index: 10;
      transform: translateX(20px);
      .the{
        font-size: 25px;
        text-align: start;
        padding-left: 55px;
      }
      .hep{
        font-size: 70px;
        line-height: 60px;
      }
      .col{
        padding-left: 10px;
      }
      .underline {
        text-decoration: underline;
      }
      .blurb {
        margin-top: 10px;
        font-size: 10px;
        color: $secondary;
        margin-bottom: 10px;
      }
    }

    .nav {
      border-top: 1px solid $tertiary;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        width: 180px;
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
      .warning {
        margin-right: 30px;
        color: $secondary;
        font-size: 11px;
        font-weight: lighter;
        font-family: "Open Sans", sans-serif;
      }
    }

  }

</style>
