<template>
	<div class="check">
		<h3 v-if="!user">Hi</h3>
		<h3 v-if="user">You are not logged in!</h3>
	</div>
</template>

<script>

	export default {
		name:'Home',
		//props: ['user'],

		data() {
			return {
				lst:[],user:null
			}
		},

		async created() {
			const request=new XMLHttpRequest();
			request.open("GET","http://localhost:5000/users/",true);
			request.send();
			request.onload = ()=>{
				if(request.status===200) {
					console.log(JSON.parse(request.response));
					this.lst=JSON.parse(request.response);
					this.user=this.lst.length;
					//this.user=JSON.parse(request.response);
					console.log(this.user);
				}
				else {
					this.user=0
					//console.log("error")
				}
			}	
		}
	}

</script>
<style scoped>

.check {
	color:#808000;
	background-color:pink;
	height:541px;

}

</style>