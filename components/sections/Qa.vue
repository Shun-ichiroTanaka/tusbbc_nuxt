<template>
  <section id="qa" class="w-full">

    <h2 class="w-full lg:mt-16 mb-4">
      Q&A
    </h2>

    <div class="section-body">

      <div class="text-lg">
        <vs-collapse>

          <!-- 教材分野はプログラミングだけ？ -->
          <vs-collapse-item>
            <div slot="header">
              教材分野はプログラミングだけ？
            </div>

            <div class="text-base">
              <p>サービスリリース当初の教材分野は、プログラミング分野を想定しております。</p>
              <p>リリース後、プログラミング以外の分野の教材を公開できるように対応してまいりますので、何卒よろしくお願いいたします。</p>
            </div>
          </vs-collapse-item>


          <!-- なぜ低評価教材を非公開にするの？ -->
          <vs-collapse-item>
            <div slot="header">
              教材のアップデートとは？
            </div>

            <div class="text-base">
              <p>オンライン学習教材の約30%が、3.5以下(5段階評価)の教材です(Reshelf調べ)。</p>
              <p>そういった評価の教材をサービス上でチェックし改善を促し、改善が見られない場合は非公開にすることで、サービス上に質の良い教材だけが残るようにします。</p>
              <p>価値のある教材だけが残り続けるため、教材を作成した講師は優秀な信頼できる講師である証明となり、生徒は安心して教材を購入することができます。</p>
            </div>
          </vs-collapse-item>

          <!-- 教材の値段を教えて -->
          <vs-collapse-item>
            <div slot="header">
              教材の販売価格を教えて？
            </div>

            <div class="text-base">
              <p>教材の値段は3000円・5000円・7500円・1万円の4つの選択肢の中から、講師が選択します。</p>
              <p>教材の公開申請が通ったら、教材が販売されます。</p>
            </div>
          </vs-collapse-item>

          <!-- 講師の販売手数料を詳しく教えて -->
          <vs-collapse-item>
            <div slot="header">
              教材の販売手数料は？
            </div>
            <div class="text-base">
              <p>Reshelf上で販売される講師の教材に対しての手数料は25%です。</p>
              <p>クーポンを使用した場合の販売手数料は5%となります。クーポンについては一つ下の質問をご参照ください。</p>
            </div>
          </vs-collapse-item>

          <!-- クーポンとかある？ -->
          <vs-collapse-item>
            <div slot="header">
              クーポンはある？
            </div>
            <div class="text-base">
              <p>御座います。</p>
              <p>講師は、自分が出した1教材に1度だけ、3日間限定のクーポンを発行することができます。</p>
              <p>1度使ってしまうとその教材に対しクーポンは利用できなくなります。</p>
              <p>クーポンを使用して生徒が教材を購入した場合、教材の手数料は5%となります(通常販売は25%)。</p>
            </div>
          </vs-collapse-item>

          <!-- マンスリーセールとは？ -->
          <vs-collapse-item>
            <div slot="header">
              セールはある？
            </div>
            <div class="text-base">
              <p>御座います。</p>
              <p>月に一度のマンスリーセールを予定しています。</p>
              <p>セールは、サービス上の全ての教材が定価の50%で販売されます。</p>
              <p>講師が割引率を決めることはできませんのでご了承ください。</p>
            </div>
          </vs-collapse-item>

        </vs-collapse>
      </div>

    </div>
  </section>
</template>
<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
}
</script>
<style lang="scss" scoped>
section {
  @apply w-full mx-auto;
}
.section {
  &-title {
    width: 400px;
  }
  &-body {
    @apply mx-auto font-semibold py-12;
    color: var(--86868b);
    @screen lg {
      max-width: 800px;
    }
  }
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
</style>
