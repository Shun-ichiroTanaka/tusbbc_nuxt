<template>
  <div class="hero">
    <div class="hero-body flex-col-reverse md:flex-row">
      <div
        class="
          flex
          lg:w-1/2
          flex-col
          items-center
          md:items-start
          justify-center
        "
      >
        <div class="hero-left lg:pr-16">
          <div class="">
            <p class="hero-title text-left mt-8 md:mt-0">
              これからの
              <br />
              学びのパートナー
            </p>
            <p class="hero-title-sub mt-2 md:mt-0">
              Reshelfは、プログラミング学習教材のマーケットプレイスです。
              <br class="hidden lg:inline" />
              生徒による教材評価から教材を循環し、専門知識のある講師と生徒をつなぐプラットホームを体験できます。
            </p>
          </div>
        </div>
      </div>

      <div
        class="relative lg:w-1/2 flex items-center justify-center pl-4 lg:pl-0"
      >
        <img
          class="hero-img hidden sm:block"
          src="https://res.cloudinary.com/reshelf/image/upload/v1619871156/hero_s6h2d6.svg"
          width="640"
          height="475"
          alt="Reshelf hero content img"
        />
        <img
          class="hero-img block sm:hidden"
          src="https://res.cloudinary.com/reshelf/image/upload/v1619871156/full-hero_iwwimh.svg"
          width="640"
          height="475"
          alt="Reshelf hero content img"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.hero {
  @apply relative w-full;
  background: var(--fcfcfc);
  &-body {
    @apply px-8 py-12;
    @apply flex justify-between mx-auto;
    @screen md {
      padding: 6.7%;
      padding-right: 0;
    }
  }
  &-title {
    @apply font-bold;
    font-size: 40px;
    @screen lg {
      font-size: 60px;
    }
    @media screen and (max-width: 370px) {
      @apply text-3xl;
    }
    &-sub {
      @apply font-semibold text-base;
      color: var(--86868b);
      @screen md {
        @apply text-xl;
      }
    }
  }
  &-img {
    @apply w-full;
    @screen md {
      @apply pr-0;
    }
    @media screen and (max-width: 1280px) {
      // max-height: 200px !important;
    }
  }
}

.mouse {
  a {
    position: absolute;
    bottom: 0px;
    left: 50%;
    z-index: 2;
    display: inline-block;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-decoration: none;
  }
  a {
    padding-top: 60px;
  }
  a span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 30px;
    height: 50px;
    margin-left: -15px;
    border: 2px solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
  }
  a span::before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    -webkit-animation: sdb 2s infinite;
    animation: sdb 2s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb {
    0% {
      -webkit-transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      -webkit-transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
