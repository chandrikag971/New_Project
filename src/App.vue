<template>
  <div id="app">
      <Nav />

      
  </div>
  
  
</template>


<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',

  components: {
    Nav,
  },
  data() {
    return {
      user: null,lst:[]
    }
  },
  async created() {
      const request=new XMLHttpRequest();
      request.open("GET","http://localhost:5000/users/",true);
      request.send();
      request.onload = ()=>{
        if(request.status===200) {
          console.log(JSON.parse(request.response));
          //this.lst=JSON.parse(request.response);
          this.user=1;
        }
        else {
          this.user=0
          //console.log("error")
        }
      } 
  }
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: blue;
  background-color:pink;
  //height:650px;
  //width:100%;
}
.form-inline {
  text-align:right;
  //margin:0px;
  height:100%;
  width:100%;
  color:blue;
  //background-color:violet;
}
.form {
  font-size:50px;
}
.form2 {
  //background-color:gray;
  color:blue;
  height:100px;
  width:100%;
  font-size:30px;
}
#nav {
  padding: 30px;
  background-color:#00CED1;
  height:20px;

  a {
    font-weight: bold;
    

    &.router-link-exact-active {
      color: green;
    }
  }
}


</style>
