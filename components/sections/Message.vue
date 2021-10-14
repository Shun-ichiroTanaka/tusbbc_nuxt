<template>
  <section id="message" class="w-full">

    <!-- Reshelf で変わるこれからの学び -->
    <h2 class="w-full lg:mt-16 mb-4">
      創業者の<br class="inline-block md:hidden">メッセージ
    </h2>
    <!-- Reshelfにかける思い -->
    <div class="sikumi container mx-auto flex items-center justify-center text-center">

      <div class="flex flex-col text-left px-8">
        <h3 class="sub-title mb-2">
          Reshelfにかける思い
        </h3>
        <div class="sub-body text-lg font-semibold">
          <p class="detail">
            「Reshelf」を創りたいと思った理由についてお伝えしようと思います。<br>
            私は普段から、技術のキャッチアップのため「Udemy」をはじめとした様々なオンライン学習サービスを利用しますが、
            <span class="text-re">「レビュー評価が高い教材」を購入したのに、イマイチ学べず納得できないような経験</span>が何度もあり問題を感じていました。<br>


            オンライン学習教材のヘビーユーザーである私だからこそ、
            今あるオンライン学習サービスの課題を改善し
            「<span class="text-re">信頼できるオンライン学習プラットホーム</span>」を、オンライン学習をする人たちへ届けたい。
            これが、Reshelfの立ち上げの動機でありミッションです。<br>

              Reshelfは、まだ開発前の段階で、本サービスを利用したいユーザーがどれくらいいるかを調査しています。
              この結果によって、リリースに向けた開発に入ろうと考えています。
              事前登録していただいた講師志望の方に対しては、特典も用意しています。
              少しでも「<span class="text-re">このサービス使ってみたいな</span>」と思っていただけたら、事前登録をよろしくお願いいたします！<br>

          </p>
          <p class="text-right mt-4">CEO　田中 俊一朗</p>
        </div>

        <a class="register md:hidden" href="https://forms.gle/vG8GgqDSUxjm5Pfy7" target="_blank" rel="noreferrer noopener">事前登録フォーム</a>
      </div>

    </div>

  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
section {
  @apply w-full mx-auto;
}
.box {
  @apply items-center justify-center w-full mx-auto rounded-lg;
}
.section-body {
  @apply mx-auto font-semibold;
  color: var(--86868b);
  background: var(--86868b);
}
h2 {
  @apply text-3xl font-bold text-center;
  background: var(--primary);
  color: var(--fff);
  padding: 2rem 0;
  @screen lg {
    @apply text-5xl;
    padding: 5rem 0;
  }
}
.sub-title {
  @apply font-bold text-3xl;
  // color: #F5F5F7;
  color: var(--color);
  @screen md {
    @apply text-4xl;
  }
}
.sub-body {
  color: var(--86868b);
  p {
    @screen md {
      @apply text-lg;
    }
    @apply text-base font-semibold;
  }
}
.item {
  @apply; flex-direction: column;
  img {
    @apply object-contain py-8;
    max-height: 300px;
  }
  @screen md {
    flex-direction: row;
    img {
      @apply object-contain;
      height: 400px;
      max-height: 400px;
    }
  }
  @screen lg {
    padding: 60px 0;
  }
  padding: 40px 0;
  // background: var(--f2f2f2);
  // background: var(--1d1d1d);
}
.sikumi {
  @apply; flex-direction: column;
  img {
    @apply object-contain py-8;
    max-height: 300px;
  }
  @screen md {
    flex-direction: row;
    img {
      @apply object-contain;
      height: 500px;
      max-height: 500px;
    }
  }
  @screen lg {
    padding: 80px 0;
  }
  padding: 40px 0;
  // background: var(--f2f2f2);
  // background: var(--1d1d1d);

  &-box {
    @screen md {
      width: 400px;
    }
  }
}
.reverse {

  @screen md {
    flex-direction: row-reverse;
  }
}

.detail {
  line-height: 30px;
  @screen lg {
    line-height: 40px;
  }
}

.text-re{
  color: var(--color);
  position: relative;
  border-bottom: double 6px var(--primary);
}


.register {
  @apply rounded w-2/3 mx-auto my-8 px-6 py-3 text-lg text-center font-bold;
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
