<template>
  <div class = "container" >
       <ul class="left">
         <li v-for="item in items">
           {{ item.message }}
         </li>
       </ul>
     <div class="right">
         <button  class= "user-add-button"  v-on:click="showAddUser = !showAddUser">+ Add User</button>
         <div v-show="showAddUser === true" class = "user-add-container">
           <div><h2 class = "user-add-title">add user<h2></div>
           <div class = "user-add-body">
                 <section class = "name-div">
                   <span>Name</span>
                   <input class="name-input"/>
                 </section>
                 <section class = "email-div">
                   <span>Email</span>
                   <input class="email-input"/>
                 </section>
                 <section class = "password-div">
                   <span>Password</span>
                   <input class="password-input"/>
                  </section>
                  <section class = "confirm-div">
                      <span>Confirm</span>
                      <input class="confirm-input"/>
                  </section>
                  <section class = "servers-div">
                      <span>Servers</span>
                      <select v-model="selected" multiple>
                        <option v-for="option in options" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                     </select>
                  </section>
           <div>
            <div class = "user-add-footer">
              <button class= "user-add-confirm-button" >Add</button>
              <button class= "user-add-cancel-button" v-on:click = "showAddUser = false" >Cancel</button>
            </div>
         </div>
     </div>
  </div>
</template>

<script>

export default
{
   data()
   {
      return{
        items: [
            {message: 'User Management' },
            {message: 'Server Management' }
          ],
        showAddUser:true,
      }
   },
   method:{
      showAddUser:function()
      {

      }
   }

}

</script>

<style>
.user-add-footer button , .user-add-button, .user-add-footer select
{
    height:40px;
    width: 100px;
}
.user-add-footer
{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.user-add-body
{
   flex: 1;
   flex-direction: column;
   display: flex;
   margin-top: 50px;
}
.user-add-container  section
{
   margin-top: 20px;
   display: flex;
   justify-content: center;
}
.user-add-container  span
{
   margin-left: 40px;
   display: inline-block;
   width: 100px;
}
.user-add-container  input, .user-add-container  select
{
   margin-left: 40px;
   display: inline-block;
   width: 200px;

}

.user-add-title
{

   margin: 0px ;
   background-color: gray;
   height: 40px;
   display: flex;
   align-items: center;
   text-indent: 20px;

}

.user-add-container
{
    flex:1;
    width: 60%;
    border: 1px solid gray;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

}
.user-add-button
{
   align-self: flex-end;
}
ul
{
  padding: 10px ;

}
ul li
{
  margin:  10px 10px 10px 10px;
}
.container
{
  padding: 20px 20px 20px 20px;
  display: flex;
}
.left
{
   margin: 0px;
   border: 1px solid gray;

}
.right
{
   flex:1;
   margin-top: 0px;
   border: 1px solid gray;
   margin-left: 20px;
   display: flex;
   flex-direction: column;
}

</style>
