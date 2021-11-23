<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="list.Title"
        name="标题"
        label="标题"
        placehoder="请输入事件标题"
    />
    <van-field
        v-model="list.Description"
        name="描述"
        label="描述"
    />

    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
import {createtodo} from '@/service/todo';
import {Toast} from 'vant'

export default {
  name: createtodo,
  data() {
    return {
      list: {
        UserId:5,
        Title:"",
        Description:"",
        State:0
      },
    };
  },
  methods: {
    onSubmit: function () {
      createtodo(this.list).then(()=> {
        Toast.success('增加成功')
      })
    },
  },
};
</script>

<style scoped>
</style>
