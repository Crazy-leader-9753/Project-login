window.onload = function(){
	if (sessionStorage.getItem("user")==null) 
	{
		window.location.replace("../Web1.html");

	}
	else
               
	{







             //   profile name coding

                var user_email = sessionStorage.getItem("user");
               /* var json_text = localStorage.getItem("user_email");
                var obj_data = JSON.parse(json_text);
                var profile_name =document.getElementById("profile_name");
                profile_name.innerHTML = atob(obj_data.username);*/
                //alert(obj_data);
                //profile uploading code

                 if (localStorage.getItem(user_email+"image") !=null) 
                {
                        var page_cover=document.getElementById("page_cover");
                        page_cover.style.display = "none";

                }
	
                var profile_upload = document.getElementById("profile_upload");
		profile_upload.onchange = function()
		{
		var reader = new FileReader();
		reader.readAsDataURL(profile_upload.files[0]);
		reader.onload = function()
		{
			var filename = reader.result;
			var profile_icon = document.getElementById("profile_icon");
			var profile_pic = document.getElementById("profile_pic");
			profile_pic.style.backgroundImage = "url("+filename+")";
			profile_pic.style.background ="cover";
			profile_pic.style.backgroundPosition = "center";
			profile_icon.style.display= "none";
                        var next_btn = document.getElementById("next");
                        next_btn.style.display="block";
                        next_btn.onclick = function()
                        {
                                localStorage.setItem(user_email+"image",filename);
                                var page_cover = document.getElementById("page_cover");
                                page_cover.style.display="none";
                                
                        }




                       
		}

	
}
}}