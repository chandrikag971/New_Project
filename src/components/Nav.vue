<template>
	<nav class="navbar navbar-expand navbar-light">
		<div id="nav">
			<div class="example">
			<router-link class="navbar-brand" to="/" >Home</router-link>
			</div>
			<div class="example" v-if="user!=0">
				<form class="form-inline my-2 my-lg=0">
					<router-link class="nav-link" to="/login" >Login</router-link>
					<router-link class="nav-link" to="/register">Register</router-link>
				</form>
			</div>
			<div class="example" v-if="user">
				<form class="form-inline my-2 my-lg=0">
					<a href="javascript:void(0)" @click="handleClick" class="nav-link">Logout</a>
				</form>
			</div>
		</div>
	</nav>
	<router-view/>

</template>

<script>

	export default {
		name:'Nav',
		props: ['user'],
		methods: {

			handleClick:function() {
				console.log("check");
				this.$router.push('/');
			}
		}
	}
</script>
<style scoped>
.example {
	text-align:left;
	margin:auto;
	height:100%;
	width:100%;
}

</style>