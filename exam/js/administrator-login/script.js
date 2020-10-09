function Alert() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("txtPassword").value;

  var adminuser = "vsarmiento";
  var adminpass = "AdminPass2020!";

  if ((username == "") | (txtPassword == "")) {
    alert("Please fill up the missing credentials correctly.");
  }

  if ((username == adminuser) | (txtPassword == adminpass)) {
    alert("Successful! Redirecting..");
    return true;
  }
}
