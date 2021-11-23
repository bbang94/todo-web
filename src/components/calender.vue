<template>
  <van-calendar
    title="日历"
    :poppable="false"
    :show-confirm="false"
    :style="{ height: '200px' }"
    :show-mark="false"
    v-model="show"
    @confirm="onConfirm"
  />
</template>

<script>
export default {
  name: "calender",
  data() {
    return {
      date: "",
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>

<style>
</style>