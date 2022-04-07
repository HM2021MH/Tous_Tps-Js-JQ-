 $(document).ready(function()
 {
var i;
var j;
j=1
if(j==1){i=1; j=0;}
 $("#btn").click(function()
 {

 $("#add").css("padding","10px");
  // Place DOM
  var div=$('<div></div>');
  $("#add").append(div);
  div.prop("class","input-group");
  div.css("margin-bottom","10px");

  //label ajouté
  var label=$('<label class="col-sm-2 col-form-label" id="label" ></label>');
   div.append(label);
  label.css("font-weight","bold"); 
  if($("#labelDOM").val() == "") 
    {
      label.html("Default label " +"("+i+")" +":"); 
      i=i+1;
    } else label.html($("#labelDOM").val() + " :");

  // Input ajouté 
  var nv=$('<input/>');
  div.append(nv);
  nv.prop("class","form-control");
  nv.css("border-radius","8px");

  // Button supprimer
  var supp=$('<input type="submit" value="Supprimer">');
  supp.prop("class","btn btn-outline-danger");
  supp.css("border-radius","8px");
  div.append(supp);

  // action du bouton supprimer
  supp.click(function()
  {
      div.remove();
  });  
});
});

 

        