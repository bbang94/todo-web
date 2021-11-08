<template>
  <div class="home">
    <s-header :name="home" :back="'/home'"></s-header>
    <div>
      <van-calendar
          title="日历"
          :poppable="false"
          :show-confirm="false"
          :style="{ height: '200px' }"
          :show-mark="false"
          v-model="show"
          @confirm="onConfirm"
      />
    </div>
    <div>
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item"/>
      </van-list>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      date: '',
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    //日期格式化函数
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    //TODO: 点击日历日期查询操作
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>

<style lang="less">
</style>
