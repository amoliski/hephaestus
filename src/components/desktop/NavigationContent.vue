<template>
  <div class="__navigation_content__" :class="{ animating: animating }">
    <div class="indicators" style="position: absolute">
      <div ref="selected_entry" style="position: absolute; opacity: 0;">
        <button class="entry" v-if="selected"
                :class="{active: selected.show_title}">
          <div class="image" :style="
              { backgroundColor: 'transparent', backgroundImage: 'url(\''+selected.src+'\')' }
             "></div>
          <div class="title">{{selected.title}}</div>
        </button>
      </div>
    </div>
    <div class="indicators" style="position: absolute">
      <div class="indicator" ref="ind1"
           style="height: 100vh; top: 0; left: 0; position:absolute;
           width:10px; pointer-events: none">
      </div>
      <div class="indicator" ref="ind2"
           style="height: 100vh; top: 0; left: 0; position:absolute;
           width:10px; pointer-events: none">
      </div>
    </div>
    <div class="top">
      <nav_bar></nav_bar>
    </div>
    <div class="main" :style="{opacity: animating ? 0 : 1}">
       <div class="scroll_content" ref="scrollContent">
         <div class="spacer"></div>
         <button class="entry" :ref="entry.ref"
                 v-on:click="select(entry)" v-on:focus="focused(entry)"
              v-for="entry in entries" :key="entry.id"
              :class="{active: entry.show_title}">
           <div class="image" :style="
            { backgroundColor: 'transparent', backgroundImage: 'url(\''+entry.src+'\')' }
           "></div>
           <div class="title">{{entry.title}}</div>
         </button>
         <div class="spacer"></div>
       </div>
      <div class="buttons">
        <button v-on:click="prev_item">
          <arrow color="primary" direction="left"></arrow>
        </button>
        <button v-on:click="next_item">
          <arrow color="primary" direction="right"></arrow>
        </button>
      </div>
      <div class="scroll_bar_track">
        <div class="scroll_bar">

        </div>
      </div>
    </div>
    <div class="nav" :style="{opacity: animating ? 0 : 1}">
      <div class="nav_buttons">
        <router-link to="about_project">
          About this project
          <arrow color="primary"></arrow>
        </router-link>
        <router-link to="about_technology" class="about_tech">
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
  /* eslint-disable object-curly-newline, max-len */
  import arrow from '@/components/Arrow.vue';
  import nav_bar from '@/components/Nav.vue';
  import HorizontalScroll from '@oberon-amsterdam/horizontal';

  export default {
    name: 'NavigationContent',
    components: {
      arrow,
      nav_bar,
    },
    data() {
      return {
        animating: false,
        selected: null,
        last_left: null,
        hs: null,
        entries: [
          { id: 1, src: '/img/5%202.png', title: 'Reflection', show_title: true, ref: 'entry_1' },
          { id: 2, src: '/img/entries/abstract/A-1.jpeg', title: 'Abstract', show_title: false, ref: 'entry_2' },
          { id: 3, src: '/img/entries/blue_hill/BH-1.jpeg', title: 'Blue Hill', show_title: false, ref: 'entry_3' },
          { id: 4, src: '/img/entries/cinca/StyleGAN2-pbaylies-fork (42).jpeg', title: 'Cinca', show_title: false, ref: 'entry_4' },
          { id: 5, src: '/img/entries/lynch/DL-1.jpeg', title: 'Lynch', show_title: false, ref: 'entry_5' },
          { id: 6, src: '/img/entries/red_lady/RL-1.jpeg', title: 'Red Lady', show_title: false, ref: 'entry_6' },
        ],
      };
    },
    mounted() {
      const container = this.$refs.scrollContent;
      const options = { container, showScrollbars: true };
      this.hs = new HorizontalScroll(options);
      container.addEventListener('scroll', this.handle_scroll);
    },
    beforeUnmount() {
      if (this.hs && this.hs.destroy) {
        this.hs.destroy();
      }
    },
    methods: {
      select(entry) {
        const el = this.$refs[`entry_${entry.id}`];
        this.selected = entry;

        const scrollContent = this.$refs.scrollContent;
        this.last_left = scrollContent.scrollLeft;

        // Start loading image
        const img = new Image();
        img.src = `/img/sequences/${entry.title.toLowerCase()}.jpg`;

        this.wait_for_scroll(() => {
          this.animating = true;
          const selected_entry = this.$refs.selected_entry;
          selected_entry.style.top = `${el.getBoundingClientRect().top}px`;
          const left = el.getBoundingClientRect().left;
          selected_entry.style.left = `${left}px`;
          selected_entry.style.opacity = '1';
          setTimeout(() => {
            console.log(`/entry/${entry.title}`);
            this.$router.push(`/entry/${entry.title}`);
          }, 1000);
        });
      },
      wait_for_scroll(callback) {
        setTimeout(() => {
          const scrollContent = this.$refs.scrollContent;
          console.log(scrollContent.scrollLeft, this.last_left);
          if (this.last_left === scrollContent.scrollLeft) {
            callback();
          } else {
            this.last_left = scrollContent.scrollLeft;
            this.wait_for_scroll(callback);
          }
        }, 150);
      },
      focused(entry) {
        const el = this.$refs[`entry_${entry.id}`];
        this.center_entry(el);
      },
      center_entry(el) {
        const entry_rect = el.getBoundingClientRect();
        const scrollContent = this.$refs.scrollContent;
        const padding = scrollContent.children[0].getBoundingClientRect().width;
        const abs_left = scrollContent.scrollLeft + entry_rect.left;
        const opts = { left: abs_left - padding, behavior: 'smooth' };
        scrollContent.scrollTo(opts);
      },
      next_item() {
        const entry = this.$refs.entry_1;
        const entry_width = entry.getBoundingClientRect().width;
        const scrollContent = this.$refs.scrollContent;
        scrollContent.scrollTo({ left: scrollContent.scrollLeft + entry_width, behavior: 'smooth' });
      },
      prev_item() {
        const entry = this.$refs.entry_1;
        const entry_width = entry.getBoundingClientRect().width;
        const scrollContent = this.$refs.scrollContent;
        scrollContent.scrollTo({ left: scrollContent.scrollLeft - entry_width, behavior: 'smooth' });
      },
      handle_scroll() {
        const screen_width = window.innerWidth;
        const start = screen_width / 4;
        const end = start * 3;
        this.$refs.ind1.style.left = `${start}px`;
        this.$refs.ind2.style.left = `${end}px`;

        this.entries.forEach((e) => {
          e.show_title = false;
          const el = this.$refs[`entry_${e.id}`];
          const bounds = el.getBoundingClientRect();
          const center = bounds.x + (bounds.width / 2);
          if (center > start && center < end) {
            e.show_title = true;
          }
        });
      },
    },
  };
