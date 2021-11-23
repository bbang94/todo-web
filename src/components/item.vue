<template>
  <div class="item" v-bind:class="item.isDone ? 'do' : 'undo'">
    <p class="lineheight"></p>
    <button class="biaozhi" v-on:click="$emit('changeisdone', item.id - 1)">
      √
    </button>
    <p class="tips">{{ item.tips }}</p>
    <!-- <br> -->
    <p class="ddl">ddl:{{ item.ddl }}</p>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["item"],
  data: function () {
    return {
      index: this.item.id,
    };
  },
};
</script>

<style scoped>
.item {
  height: 46px;
  border: solid 1px green;
  margin: 2px;
  border-radius: 3px;
}
.lineheight {
  height: 3px;
  margin: 0px;
}
.tips {
  margin: 0;
  padding: 0;
  font-weight: bold;
  /* float: left; */
}

.ddl {
  margin: 0;
  padding: 0;
  /* float: left; */
}

.biaozhi {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: solid 1px grey;
  float: left;
  margin-left: 3px;
}

.do {
  background-color: rgb(219, 218, 218);
}

.undo {
  background-color: #fff;
}

.miss {
  background-color: rgb(245, 143, 143);
}
</style>
