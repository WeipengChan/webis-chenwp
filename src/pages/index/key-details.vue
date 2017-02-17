<template lang="html">
  <div>
    <div>
      <span class="label">Hash:</span>
      <div class="">{{keyDetailsData.hash}}</div>
      <span class="label">Size:{{keyDetailsData.size}}</span>
      <span class="ttl">TTL:{{keyDetailsData.ttl}}</span>
    </div>
    <div>
      <ul>
        <li>
          <span>row</span>
          <span>key</span>
          <span>value</span>
        </li>
        <li v-for="item in keyDetailsData.details">
          <span>{{item.row}}</span>
          <span>{{item.key}}</span>
          <span>{{item.value}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script >
export default {
  props: {
    keyDetailsData: {
      // type: Object,
      required: true
    }
  },
  data() {
    return {}
  }
};
</script>
<style lang="css" scoped>

</style>
