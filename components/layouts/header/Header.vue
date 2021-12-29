<template>
  <nav class="nav lg:h-24 shadow-reverse">
    <div
      class="hidden lg:flex relative mx-auto flex items-center py-3 h-full container px-4 md:px-0"
    >
      <div class="flex w-full items-center justify-between">
        <div class="nav-left mr-auto">
          <NuxtLink to="/" class="title-link">
            <h1 class="text-3xl font-bold">東京理科大学野球部</h1>
          </NuxtLink>
        </div>

        <div class="nav-right">
          <div class="flex items-center">
            <a v-scroll-to="{ el: '#member' }" class="mr-8" href="#member">
              MEMBERS
            </a>
            <a v-scroll-to="{ el: '#schedule' }" class="mr-8" href="#schedule">
              SCHEDULE
            </a>
            <a
              class="register"
              href="https://docs.google.com/forms/d/1FGurtbRLUHK4YMXOrRxOMiMDz8iLNsqBu1s-4vxiG9E/"
              target="_blank"
              rel="noreferrer noopener"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </div>

    <Spnav />
  </nav>
</template>

<script>
import Spnav from '~/components/atoms/spnav'

export default {
  components: {
    Spnav,
  },
}
</script>
<style lang="scss" scoped>
.nav {
  // @apply ;
  @apply sticky top-0 left-0 right-0 z-30 transition-colors duration-300 ease-linear;
  background: var(--bg);
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

.register {
  @apply inline-block rounded px-6 py-3 font-semibold;
  color: var(--fff);
  transition: 0.2s all ease;
  background: var(--primary);
  box-shadow: 0 10px 20px -10px rgba($primary, 0.5);
  &:hover {
    box-shadow: 0 20px 20px -10px rgba($primary, 0.5);
    transform: translateY(-5px);
  }
}
</style>
