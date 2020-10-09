$(document).ready(function () {
  $("#myForm input").blur(function () {
    if (!$(this).val()) {
      $(this).addClass("error");
    } else {
      $(this).removeClass("error");
    }
  });
});

/** shet ako ra nagcode ani **/

function Alert() {
  var inputVal = document.getElementById("myInput").value;
  var password = document.getElementById("myInput txtPassword").value;
  var confirmPassword = document.getElementById("myInput txtConfirmPassword")
    .value;

  if (inputVal == "") {
    alert("Please fill up the missing credentials correctly.");
  }

    if (password != confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  }


var currentCallback;

// override default browser alert
window.alert = function (msg, callback) {
  $(".message").text(msg);
  $(".customAlert").css("animation", "fadeIn 0.3s linear");
  $(".customAlert").css("display", "inline");
  setTimeout(function () {
    $(".customAlert").css("animation", "none");
  }, 300);
  currentCallback = callback;
};

$(function () {
  // add listener for when our confirmation button is clicked
  $(".confirmButton").click(function () {
    $(".customAlert").css("animation", "fadeOut 0.3s linear");
    setTimeout(function () {
      $(".customAlert").css("animation", "none");
      $(".customAlert").css("display", "none");
    }, 300);
  });

  // our custom alert box
  setTimeout(function () {
    alert(
      "Welcome! This is the registration for Coronavirus News & Updates. Register now & get daily notifications from us!",
      function () {
        console.log("Callback executed");
      }
    );
  }, 500);
});
