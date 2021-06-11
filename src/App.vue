<template>
    <div id="app">
        <div class="group">
            <button v-on:click="consoleClick">GET USERS</button>
        </div>
        <button v-on:click="insertUserForm">INSERT USER</button><br><br>
        <ul>
          <table>
            <tbody>
                <li v-for="n in lst" v-bind:key="n">
                  <tr>
                      <td>{{n.id}}
                        <button v-on:click="clickConsole(n.id)">get user details</button>
                        <button v-on:click="showUpdateForm(n.id)">update user details
                        </button>
                        <button v-on:click="deleteUser(n.id)">DELETE USER</button>
                      </td>
                  </tr>
                </li>
            </tbody>
          </table>
        </ul>
        <transition name="pop" appear>
          <div class="modal" v-if="showModal">
            <label v-for="n in lst2" v-bind:key="n">
              <p>name : {{n.name}} <br>age : {{n.age}} <br>Gender : {{n.gender}}<br></p><br>
              <button @click="showModal=false" class="button">Ok</button>
            </label>
          </div>
        </transition>
          <div class="modal2" v-if="updateModal">
            <form>
              <label>Name: </label>
              <input type="text" v-model="formName"/><br><br>

              <label>Age: </label>
              <input type="text" v-model="formAge"/><br><br>

              <label>Gender: </label>
              <input type="text" v-model="formGender"/><br><br>
              <button @click="updateUser()">update</button>
            </form>
          </div>
          <div class="modal3" v-if="insertModal">
            <form>
              <label>Name: </label>
              <input type="text" v-model="formName"/><br><br>

              <label>Age: </label>
              <input type="text" v-model="formAge"/><br><br>

              <label>Gender: </label>
              <input type="text" v-model="formGender"/><br><br>

              <button v-on:click="insertUser()">insert</button>
            </form>
          </div>
    </div>
</template>


<script>

export default {
  name: 'App',

  data:()=> ({lst:[],lst2:[], showModal:false,updateModal:false,formName:'',formAge:'',formGender:'',formId:'',insertModal:false,insertId:null,deleteModal:false}),

  
  methods: {
      consoleClick:function() {
          const request=new XMLHttpRequest();
          request.open("GET","http://localhost:5000/users/");
          request.send();
          request.onload = ()=>{
            if(request.status===200) {
              console.log(JSON.parse(request.response));
              this.lst=JSON.parse(request.response);
            }
            else {
              console.log("error")
            }
          }
      },
      clickConsole:function(id) {
        this.showModal=true
        const request=new XMLHttpRequest();
        request.open("GET","http://localhost:5000/users/"+id);
        request.send();
        request.onload = ()=>{
          if(request.status===200) {
              console.log(JSON.parse(request.response));
              this.lst2=JSON.parse(request.response);
            }
            else {
              console.log("error")
            }
        }
      },
      showUpdateForm:function(id) {
        this.updateModal=true;
        this.formId = id;
        console.log(this.formId);
        
      },
      updateUser:function() {
        const params = {
            name: this.formName,
            age: this.formAge,
            gender: this.formGender
        }
        //console.log(params)

        const http = new XMLHttpRequest();
        http.open("POST", "http://localhost:5000/users/"+this.formId);
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)); // Make sure to stringify
        console.log("updated successfully")
      },

      insertUserForm:function() {
      this.insertModal=true;
      this.formId=this._uid;
      console.log(this.formId);
      },

      insertUser:function() {
        const params = {
          name: this.formName,
          age:this.formAge,
          gender:this.formGender,
        }
        //console.log(params)

        const http = new XMLHttpRequest()
        http.open("POST", "http://localhost:5000/users/")
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) // Make sure to stringify
        console.log("inserted successfully")

      },

      deleteUser:function(id) {
        this.deleteModal=true;
        this.Id=id;
        const http = new XMLHttpRequest()
        http.open("POST", "http://localhost:5000/users/del/"+this.Id)
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify()) // Make sure to stringify
        console.log("deleted successfully")
  
      }
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:60px;
}
.group {
  margin:20px;

  .hover {
    background-color:hsl(0, 100%, 90%);
  }
}
button {
    outline:none;
    color:#2c3e50;
    border-color:black;
    //border-radius: 50%;
    border-style:solid;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    font-weight: normal;
    height: fit-content;
    width: fit-content;
    padding: 0.5rem;
    transform:none;
}

button:hover {
  background-color: hsl(0, 100%, 90%);
  //color: pink;
}

.button {
  border-color:gray;
  border-style:solid;
  color: black;
  //background-color: hsl(0, 100%, 90%);
  appearance: none;
  font: inherit;
  font-size: 1.0rem;
  padding: .5em 1em;
  border-radius: .3em;
  cursor: pointer;

  :hover {background-color:rgb(255,0,0);opacity:0.6;}
}

.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  max-width: 22em;
  padding: 2rem;
  border: 2px solid #44475C;
  color: purple;
  border-radius: 2rem;
  background-color:#FFF;
  z-index: 999;
  transform: none;
}

.modal2 {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  max-width: 22em;
  padding: 2rem;
  border: 1px solid #44475C;
  color: blue;
  border-radius: 1rem;
  background-color:#FFF;
  z-index: 999;
  transform: none;
}

.modal3 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  max-width: 22em;
  padding: 2rem;
  border: 1px solid #44475C;
  color: green;
  border-radius: 1rem;
  background-color:#FFF;
  z-index: 999;
  transform: none;
}


.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

table {
  font-family: 'Open Sans', sans-serif;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}


td {
  text-align: left;
  border: 1px solid #cecfd5;
  padding: 8px 10px;
}

tr:hover {background-color: rgba(255, 0, 0, 0.3);}


</style>
