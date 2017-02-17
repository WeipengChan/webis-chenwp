<template>
  <div id="background-div">
    <p class="title">New Connection</p>
    <div class = "row-container">
        <button class="tab-bar-button">Connection</button>
        <button class="tab-bar-button">SSL</button>
        <button class="tab-bar-button">SSH</button>
        <button class="tab-bar-button">Advanced Option</button>
    </div>
    <div  class = "row-container">
        <button class="left-button">Connection</button>
        <textarea class="content">Connection</textarea>
           <span class = "column-container">
             <button class="tab-bar-button">Add</button>
             <button class="tab-bar-button">Remove</button>
             <button class="tab-bar-button">AutoDetect</button>
           </span>

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
   .column-container
   {
      display: flex;
      margin-left: 15px;
      margin-right: 15px;
      flex-direction: column;

   }
   .row-container
   {  display: flex;
      flex-direction: row;
      margin-left: 15px;
      margin-right: 15px;
      margin-top: 15px;
      justify-content: space-between;
   }


   .title{ color: white;      margin-left: 15px;}
   .tab-bar-button{ flex: 1; height:40px; margin-right: 5px;}
   .left-button{ flex: 1; height:40px; margin-right: 15px;}
   .content{ flex: 1; height:240px; margin-right: 15px;}

</style>

<script>
export default {


}
</script>
