<template>
  <div class="__nav__">
    <nav class="menu">
      <div class="app_name">Hephaestus</div>
      <button class="menu_button">
        <div class="top"><span></span><span></span></div>
        <div class="bottom"><span></span><span></span></div>
      </button>
    </nav>
    <div class="indicator"></div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
  };
</script>

<style lang="scss">
  @import "../assets/style/vars.scss";
  .__nav__ {
    font-family: $areplos;
    .indicator {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
    }
    .menu {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }
    .app_name {
      margin-left: 20px;
      font-size: 20px;
    }
    .menu_button {
      background: none;
      border: none;
      display: block;
      cursor: pointer;
      margin-right: 20px;
      .top {
        margin-bottom: 8px;
      }
      .top, .bottom {
        padding: 0;
        line-height: 8px;
        & > span{
          display: inline-block;
          height: 8px;
          width: 8px;
          &:first-child{
            margin-right: 8px;
          }
          background: #B28A5A;
          border-radius: 100%;
        }
      }
    }
  }
</style>
