<template>
  <section id="member" class="w-full flex flex-col items-center">
    <h2 class="w-full lg:mt-16 mb-4" data-aos="fade-down">MEMBERS</h2>

    <div class="section-body px-4 lg:px-0" data-aos="fade-down">
      <table class="styled-table">
        <thead>
          <tr class="hidden lg:table">
            <th style="width: 116px">位置/役職</th>
            <th style="width: 116px">氏名</th>
            <th style="width: 261px">学部学科</th>
            <th style="width: 59px">学年</th>
            <th style="width: 59px">投打</th>
            <th style="width: 59px">身長</th>
            <th style="width: 59px">体重</th>
            <th style="width: 175px">出身校</th>
            <th style="width: 74px">背番号</th>
          </tr>
          <tr class="table lg:hidden w-full">
            <th class="position">位置/役職</th>
            <th class="name">氏名</th>
            <th class="grade">学年</th>
            <th class="from">出身校</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member" class="hidden lg:table">
            <td style="width: 116px">{{ member.position }}</td>
            <td style="width: 116px">{{ member.name }}</td>
            <td style="width: 261px">{{ member.faculty }}</td>
            <td style="width: 59px">{{ member.grade }}</td>
            <td style="width: 59px">{{ member.arm }}</td>
            <td style="width: 59px">{{ member.height }}</td>
            <td style="width: 59px">{{ member.weight }}</td>
            <td style="width: 175px">{{ member.from }}</td>
            <td style="width: 74px">{{ member.number }}</td>
          </tr>
          <tr
            v-for="member in members"
            :key="member"
            class="table lg:hidden w-full"
          >
            <td class="position">{{ member.position }}</td>
            <td class="name">{{ member.name }}</td>
            <td class="grade">{{ member.grade }}</td>
            <td class="from">{{ member.from }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import Member from '@/util/tusbbc_member.json'
export default {
  data() {
    return {
      members: Member,
    }
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
    @apply w-full flex justify-center mx-auto lg:py-4 container;
    // color: var(--86868b);
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

.styled-table {
  @apply rounded px-2 lg:px-0 w-full;
  border: 1px solid #dddddd;
  font-size: 0.9rem;
  thead tr {
    @apply w-full;
    background-color: var(--ddd);
    // color: var(--86868b);
    color: var(--color);
    text-align: left;
    th {
      @apply w-1/4 lg:w-auto;
    }
  }
  th,
  td {
    padding: 12px 15px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
    &:nth-of-type(even) {
      background-color: #f3f3f3;
    }
    &:last-of-type {
      border-bottom: 2px solid var(--primary);
    }
    .active-row {
      font-weight: bold;
      color: var(--primary);
    }
  }
}

.position {
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100px !important;
  }
  @media screen and (min-width: 360px) and (max-width: 767px) {
    width: 80px !important;
  }
  @media screen and (max-width: 360px) {
    width: 60px !important;
  }
}
.name {
  @media screen and (min-width: 767px) and (max-width: 1024px) {
    width: 200px !important;
  }
  @media screen and (min-width: 360px) and (max-width: 767px) {
    width: 140px !important;
  }
  @media screen and (max-width: 360px) {
    width: 120px !important;
  }
}
.grade {
  @media screen and (max-width: 1024px) {
    width: 50px !important;
  }
  @media screen and (max-width: 360px) {
    width: 30px !important;
  }
}
.from {
  @media screen and (min-width: 767px) and (max-width: 1024px) {
    width: 200px !important;
  }
  @media screen and (min-width: 360px) and (max-width: 767px) {
    width: 140px !important;
  }
  @media screen and (max-width: 360px) {
    width: 120px !important;
  }
}
</style>
