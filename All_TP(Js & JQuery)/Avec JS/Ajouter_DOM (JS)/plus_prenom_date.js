



function ajouter()
{
  if(!! document.getElementById("ajout_prenom"))
  document.getElementById("ajout_prenom").remove();

    let div = document.getElementById("div1");
//ajout du label  
    let label_prenom=document.createElement("label");
    label_prenom.setAttribute("id","label");
    label_prenom.setAttribute("class","form-label");
    div.appendChild(label_prenom);
 document.getElementById('label').innerHTML =' Prénom:'; 

//ajout du champ 
 let prenom=document.createElement("input");
    prenom.setAttribute("type","text");
    prenom.setAttribute("id","prenom");
    prenom.setAttribute("class","form-control");
    div.appendChild(prenom);
/// ajout du bouton supprimer prenom
    let supp1=document.createElement("input");
    supp1.setAttribute("type","submit");
    supp1.setAttribute("class","button");
    supp1.setAttribute("id","supp_pre");
    supp1.setAttribute("onclick","remove()");
    supp1.setAttribute("value","Supprimer prénom");
    div.appendChild(supp1);
//changemant valeur et comportement du bouton ajouter 
if(!(!! document.getElementById("date"))&&!(!!document.getElementById("ajout_date")))
 document.getElementById('ajout').innerHTML ='<input type="submit" onclick="ajouter1()" class="button" value="Ajouter date de naissance" id="btn">';
}

function ajouter1()
{
  if(!! document.getElementById("ajout_date"))
  document.getElementById("ajout_date").remove();
  let div = document.getElementById("div2");

//ajout du label  
    let label_date=document.createElement("label");
    label_date.setAttribute("id","date");
    label_date.setAttribute("class","form-label");
    div.appendChild(label_date);
 document.getElementById('date').innerHTML =' Date naissance :'; 
//ajout du champ 
 let date=document.createElement("input");
    date.setAttribute("type","date");
    date.setAttribute("class","form-control");
    date.setAttribute("id","ladate");
    div.appendChild(date);


    let ajout=document.createElement("input");
    ajout.setAttribute("type","submit");
    ajout.setAttribute("class","button");
    ajout.setAttribute("id","suppD");
    ajout.setAttribute("onclick","remove1()");
    ajout.setAttribute("value","Supprimer date");
    div.appendChild(ajout);
//supprression bouton d'ajout DOM 
document.getElementById('ajout').innerHTML ='';


}
function remove(){
  document.getElementById("prenom").remove();
  document.getElementById("label").remove();
  document.getElementById("supp_pre").remove();


  let div = document.getElementById("div1");
  let ajout=document.createElement("input");
  ajout.setAttribute("type","submit");
  ajout.setAttribute("class","button");
  ajout.setAttribute("id","ajout_prenom");
  ajout.setAttribute("onclick","ajouter()");
  ajout.setAttribute("value","Ajouter prénom");
  div.appendChild(ajout);
}

function remove1(){
  document.getElementById("ladate").remove();
  document.getElementById("date").remove();
  document.getElementById("suppD").remove();

  let div= document.getElementById("div2");
  let ajout=document.createElement("input");
  ajout.setAttribute("type","submit");
  ajout.setAttribute("class","button");
  ajout.setAttribute("id","ajout_date");
  ajout.setAttribute("onclick","ajouter1()");
  ajout.setAttribute("value","Ajouter date  ");
  div.appendChild(ajout);
}