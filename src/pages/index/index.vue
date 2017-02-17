<template lang="html">
  <div class="">
    <SelectForm class="serverform" :selectData="serverSelectData" :selecteditem="serverSelected"  @updateSelectedItem="updateServer">
      <div class="select-item"> + Add redisserver</div>
    </SelectForm>
    <SelectForm class="dbform" v-if="show" :selectData="dbSelectData" :selecteditem="dbSelected" @updateSelectedItem="updateDb">
    </SelectForm>
    <SelectForm class="Categoryform" v-if="show" :selectData="CategorySelectData" :selecteditem="CategorySelected" @updateSelectedItem="updateCategory">
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

      keywords: '',
      keyDetailsData: {},

      selectdServer: '',
      selectedDb: '',
      selectdCategory: ''
    };
  },
  computed: {
    show: function() {
      if (this.selectdServer) {
        return true;
      }
    }
  },
  methods: {
    updateServer(e) {
      this.selectdServer = e;
      console.log(this.selectdServer);
    },
    updateDb(e) {
      this.selectedDb = e;
    },
    updateCategory(e) {
      this.selectdCategory = e;
    },
    searchKeywords() {
      console.log(this.keywords);
    }
  },
  components: {
    SelectForm,
    KeyDetailsList
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
