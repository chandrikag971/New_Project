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
    </div>
</template>


<script>

export default {
  name: 'App',

  data:()=> ({lst:[],lst2:[]}),

  
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
    border-color:black;
    border-style:solid;

    :hover {
        color:black;
   }
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
