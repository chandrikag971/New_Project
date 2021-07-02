<template>
    <div  class="login">
      <div class="alert" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
          Login successful.<small>waiting for redirect.</small>
          <loading-component width="20"></loading-component>
      </div><br><br>
        <form class="form-style">
          <h2>Login Forum</h2>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"><b>Email address: </b><br>
                    <input type="email" class="text-danger" id="exampleInputEmail1" required aria-describedby="emailHelp" placeholder="username@gmail.com" name="email" v-model="email" @blur="validateEmail"><br>
                </label>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div><br>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"><b>Password: </b><br>
                    <input type="password" name="password" v-model="password" id="exampleInputPassword1" class="text-danger" required><br><br>
                </label>
            </div>
            
            <div class="col-form-group text-center"><br>
                <button class="btn" v-on:click="login" v-if="!isLoggingIn" type="submit">Signin</button>
                <button class="btn" disabled v-if="isLoggingIn"><loading-component width="20"></loading-component></button>
            </div>
        </form>
    </div>
</template>
<script>
import LoadingComponent from '../components/LoadingComponent'
export default {
    components: { LoadingComponent },
    data() {
        return {
            email: '',
            password: '',
            isLoggingIn: false,
            isAlertShow: false
        }
    },
    methods: {
        login:function() {
          this.isLoggingIn = true
          const params = {
            email:this.email,
            password:this.password
          }

          var rd = this.redirect;

          setTimeout(() => {
            this.isLoggingIn = false
          }, 1000)
          console.log(this.email);
          const http = new XMLHttpRequest();
          if(this.email != "" && this.password != "") {
             http.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                //console.log("checking");
                this.isAlertShow = true
                alert(http.response);
                if (this.response == "successfully authenticated"){
                   rd()
                }
               
              }
            };
            http.open("POST", "http://localhost:5000/login",true);
            http.setRequestHeader('Content-type', 'application/json');
            http.send(JSON.stringify(params));
          }
          else {
            console.log("A username and password must be present");
          }
        },
        redirect() {
          this.$router.push({name:'users'})
        }
       
    }
}
</script>
<style>
  .login {
    background-color:lightblue;
    height:566px;
    width:100%;
  }
  .widget {
    margin: 0;
    height: unset;
    position: absolute;
    right:10px;
    top:0;
    margin:0px;
  }
  .alert {
    background-color:#4CAF50;
    padding:8px 10px;
    border:none;
    color:#fff;
    width:300px;
    height:fit-content;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    opacity:0;

  }
.form-style {
	border:2px solid #44475C;
	padding: 2rem;
	width:fit-content;
	height:fit-content;
	//margin-left:0;
	margin: auto;
  background-color:#7FFFD4;
  color:blue;
}
.text-center1 {
  color:#4CAF50;
  font-size:30px;
  //background-color:#4CAF50;
}
.mb-3 {
	text-align:left;
}
.form-check-label {
	background-color:none;
	color:blue;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  //border-radius:30px;
}

</style>