<template>
  <div class="home">
    <s-header :name="home" :back="'/home'"></s-header>
    <div id="app">
      <van-calendar
          color="#009900"
          title="日历"
          :row-height="34"
          :poppable="false"
          :show-confirm="false"
          :style="{ height: '300px' }"
      />
      <!--      <div>{{ list }}</div>-->
      <!--      <button @click="println">123</button>-->
      <div class="content">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
          <div v-for="(item, index) in list" :key="index">
            <van-card
                :desc="item.Description"
                :title="item.Title"
                centered="true">
              <template #tags>
                <p class="name">{{ item.UpdatedAt }}</p>
              </template>
            </van-card>
          </div>
        </van-list>
      </div>
      <van-button icon="plus" type="primary" @click="add_event"/>
    </div>
  </div>
</template>

<script>
import {todolist} from '@/service/todo';
import {useRouter} from 'vue-router'

export default {
  name: "App",
  data: function () {
    return {
      defaultListQuery: {
        UserId: parseInt(localStorage.getItem('userid')),
        Title: '',
        Description: '',
        State: 0,
      },
      list: [],
      loading: false,
      finished: false,
      router: useRouter()
    };
  },
  created: function () {
    this.querylist();
  },

  methods: {
    querylist: function () {
      todolist(this.defaultListQuery).then((response) => {
        this.list = response
      })
    },
    add_event: function () {
      this.router.push("/createtodo")
    }
  },
};
</script>

<style>
</style>
