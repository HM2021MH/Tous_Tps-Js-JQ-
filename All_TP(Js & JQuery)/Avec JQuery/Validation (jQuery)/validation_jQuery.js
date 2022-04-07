$(document).ready(function(){
    
    $("#nom").keyup(function(){
      if(validateName()){
        // Si le nom est valide
        $("#nom").css("border","3px solid green");
        $("#nomMsg").html("Nom valide");
         $("#nomMsg").css("color","green");
        $("#nomMsg").css("font-style","italic");
      }else{
        //si le nom n'est pas valide
        $("#nom").css("border","3px solid red");
        $("#nomMsg").html("Nom invalide");
        $("#nomMsg").css("color","red");
        $("#nomMsg").css("font-style","italic");

      }
     
    });  
  });


  //Fonction de validation 
  function validateName(){
    // la valeur tapée
    var nom=$("#nom").val();
    // use reular expression
     var reg = /^(([a-zèéê]+)?(\-|')?(\s+)?([a-zèéê]+?)(\s+)?)+$/gi ;
     if(reg.test(nom)){
      return true;
     }else{
      return false;
     }

  }