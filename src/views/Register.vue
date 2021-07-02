<template>
  <div class="register">
    <div class="alert" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
          Registration successful.<small>waiting for redirect to login page.</small>
          <loading-component width="20"></loading-component>
      </div><br><br>
    <div>
      <form class="register-style" @submit.prevent="handleSubmit">
          <div class="col-md-9">
              <div class="col-md-8">
                  <label class="col-form-label"><b>FirstName</b><span class="text-danger"> * </span>
                      <input name="FirstName" v-model="FirstName" type="text" class="form-control" required>
                  </label>
              </div><br>
              <div class="col-form-group">
                <label class="col-form-label"><b>LastName</b><span class="text-danger"> * </span>
                  <input name="LastName" v-model="LastName" type="text" class="form-control" required>
                </label>
              </div><br>
              <div class="col-form-group">
                <label class="col-form-label"><b>email</b><span class="text-danger">* </span>
                  <input name="email" type="email" class="text-danger" placeholder="username@gmail.com" required v-model="email" @blur="validateEmail">
                </label>
                <div class="text-danger"></div>
              </div><br>
              <div class="col-form-group">
                <label class="col-form-label"><b>password</b><span class="text-danger">* </span>
                  <input name="password" v-model="password" type="password" class="form-control" id="password" required>
                </label>
                <div v-if= "password.length>1 && password.length<6" class="text-danger">password length should be greater than 6</div>
              </div><br>
              <div class="col-form-group">
                <label class="col-form-label"><b>Confirm Password</b><span class="text-danger">* </span>
                  <input name="password" v-model="password_confirm" type="password" class="form-control" id="password2" required>
                </label>
              </div><br>
              <div class="col-form-group">
                <label class="col-form-label"><b>DateOfBirth</b><span class="text-danger">* </span>
                  <label for="birthday"></label>
                  <input name="DateOfBirth" v-model="DateOfBirth" type="date" id="birthday" required>
                </label>
              </div>
              <div class="col-form"><br>
                <button v-on:click="register">Register</button>
                <button class="btn" disabled v-if="isLoggingIn"><loading-component width="20"></loading-component></button>
              </div>
          </div>
      </form>
    </div>
  </div>
</template>
<script>
import LoadingComponent from '../components/LoadingComponent'
export default {
  components: { LoadingComponent },
    data() {
        return {
            FirstName:'',
            LastName:'',
            email: '',
            password: '',
            password_confirm:'',
            DateOfBirth:'',
            isLoggingIn: false,
            isAlertShow: false
        }
    },
	//data:()=>({FirstName:'',LastName:'',email:'',password:'',DateOfBirth:''}),

    methods: {
        register:function() {
          this.isLoggingIn = true

          setTimeout(() => {
            this.isLoggingIn = false
            this.isAlertShow = true
            setTimeout(() => this.redirect(),1000)
          }, 1000)
            const params = {
                FirstName: this.FirstName,
                LastName: this.LastName,
                email:this.email,
                password:this.password,
                password_confirm:this.password_confirm,
                DateOfBirth:this.DateOfBirth
            }
            console.log(params);
            const http = new XMLHttpRequest();
            http.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                console.log("checking");
                alert(http.responseText);
                console.log(this.responseText);
              }
            };
            http.open("POST", "http://localhost:5000/register",true);
            http.setRequestHeader('Content-type', 'application/json');
            http.send(JSON.stringify(params)); // Make sure to stringify
            //alert("user registered successfully");
            //console.log("check this");
            //console.log(http.response);
            console.log(this.LastName);
        },
        handleSubmit:function() {
          console.log("submitted");
        },
        redirect() {
          this.$router.push({name: 'Login'})
        }
    }
}
</script>
<style>
.register {
    background-color:#7FFFD4;
    height:100%;
}
.btn-vue {
	background:#53B985;
	color: #31485D;
}
.register-style {
	text-align:left;
	border:2px solid #44475C;
	padding: 2rem;
	width:300px;
	height:100%;
	display: inline-block;
	//margin-left:0;
	//margin: auto;
  background-color:lightblue;
  color:blue;
}
.col-form {
		text-align:center;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: blue;
}
input {
  margin: 0px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  width:250px;

}
input[type=text]:focus {
  background-color: lightblue;
}
</style>