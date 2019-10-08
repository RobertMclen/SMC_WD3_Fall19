// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
function CopyFormFields()
{
    var CopyFromList = new Array( "fullName", "inputAddress1", "inputAddress2", "inputCity", "inputState", "inputZip" , "inputContry", "inputPhonenumber" );
    var CopyToList = new Array( "bfullName", "binputAddress1", "binputAddress2", "binputCity", "binputState", "binputZip", "binputContry", "binputPhonenumber" );
    for( var i=0; i<CopyFromList.length; i++ )
    {
        document.getElementById(CopyToList[i]).value = document.getElementById(CopyFromList[i]).value;
    }
}