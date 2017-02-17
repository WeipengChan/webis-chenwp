<template lang="html">
  <div class="">
    <SelectForm class="serverform" :selectData="serverSelectData" :selecteditem="serverSelected" @showDbSelectForm="showDbSelectForm">
      <div class="select-item"> + Add redisserver</div>
    </SelectForm>
    <SelectForm class="dbform" v-if="show" :selectData="dbSelectData" :selecteditem="dbSelected">
    </SelectForm>
    <SelectForm class="Categoryform" v-if="show" :selectData="CategorySelectData" :selecteditem="CategorySelected">
      <div class="select-item"> + Add category</div>
    </SelectForm>
    <div class="search">
      <input type="text" name="search" v-model="keywords" @keyup.enter="searchKeywords">
    </div>
    <ul class="key-list">
      <li></li>
    </ul>
    <KeyDetailsList class="key-details-list" :keyDetailsData="keyDetailsData"></KeyDetailsList>
  </div>
</template>

<script>
import SelectForm from './select';
import KeyDetailsList from './key-details';

export default {
  data() {
    return {
      serverSelectData: ['aitu125.35.6.35', 'ddys124.57.9', 'huaqi145.57.8'],
      serverSelected: '',

      dbSelectData: ['db0', 'db1', 'db2', 'db3'],
      dbSelected: 'db0',

      CategorySelectData: ['All Categories', 'string', 'hash', 'list'],
      CategorySelected: '',

      show: false,
      keywords: '',
      keyDetailsData: {}

    };
  },
  components: {
    SelectForm,
    KeyDetailsList
  },
  methods: {
    showDbSelectForm(e) {
      if (e === 'show') {
        this.show = true;
      }
    },
    searchKeywords() {
      console.log(this.keywords);
    }
  }
};
</script>

<style lang="css">

.serverform {
  display: inline-block;
}
.dbform {
  display: inline-block;
}

.key-details-list {
  float:right;
}
</style>
