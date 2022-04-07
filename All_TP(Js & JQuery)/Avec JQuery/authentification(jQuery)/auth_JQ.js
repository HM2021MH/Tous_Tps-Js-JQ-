
// Verification mot de passe
$(document).ready(function(){ 
$("#pass2").hide();  
$("#label").hide();  
$("#Msg2").hide(); 
$("#btn").prop('disabled',true);

    $("#pass1").keyup(function(){
      if(validatePass()){
        // Si le nom est valide
        $("#pass1").css("border","4px solid green");
        $("#Msg1").html("valide");
         $("#Msg1").css("color","green");
        $("#Msg1").css("font-style","italic");
       
   
      }else{
        $("#pass1").css("border","4px solid red");
        $("#Msg1").html("* Must be 8 characters <br>including  one uppercase letter,<br>  one special character <br> and alphanumeric characters");
        $("#Msg1").css("color","red");
        $("#Msg1").css("font-style","italic");
       

      }
    });
  });
  //Fonction de validation 
  function validatePass(){
    // la valeur tapée
    var pass=$("#pass1").val();
    // use reular expression
     var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/gi ;

     if(reg.test(pass)){
        $("#pass2").show();
        $("#label").show();
        $("#Msg2").show();  
      return true;
     }else{
      $("#pass2").hide();  
      $("#label").hide(); 
      $("#Msg2").hide(); 

      return false;
     }

  }
///------------------------------------------------------------------------------
/// Verification de la confirmation du mot de passe
$(document).ready(function(){
  $("#pass2").keyup(function(){
     if(validatePass()){
      if($("#pass1").val()== $("#pass2").val())
      {
        $("#pass2").css("border","4px solid green");
        $("#Msg2").html("compatible");
         $("#Msg2").css("color","green");
        $("#Msg2").css("font-style","italic");
         $("#btn").prop("disabled",false);
       
      }else {

        $("#btn").prop("disabled",true);
         $("#pass2").css("border","4px solid red");
        $("#Msg2").html("incompatible");
        $("#Msg2").css("color","red");
        $("#Msg2").css("font-style","italic");


          }

      }
    });
  });


///---------------------------------------------------------------------------------
/// Stocage des données
function signup(event){
    event.preventDefault();

var user=$("#userNew").val();
var mdp=$("#pass1").val();


var utilisateur={
    user:user,
    password:cryptPass(mdp)
};
localStorage.setItem(user,JSON.stringify(utilisateur));
console.log('utilisateur ajoute');
location ="auth_JQuery.html";
}


///------------------------------------------------------
/// Recupération des données pour l'authentification
function login(event)
{
    event.preventDefault();
    var User=$("#user").val();
    var pass=$("#pass").val();
 
    var utilisateur=localStorage.getItem(User);
    var data=JSON.parse(utilisateur);
if(!utilisateur) alert("Informatrions incorrectes"); 
else 
{
 if((User==data.user)&&(cryptPass(pass)==data.password))  alert("Vous êtes connecté");
 else alert("Mot de passe incorrect");
}
console.log(data);

}

///---------------------------------------------------------------------------------
/// Fontion pour hasher le mot de passe
const cryptPass = function(str) {
    const hs=[0xdeadbeef ^ 0,0x41c6ce57 ^ 0,0xfae69b63 ^ 0,0xbadcaffe ^ 0];
    const imu2prm=[2654435761,1597334677,9745628194,6219433873,
                   2246822507,3266489909,9807643451,4576128788];
    let hash,i,ch;
    for (i = 0; i < str.length; i++) {
        ch = str.charCodeAt(i);
        for(let j=0;j<4;j++){
            hs[j] = Math.imul(hs[j] ^ ch, imu2prm[j]);
        }
    }  
    for(i=0;i<4;i+=2){
        hs[i] = Math.imul(hs[i] ^ (hs[i]<<32), imu2prm[i+4]) ^ Math.imul(hs[i+1] ^ (hs[i+1]<<9), imu2prm[i+5]);
        hs[i+1] = Math.imul(hs[i+1] ^ (hs[i+1]<<32), imu2prm[i+4]) ^ Math.imul(hs[i] ^ (hs[i]<<9), imu2prm[i+5]);
    } 

    hash=(hs[1]>>>0).toString(32).padStart(16,(hs[2]>>>0).toString(16).padStart(8,0));
    hash+=(hs[0]>>>0).toString(32).padStart(16,(hs[3]>>>0).toString(16).padStart(8,0));
    return hash;
 };

