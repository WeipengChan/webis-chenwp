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
    <div class="search"></div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
import SelectForm from './select';

export default {
  data() {
    return {
      serverSelectData: ['aitu125.35.6.35', 'ddys124.57.9', 'huaqi145.57.8'],
      serverSelected: '',

      dbSelectData: ['db0', 'db1', 'db2', 'db3'],
      dbSelected: 'db0',

      CategorySelectData: ['All Categories', 'string', 'hash', 'list'],
      CategorySelected: '',

      show: false

    };
  },
  components: {
    SelectForm
  },
  methods: {
    showDbSelectForm(e) {
      if (e === 'show') {
        this.show = true;
      }
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
</style>
