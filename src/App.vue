<template>
    <div id="app">
        <div class="group">
            <button v-on:click="consoleClick">GET USERS</button>
            <br><br>
            <button>SET USER</button>
        </div>
        <ul>
          <table>
            <tbody>
              <li v-for="n in lst" v-bind:key="n">
                <tr>
                  <td>{{n.id}}</td>
                  <button v-on:click="clickConsole(n.id)">get user details</button>
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
    </div>
</template>


<script>

export default {
  name: 'App',

  data:()=> ({lst:[],lst2:[], showModal:false}),

  
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
      }

  }
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
    border-color:gray;
    border-style:solid;

    :hover {
        color:black;
   }
}

.button {
  border-color:none;
  border-style:solid;
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
  //box-shadow: 0 5px 5px rgba(0, 0, 0, 2.0);
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
