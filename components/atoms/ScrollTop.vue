<template>
  <transition name="button">
    <button v-show="buttonActive" @click="returnTop" class="top-btn" aria-label="scroll window top">
      <chevron-up-icon size="2x" class="top-btn-icon"></chevron-up-icon>
    </button>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { ChevronUpIcon } from 'vue-feather-icons'

export default Vue.extend({
  components: {
    ChevronUpIcon
  },
  data() {
    return {
      buttonActive: false,
      scroll: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollWindow() {
      const top = 200 // ボタンを表示させたい位置
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.top-btn {
  @apply fixed p-3 rounded;
  @screen lg {
    bottom: 100px;
  }
  right: 30px;
  bottom: 30px;
  background: var(--primary);
  color: var(--fff);
  // border-radius: 17px;
  transition: all .25s ease;
  box-shadow: 0 10px 20px -10px rgba($primary,.5);
  &:hover {
    box-shadow: 0 20px 20px -10px rgba($primary,.5);
    transform: translateY(-5px);
  }
}

.button-enter-active,
.button-leave-active {
  transition: all 0.25s ease;
}
.button-enter,
.button-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  -o-transform: translateY(-10px);
}
</style>
