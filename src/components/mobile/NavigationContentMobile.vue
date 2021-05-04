<template>
  <div class="__home_content_mobile__">
    <div class="top">
      <nav_bar></nav_bar>
    </div>
    <div class="main">
      <div class="spacer"></div>
      <div class="image">
        <img src="/img/5 2.png" alt="" />
      </div>
      <div class="text" ref="text">
        <div class="the"> The </div>
        <div class="hep"> Hephaestus <br /> <span class="col">Collection</span></div>
        <div class="blurb">
          A gallery of <span class="underline">artificially generated</span> paintings <br>
          and prose. Discover beauty in binary.
        </div>
        <rounded-button to='navigation' color="turquoise" border="transparent" background="primary">
          Enter the Collection
          <arrow color="turquoise"></arrow>
        </rounded-button>
      </div>
      <div class="spacer"></div>
      <div class="warning">
        <div><span class="accent_fg">*&nbsp;</span>
          This site contains bizarre and
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
    name: 'NavigationContentMobile',
    components: {
      roundedButton,
      arrow,
      nav_bar,
    },
  };
</script>

<style lang="scss">
  @import "../../assets/style/vars";
  .__home_content_mobile__ {
    display: grid;
    grid-template-rows: 20px 1fr;
    height: 100vh;
    width: 100%;
    .main {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @media screen and (max-width: 560px) {
        justify-content: center;
      }
      flex-direction: column;
    }
    .image{
      margin-top: 100px;
      @media screen and (max-width: 560px) {
        margin-top: 0;
      }
      transform: translateX(0);
      img {
        max-width: 400px;
        width: 95vw;
        max-height: 400px;
        height: 95vw;
        border-radius: 100%;
        @media screen and (max-width: 400px) {
          max-width: 300px;
          max-height: 300px;
        }
      }
    }
    .text{
      max-width: 100vw;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-family: $areplos;
      z-index: 10;
      transform: scale(1);
      @media screen and (max-width: 560px) {
        transform: scale(.95);
      }
      @media screen and (max-width: 360px) {
        transform: scale(.75);
      };
      .the{
        font-size: 26px;
        text-align: start;
        padding-left: 55px;
      }
      .hep{
        font-size: 66px;
        line-height: 64px;
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
        padding-left: 30px;
        padding-right: 30px;
        @media screen and (max-width: 560px) {
          width: 100vw;
          box-sizing: border-box;
          word-break: break-word;
          word-wrap: break-word;
          white-space: normal;
          font-size: 13px;
          br {
            display: none;
          }
        }
      }
    }
    .spacer {
      flex-grow: 1;
    }
    .warning {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      color: $secondary;
      font-size: 11px;
      font-weight: lighter;
      font-family: "Open Sans", sans-serif;
      margin-bottom:  60px;
    }
  }
</style>
