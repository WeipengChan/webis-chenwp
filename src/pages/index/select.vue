<template lang="html">
  <div class="select-wrapper">
    <div class="select-item selected-result" >
      <span>{{selected}} </span>
      <span v-if="!fold" @click="foldForm">展开</span>
      <span v-if="fold" @click="foldForm">收起</span>
    </div>
    <slot></slot>
    <ul v-if="fold">
      <li class="select-item" v-for="item in selectData" @click="selectItem(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['selectData', 'selecteditem'],
  data() {
    return {
      selected: this.selecteditem,
      fold: false
    };
  },
  methods: {
    selectItem(item) {
      this.selected = item;
      this.$emit('showDbSelectForm', 'show');
    },
    foldForm() {
      this.fold = !this.fold;
    }
  }
};
</script>

<style lang="css" scoped>
.select-wrapper {
  border: solid 1px #eee;
  width: 200px;
}

.select-item {
  height: 50px;
  border-bottom: solid 2px #eee;
  font-size: 18px;
  color: #333;
  line-height: 50px;
  text-align: center;

  cursor: pointer;
}
</style>
