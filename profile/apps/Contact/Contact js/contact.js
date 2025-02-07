

if (sessionStorage.getItem("user")==null)
 {
 	window.location.replace("../../../Web1.html");
 }
 else
 {
 	var current_user =sessionStorage.getItem("user");
 	//open new contact box
       var add_icon = document.getElementById("new_contact");
       add_icon.onclick = function()
     {
	   var bg =document.getElementById("contact_bg");
	   bg.style.display = "block";
}

   //close contact box coding
    var close = document.getElementById("close");
    
    close.onclick=function()
    {
    	var bg = document.getElementById("contact_bg");
    	bg.style.display="none";
    }



    //add contact in local storage

    var add =document.getElementById("add");
    add.onclick = function()
    {  
       var c_name = document.getElementById("c_name");
       var v_num = document.getElementById("c_num");
       


       if(c_name.value !=""&& c_num.value !="")
       {
       	var new_contact = {name:c_name.value,number:c_num.value};
       	var json_text = JSON.stringify(new_contact);
       	localStorage.setItem(current_user+"_contact"+c_name.value,json_text);



       } 
       else{

          var c_nam_ = document.getElementById("c_name").style.border="red" ;
          var c_num_ = document.getElementById("c_num").style.border="red";
          var nam_warning =document.getElementById("nam_warning").style.display="block";
          var no_warning = document.getElementById("no_warning").style.display="block";

                      
           c_nam_.onclick=function()
           {
           	nam_warning.style.display="none";

           }
           c_num_.onclick = function()
           {
           no_warning.style.display="none";            }







       	return false;

       }
         
    }


    function all_contacts()
   {
      var i;
      for(i=0; i<localStorage.length;i++)
      {
         var all_keys = localStorage.key(i);
         if(all_keys.match(sessionStorage.getItem("user")+"_contact"))
         {
            var json_txt =localStorage.getItem(all_keys);
            var obj = JSON.parse(json_txt);




            var contact_box = document.createElement("DIV");
            contact_box.setAttribute("id","contact");
            var name_p = document.createElement("P");
            name_p.setAttribute("class","contact_name");
            var name_i = document.createElement("I");
            name_i.setAttribute("class","fas fa-user");

            var tool = document.createElement("DIV");
            tool.setAttribute("id","tool");

            var edit_i = document.createElement("I");
            edit_i.setAttribute("class","fas fa-edit edit");
            var del_i = document.createElement("I");
            del_i.setAttribute("class","fas fa-trash del");
            var line = document.createElement("HR");
            line.setAttribute("color","purple");
            line.setAttribute("width","75%");
            line.setAttribute("size","1");

            var num_p = document.createElement("P");
            var num_i = document.createElement("I");
            num_i.setAttribute("class","fas fa-mobile-alt");




            name_p.appendChild(name_i);
            name_p.innerHTML+=obj.name;

            tool.appendChild(edit_i);
            tool.appendChild(del_i);


            num_p.appendChild(num_i);
            num_p.innerHTML+=obj.number;



            contact_box.appendChild(name_p);
            contact_box.appendChild(tool);
            contact_box.appendChild(line);
            contact_box.appendChild(num_p);

            var all_contact_box = document.getElementById("all_contact_box");
            all_contact_box.appendChild(contact_box);
         }
      }
   }

    all_contacts();


//search coding 


  var search = document.getElementById("search");
  search.oninput = function()
  {
   var all_contact_name = document.getElementsByClassName("contact_name");
   var i;
   for(i=0;i<all_contact_name.length;i++)
   {
       if(all_contact_name[i].innerHTML.toUpperCase().match(search.value.toUpperCase()))
       {
         all_contact_name[i].parentElement.style.display="block";

}
       else
       {
         all_contact_name[i].parentElement.style.display="none";

       }
   }

  }
  function del()
  {
   var del = document.getElementsByClassName("del");
   var i;
   for(i=0; i<del.length;i++)
  {
   del[i].onclick=function()
   {
      var parent = this.parentElement.parentElement;
      var p_ele=parent.getElementsByClassName("contact_name")[0];
      var username = p_ele.innerHTML.replace('<i class="fas fa-user"></i>');
      //alert(current_user +"_contact"+username.trim());
      localStorage.removeItem(current_user+"_contact"+username.trim());
      parent.classname="animate__animated animate__bounceOut";

      setTimeout(function(){
         parent.remove();

      },1000);
     
   }
  }
  }
del();



  function edit()
  {
   var edit_icon = document.getElementsByClassName("edit");
   var i;
   for(i=0;i<edit_icon.length;i++)
   {
      edit_icon[i].onclick=function()
      {
         var parent = this.parentElement.parentElement;
         var para = parent.getElementsByTagName("P");
         var name = para[0].innerHTML.replace('<i class="fas fa-user"></i>',"").trim();
         var number = para[1].innerHTML.replace('<i class="fas fa-mobile-alt"></i>',"").trim();
         var c_name =document.getElementById("c_name");
         var c_num = document.getElementById("c_num");
         var add_btn = document.getElementById("new_contact");
         var c_heading = document.getElementById("c_heading");
         var add = document.getElementById("add");
         var close = document.getElementById("close");

             c_name.value = name;
             c_num.value = number;
             c_heading.innerHTML="Edit Contact";
             add.innerHTML="Update";
         
         add_btn.click();
         close.style.display="none";
         localStorage.removeItem(current_user+"_contact"+name);
      }
   }
  }


edit();
 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        