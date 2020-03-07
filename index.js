function myFun() {
  var a = document.getElementById("first_name").value;
  var b = document.getElementById("last_name").value;
  var c = document.getElementById("email").value;
  var d = document.getElementById("pass").value;
  if (a == "") {
    document.getElementById("message").innerHTML = "First name cannot be empty";
    return false;
  }
  if (b == "") {
    document.getElementById("message2").innerHTML = "Last name cannot  be empty";
    return false;
  }
  if (c == "") {
    document.getElementById("message3").innerHTML = "looks like this is not an email";
    return false
  }
  if (d == "") {
    document.getElementById("message4").innerHTML = "invalid password";
    return false
  }
  
}
