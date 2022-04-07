let regex=/^(([a-zèéê]+)?(\-|')?(\s+)?([a-zèéê]+?)(\s+)?)+$/gi
function valide_nom()
{ 
   let nom = document.querySelector("#nom").value;
   let nomInput = document.querySelector("#nom");
   if(nom.match(regex))
     { 
    nomInput.style.borderColor="green"; document.getElementById('validename').innerHTML="Valid name given";
     }
   else 
       {
    nomInput.style.borderColor="red"; 
    document.getElementById('errorname').innerHTML="Invalid name given";
       } 
}
function vider()
{
    document.getElementById('validename').innerHTML="";
    document.getElementById('errorname').innerHTML="";
}