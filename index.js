function myFun() {
  var a = document.getElementById("first_name").value;
  var b = document.getElementById("last_name").value;
  var c = document.getElementById("email").value;
  var d = document.getElementById("pass").value;
  if (a == "") {
    document.getElementById("message").innerHTML = "First name cannot be empty";
    document.getElementById("first_name").style.border =
      "1px solid hsl(0, 100%, 74%)";
    return false;
  } else if (a == "fill") {
    document.getElementById("message").innerHTML = "";
  } else {
    document.getElementById("message").innerHTML = "";
    document.getElementById("first_name").style.border ="";
  }
  if (b == "") {
    document.getElementById("message2").innerHTML =
      "Last name cannot  be empty";
    document.getElementById("last_name").style.border =
      "1px solid hsl(0, 100%, 74%)";

    return false;
  } else if (b == "fill") {
    document.getElementById("message2").innerHTML = "";
  } else {
    document.getElementById("message2").innerHTML = "";
    document.getElementById("last_name").style.border = "";

  }
  if (c == "") {
    document.getElementById("message3").innerHTML =
      "looks like this is not an email";
    document.getElementById("email").style.border =
      "1px solid hsl(0, 100%, 74%)";

    return false;
  } else if (c == "fill") {
    document.getElementById("message3").innerHTML = "";
  } else {
    document.getElementById("message3").innerHTML = "";
    document.getElementById("email").style.border = "";

  }
  if (d == "") {
    document.getElementById("message4").innerHTML = "password cannot be empty";
    document.getElementById("pass").style.border =
      "1px solid hsl(0, 100%, 74%)";

    return false;
  } else if (d == "fill") {
    document.getElementById("message4").innerHTML = "";
    document.getElementById("message4").innerHTML = "invalid password";

  } else {
    document.getElementById("message4").innerHTML = "";
    document.getElementById("pass").style.border = "";

  }
}
