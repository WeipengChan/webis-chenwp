<template lang="html">
  <div>
    <div class="select-item selected-result" >{{selected}}</div>
    <div class="select-item">Add redisserver</div>
    <ul>
      <li class="select-item" v-for="item in selectData">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectData: ['aitu125.35.6.35', 'ddys124.57.9', 'huaqi145.57.8'],

      selected: ''
    };
  }
};
</script>

<style lang="css" scoped>
</style>
