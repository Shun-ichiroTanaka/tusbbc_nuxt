<template>
  <nav class="nav lg:h-24 shadow-reverse">
    <div class="hidden lg:flex relative mx-auto flex items-center py-3 h-full container px-4 md:px-0">
      <div class="flex w-full items-center justify-between">
        <div class="nav-left mr-auto">
          <NuxtLink to="/" class="title-link">
            <h1><img src="https://res.cloudinary.com/reshelf/image/upload/v1619871156/Logo_pfuaao.svg" alt="Reshelf Logo" width="150" height="50" class="responsive"></h1>
          </NuxtLink>
        </div>

        <div class="nav-right">
          <div class="flex items-center">
            <a class="mr-8" href="#mission" v-scroll-to="{el:'#mission'}">サービスの仕組み</a>
            <a class="mr-8" href="#qa" v-scroll-to="{el:'#qa'}">Q＆A</a>
            <a class="mr-8" href="#message" v-scroll-to="{el:'#message'}">創業者のメッセージ</a>
            <a class="register" href="https://forms.gle/vG8GgqDSUxjm5Pfy7" target="_blank" rel="noreferrer noopener">事前登録フォーム</a>
          </div>
        </div>
      </div>
    </div>

    <Spnav/>
  </nav>
</template>

<script>
import Logo from '~/components/Logo'
import Spnav from '~/components/atoms/spnav'

export default {
  components: {
    Logo,
    Spnav,
  },
}
</script>
<style lang="scss" scoped>
.nav {
  // @apply ;
  @apply sticky top-0 left-0 right-0 z-30 transition-colors duration-300 ease-linear;
  background: var(--fcfcfc);
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
      transition: all .25s ease;
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}


.register {
  @apply inline-block rounded px-6 py-3 font-semibold;
  color: var(--fff);
  transition: .2s all ease;
  background: var(--primary);
  box-shadow: 0 10px 20px -10px rgba($primary,.5);
  &:hover {
    box-shadow: 0 20px 20px -10px rgba($primary,.5);
    transform: translateY(-5px);
  }
}
</style>
