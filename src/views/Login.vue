<template>
    <form class="form-style">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"><b>Email address: </b></label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"><br>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div><br>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"><b>Password: </b></label>
            <input type="password" class="form-control" id="exampleInputPassword1"><br><br>
        </div>
        <div class="mb-3">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div class="col-form-group text-center"><br>
			<button class="btn btn-vue primary">Signin</button>
		</div>
    </form>
</template>
<script>
export default {
	
}
</script>
<style>
.form-style {
	border:2px solid #44475C;
	padding: 2rem;
	width:fit-content;
	height:fit-content;
	margin-left:0;
	margin: auto;

	.mb-3 {
		.form-text {
			font-size: 0.5rem;
		}
		.form-check-label {
			align:left;
		}
	}
}

</style>