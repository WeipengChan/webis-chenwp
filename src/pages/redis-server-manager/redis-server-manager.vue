<template>
  <div id="background-div">
    <p class="title">New Connection</p>
    <div class = "rowContainer">
        <button class="tab-bar-button">Connection</button>
        <button class="tab-bar-button">SSL</button>
        <button class="tab-bar-button">SSH</button>
        <button class="tab-bar-button">Advanced Option</button>
    </div>
    <div  class = "rowContainer">
        <button class="tab-bar-button">Connection</button>
        <textarea class="tab-bar-button">Connection</textarea>

            <button class="tab-bar-button">Connection</button>

    </div>
  </div>

</template>

<style>
  /*在这里写css*/
  /*需要引入的图片放在assets文件中*/
   #background-div /*背景*/
   {
      background-color: green;
      width: 800px;
      height:1000px;
   }
   .rowContainer
   {  display: flex;
      flex-direction: row;
      margin-left: 15px;
      margin-right: 15px;
      margin-top: 15px;
   }


   .title{ color: white;      margin-left: 15px;}
   .tab-bar-button{ flex: 1; height:40px;}
</style>

<script>
export default {


}
</script>
