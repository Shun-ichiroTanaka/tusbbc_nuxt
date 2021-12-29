<template>
  <nav class="nav lg:h-24 shadow-reverse">
    <div
      class="hidden lg:flex relative mx-auto flex items-center py-3 h-full container px-4"
    >
      <div class="flex w-full items-center justify-between">
        <div class="nav-left mr-auto">
          <NuxtLink to="/" class="title-link">
            <h1>
              <img
                src="https://res.cloudinary.com/reshelf/image/upload/v1619871156/Logo_pfuaao.svg"
                alt="Reshelf Logo"
                width="100"
                height="61"
              />
            </h1>
          </NuxtLink>
        </div>

        <div class="nav-right">
          <ul class="flex items-center">
            <li><nuxt-link to="/agree">事前登録規約</nuxt-link></li>
            <li><nuxt-link to="/privacy">プライバシーポリシー</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>

    <RuleSpNav />
  </nav>
</template>

<script>
// import { ShoppingCartIcon,BellIcon,SearchIcon,UserIcon, MailIcon, LogOutIcon,HelpCircleIcon } from 'vue-feather-icons'
import RuleSpNav from '~/components/atoms/RuleSpNav'

export default {
  components: {
    // ShoppingCartIcon,BellIcon,SearchIcon,UserIcon, MailIcon, LogOutIcon,HelpCircleIcon,
    RuleSpNav,
  },
  mounted() {
    ;(() => {
      'use strict'

      let refOffset = 0
      const bannerHeight = 77
      const bannerWrapper = document.querySelector('.sticky-box')
      const banner = document.querySelector('.sticky-content')

      const handler = () => {
        const newOffset = window.scrollY || window.pageYOffset

        if (newOffset > bannerHeight) {
          if (newOffset > refOffset) {
            bannerWrapper.classList.remove('animateIn')
            bannerWrapper.classList.add('animateOut')
          } else {
            bannerWrapper.classList.remove('animateOut')
            bannerWrapper.classList.add('animateIn')
          }
          banner.style.background = 'var(--fff)'
          refOffset = newOffset
        } else {
          banner.style.backgroundColor = 'var(--fff)'
        }
      }

      window.addEventListener('scroll', handler, false)
    })()
  },
}
</script>
<style lang="scss" scoped>
.nav {
  // @apply ;
  @apply sticky top-0 left-0 right-0 z-30 transition-colors duration-300 ease-linear;
  background: rgba(#fff, 0.8);
  // border-bottom: 1px solid var(--eee);
  &-right {
    @apply justify-end;
  }
  &-left,
  &-right {
    @apply flex h-full items-center;
  }
}

ul {
  li {
    @apply mx-4;
    a {
      transition: all 0.25s ease;
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}

.sticky-box {
  @apply fixed w-full left-0;
  z-index: 4;
  transition: all 0.25s ease;
}
.sticky-content {
  @apply w-full flex justify-around uppercase;
  background: var(--bg);
  transition: all 0.25s ease;
}
.animateIn {
  transform: translateY(0px);
}

.animateOut {
  transform: translateY(-100%);
}
</style>
