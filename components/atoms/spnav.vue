<template>
  <div class="nav lg:hidden flex justify-between items-center p-4">
    <NuxtLink to="/" class="title-link">
      <h1 class="text-xl font-bold">東京理科大学野球部</h1>
    </NuxtLink>
    <input id="drawerCheckbox" class="nav__checkbox" type="checkbox" />

    <!-- ドロワーアイコン -->
    <label class="flex relative" for="drawerCheckbox">
      <menu-icon size="2x" class="relative"></menu-icon>
    </label>

    <!-- 背景を暗く -->
    <label class="nav__overlay" for="drawerCheckbox"></label>

    <!-- ドロワーメニュー -->
    <nav class="nav__menu pb-32">
      <div class="w-full flex flex-col mx-auto">
        <ul class="flex flex-col justify-center lg:items-center p-8">
          <li class="link">
            <a v-scroll-to="{ el: '#member' }" href="#member">MEMBERS</a>
          </li>
          <!-- <li class="link">
            <a v-scroll-to="{ el: '#qa' }" href="#qa">Q＆A</a>
          </li> -->
          <li class="link">
            <a v-scroll-to="{ el: '#schedule' }" href="#schedule">SCHEDULE</a>
          </li>
          <li class="register">
            <a
              href="https://docs.google.com/forms/d/1FGurtbRLUHK4YMXOrRxOMiMDz8iLNsqBu1s-4vxiG9E/"
              target="_blank"
              rel="noreferrer noopener"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { MenuIcon } from 'vue-feather-icons'
export default {
  components: {
    MenuIcon,
  },
}
</script>
<style lang="scss" scoped>
.link {
  @apply text-base m-4;
}
.register {
  @apply inline-block rounded-full px-4 py-2 my-2 mx-4 text-center;
  color: #fff !important;
  background: var(--primary);
  // border-radius: 17px;
  transition: all 0.25s ease;
  box-shadow: 0 10px 20px -10px rgba($primary, 0.5);
  &:hover {
    box-shadow: 0 20px 20px -10px rgba($primary, 0.5);
    transform: translateY(-5px);
  }
}
/*ドロワー*/
.nav {
  @apply fixed w-full h-full top-0 right-0;
  .badge-drawer {
    top: -10px;
    right: -8px;
    width: auto !important;
  }
  .select-plain {
    display: inline-block;
    padding-right: 1em;
    cursor: pointer;
    text-indent: 0.01px;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    background: transparent;
    background-image: none;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
    font-size: 14px;
    color: #626262;
  }
  position: relative;
  // inputのcheckboxは非表示
  &__checkbox {
    display: none;
  }

  // ドロワーメニュー開いた時のメインエリアを暗く
  &__overlay {
    background: #000;
    opacity: 0;
    pointer-events: none; //ポインタの動作全部無効化
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
  }

  // ドロワーメニュー
  &__menu {
    background: #ffffff;
    color: #000;
    max-width: 100%;
    width: 75%;
    height: 100vh;
    overflow-y: auto; //スクロール
    -webkit-overflow-scrolling: touch; //スクロール（SP）
    position: fixed;
    top: 0;
    right: -75%;
  }
  // z-indexの指定（1がメインエリア）
  &__icon {
    z-index: 4;
  }
  &__menu {
    z-index: 3;
  }
  &__overlay {
    z-index: 2;
  }

  // チェックが入ったら（アイコンクリックしたら）
  &__checkbox:checked ~ {
    // ハンバーガーアイコン
    .nav__icon {
      .nav__icon-parts {
        background: transparent;
      }
      .nav__icon-parts:before {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 0;
      }
      .nav__icon-parts:after {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 0;
      }
    }
    // メインエリアを暗くする
    .nav__overlay {
      opacity: 0.3;
      pointer-events: auto; //ポインタの動作デフォルトに戻す
    }
    // メニューをだす
    .nav__menu {
      right: 0;
      z-index: 9999;
    }
  }
  // 動きをスムーズに
  &__icon-parts,
  &__icon-parts:after,
  &__icon-parts:before,
  &__overlay,
  &__menu {
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
}
</style>
