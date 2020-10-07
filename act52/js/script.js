
    $(document).ready(function() {
      $('#myForm input').blur(function() {
        if (!$(this).val()) {
          $(this).addClass("error");
        } else {
          $(this).removeClass("error");
        }
      });
    });


function Alert(){
   var inputVal = document.getElementById("myInput").value;
  var inputVal2 = document.getElementById("label").value;
  if(inputVal=="" | label==""){
    alert('Please fill up the credentials correctly.');
  }
  else{
    alert('Thank you for submitting your invoice! Have a blessed day! :)');
  }
}
