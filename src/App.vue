<template>
    <div id="app">
        <div class="group">
            <button v-on:click="consoleClick">GET USERS</button>
        </div>
        <button v-on:click="insertUserForm">INSERT USER</button>
        <ul>
          <table>
            <tbody>
              <li v-for="n in lst" v-bind:key="n">
                <tr>
                  <td>{{n.id}}</td>
                  <button v-on:click="clickConsole(n.id)">get user details</button>
                  <button v-on:click="showUpdateForm(n.id)">update user details
                  </button>
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
              <button v-on:click="updateUser()">update</button>
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

  data:()=> ({lst:[],lst2:[], showModal:false,updateModal:false,formName:'',formAge:'',formGender:'',formId:'',insertModal:false,id:null}),

  
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
        console.log(id)
        this.formId = id;
        
      },
      updateUser:function() {
        //const request=new XMLHttpRequest();
        //request.open("POST","http://localhost:5000/users/"+this.formId);
        //request.send('name='+this.formName+'&age='+this.formAge+'&gender='+this.formGender);

        const params = {
            name: this.formName,
            age: this.formAge,
            gender: this.formGender
        }
        console.log(params)

        const http = new XMLHttpRequest()
        http.open('POST', "http://localhost:5000/users/"+this.formId)
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) // Make sure to stringify
        console.log(http.status)
        http.onload = function () {

          console.log(http.status)
        }
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
        console.log(params)

        const http = new XMLHttpRequest()
        http.open('POST', "http://localhost:5000/users/")
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) // Make sure to stringify
        console.log(http.status)
        http.onload = function () {

          console.log(http.status)
        }

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
  margin:10px;
}
button {
    outline:none;
    border-color:black;
    border-style:solid;
}

.button {
  border-color:none;
  border-style:none;
  color: black;
  background: white;
  appearance: none;
  font: inherit;
  font-size: 1.0rem;
  padding: .5em 1em;
  border-radius: .3em;
  cursor: pointer;
}

.modal {
  position: absolute;
  position: fixed;
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
  border-radius: 1rem;
  background: #FFF;
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
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}
table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
}
</style>
