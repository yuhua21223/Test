

//alert("Its working");

//Login  System
//simply storing objects
var objPeople = [
	{ // Object @ 0 index
		username: "YuhuaWu",
		password: "Awesome"
	},
	{ // Object @ 1 index
		username: "Anthony",
		password: "JSouza"
	},
	{ // Object @ 2 index
		username: "csc317",
		password: "great"
	},

  { // Object @ 3 index
		username: "null",
		password: "null"
	}

]


  //alert("You have called function for getInfo");


function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check if the user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
  //Default to here if non of the above objects are entered
	console.log("incorrect username or password")
}

function registration(){
 if(document.getElementById('checkbox').checked){
    alert("Agreement is checked");
  }
  else{
    alert("Agreement willbe automatically checked");


  }
    console.log("You will now be registered with the information")

}

//Hide elements
function hideElement(){
console.log(document.getElementById('demo').style.display='none');

}

//enlarge documents
function enlargeElement(){

console.log(document.getElementById('demo').style.fontSize='35px');

}