</script>

<style lang="scss">
  @import "../../assets/style/vars";

  .__navigation_content__ {
    &.animating {
      pointer-events: none;
    }
    user-select: none;
    display: grid;
    grid-template-rows: 20px 1fr 85px/* 50px  */;

    @media screen and (max-width: 800px) {
      grid-template-rows: 20px 1fr 150px;
    }
    height: 100%;
    width: 100vw;
    .main{
      width: 100vw;
      display: flex;
      align-items: center;
      height: 100%;
      position:relative;
      transition: opacity 0.5s ease;
      .scroll_content{
        overflow-y: hidden;
      }
      .scroll_content, .scroll_container {
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
      }
      ::-webkit-scrollbar {
        background-color: transparent;
        height: 25px;
      }
      ::-webkit-scrollbar-thumb {
        height: 5px;
        background:
          linear-gradient(to bottom, transparent, transparent 75%, $primary 76%, $primary);
      }
      .scroll_content {
        overflow-x: scroll;
        align-items: center;
        flex-direction: row;
        width: 100vw;
      }
      .spacer{
        height: 100px;
        width: calc(50vw - 250px - 66px);
        @media screen and (max-width: 1240px) {
          width: calc(50vw - ((310px + 60px) / 2) - 1px);
          /*min-width: calc(50vw - 160px);*/
        }

        flex-shrink: 0;
      }
    }

    .entry{
      display: flex;
      background: transparent;
      border: none;
      flex-shrink: 0;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: width 0.5s ease, opacity 0.5s ease;
      -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
      .image {
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
      &.active, &:hover{
        .image {
          border-color: $primary;
        }
        .title {
          opacity: 1;
        }
      }
      .title {
        opacity: 0;
        color: $secondary;
        transition: opacity .5s;
        margin-top: 1em;
        font-family: $areplos;
        font-size: 26px;
        @media screen and (max-width: 1240px) {
          font-size: 18px;
        }
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0.02em;
        text-align: center;

        .active & {
          opacity: 1;
        }
      }
    }

    .buttons {
      display: flex;
      margin-bottom: 10px;
      justify-content: space-between;
      position: absolute;
      width: 100vw;
      bottom: 20px;
      button {
        cursor: pointer;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        border: thin solid $tertiary;
        background: transparent;
        height: 48px; width: 48px;
        margin-left: 30px;
        margin-right: 30px;
      }
    }
    .nav {
      border-top: 1px solid $tertiary;
      display: grid;
      grid-template-columns: 1fr 250px;

      @media screen and (max-width: 800px) {
        display: block;
      }
      width: 100vw;
      .nav_buttons{
        display: flex;
        flex-direction: row;
        align-items: center;

        @media screen and (max-width: 800px) {
          flex-direction: column;
          padding: 20px;
          align-items: stretch;
          a {
            margin-left: 20px;
            margin-right: 20px;
            flex-grow: 0;
            margin-top: 15px;
            align-items: stretch;
          }
          .about_tech {
            display: none;
            align-items: center;
          }
        }
      }
      a {
        flex-grow: 1;
        max-width: 180px;
        @media screen and (max-width: 800px) {
         max-width: none;
        }
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

        @media screen and (max-width: 1240px) {
          display: none;
        }
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
