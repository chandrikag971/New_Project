<template>
    <form class="register-style">
        <div class="col-md-9 d-flex justify-content-center align items-center">
            <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
                <label class="col-form-label"><b>First Name</b><span class="text-danger">* </span></label>
                <input type="text" class="form-control">
			</div><br>
			<div class="col-form-group">
				<label class="col-form-label"><b>Last Name</b><span class="text-danger">* </span></label>
				<input type="text" class="form-control">
			</div><br>
			<div class="col-form-group">
				<label class="col-form-label"><b>E-mail</b><span class="text-danger">* </span></label>
				<input type="text" class="form-control">
			</div><br>
			<div class="col-form-group">
				<label class="col-form-label"><b>Password</b><span class="text-danger">* </span></label>
				<input type="password" class="form-control">
			</div><br>
			<div class="col-form-group">
				<label class="col-form-label"><b>D.O.B</b><span class="text-danger">* </span></label>
				<form action="/action_page.php">
					<label for="birthday"></label>
					<input type="date" id="birthday" name="birthday">
					<input type="submit">
				</form>
			</div>
			<div class="col-form-group text-center"><br>
				<button class="btn btn-vue primary">Register</button>
			</div>
		</div>
	</form>
</template>
<script>
export default {
	
};
</script>
<style>
.btn-vue {
	background:#53B985;
	color: #31485D;
}
.register-style {
	border:2px solid #44475C;
	padding: 2rem;
	width:fit-content;
	height:fit-content;
	margin-left:0;
	margin: auto;
}
</style>