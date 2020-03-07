function myFun() {
  var a = document.getElementById("first_name").value;
  var b = document.getElementById("last_name").value;
  var c = document.getElementById("email").value;
  var d = document.getElementById("pass").value;
  if (a == "") {
    document.getElementById("message").innerHTML = "First name cannot be empty";
    return false;
  }
  else {
    document.getElementById("message").innerHTML = "";
  }
  if (b == "") {
    document.getElementById("message2").innerHTML = "Last name cannot  be empty";
    return false;
  }
  else {
    document.getElementById("message2").innerHTML = "";
  }
  if (c == "") {
    document.getElementById("message3").innerHTML = "looks like this is not an email";
    return false
  }
  else {
    document.getElementById("message3").innerHTML = "";
  }
  if (d == "") {
    document.getElementById("message4").innerHTML = "invalid password";
    return false
  }
  else {
    document.getElementById("message4").innerHTML = "";
  }
  
}
