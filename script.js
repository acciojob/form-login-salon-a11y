let form = document.querySelector("#form1")
form.addEventListener("submit",getFormvalue)

function getFormvalue(e) {
    //Write your code here
	e.preventDefault()
	let fname = document.querySelector('input[name="fname"]').value;
	let lname = document.querySelector('input[name="lname"]').value;
alert(fname +" " +lname)	

}
