const request=new XMLHttpRequest();
request.open("GET","http://localhost:5000/users/");
request.send();
request.onload = ()=>{
	if(request.status===200) {
		console.log(JSON.parse(request,response));
	}
	else {
		console.log("error")
	}
}