$(document).ready(function(){
    var fstname,lstname,emailid,mobilenum,loc;
	$("#next").on("click", function(){
		fstname= $('#fname').val();
		lstname= $('#lname').val();
		emailid = $('#email').val();
		mobilenum = $('#mobnum').val();
		loc = $('#location').val();
		if(name_valid(fstname))
		{		
			if(name_valid(lstname))
			{
				if(name_valid(emailid))
				{
				    if(email_valid(emailid))
				    {
				    	if(digit_valid(mobilenum))
				    	{

					        $("#pro").hide();
		                    $("#edu").show();
		                    $(".education").css("background-color","yellow");
		                    $(".profile").css("background-color","#ff3366");
		                    $("#head").append("<h2><b>" + fstname + " " + lstname +  "</h2>",
			                "<span>" + emailid + "  -  " + mobilenum + "</span><br/>",
			                "<span>" + loc + "</span><br/><hr/>")
                        }
		                else
		                {
		            	    return false;
		          	    }
		          	}
		          
		        }
		    }
		}
		return false;

		function email_valid(uemail)
		{
			var atpos=uemail.indexOf("@");
            var dotpos=uemail.lastIndexOf(".");
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=uemail.length)
              {
              alert("Not a valid e-mail address");
              return false;
              }
              else
              {
              	return true;
              }

		}		
		
	});

    function digit_valid(num)
    {
    	if(isNaN(num) || num == "null" || num.length<10 || num == "")
    	{
				alert("Required fields are empty")
		}
		else
		{
			return true;
		}
    }

    function name_valid(name)
		{
			if(name == "" || name== "null")
			{
				alert("Required fields are empty")
			}
			else
			{
				return true;
			}
		}

    function num_valid(date)
    {
    	if(date === "-1")
    	{
			alert("Required fields are empty")
		}
		else
		{
			return true;
		}
    }

    $("#remove").on("click", function(){
		$("#edu").hide();
		$("#work").show();
		$(".education, .profile").css("background-color","#ff3366");
	    $(".work").css("background-color","yellow");

	});

    var deg,fof,uniname,place,fyear,tyear;
    
	$("#nextone, #more").on("click", function(){
		deg= $('#degree').val();
	    fof= $('#field').val();
	    uniname = $('#uniname').val();
	    place = $('#two').val();
	    fyear = $('#fyselect').find(':selected').attr('value');
        tyear = $('#tyselect').find(':selected').attr('value');
    });

    $("#nextone").on("click", function(){

		if(name_valid(deg))
        {
        	if(name_valid(fof))
        	{
        		if(name_valid(uniname))
        		{
        			if(name_valid(place))
        			{    
        				if(num_valid(fyear))
        				{
        					if(num_valid(tyear))
        					{
        						$("#edu").hide();
		                        $("#work").show();
		                        $(".education, .profile").css("background-color","#ff3366");
	                            $(".work").css("background-color","yellow");
        			            $("#pre-midd").append("<h3> Education</h3>",
			                      "<h4>" + deg + " in " + fof + "</h4>",
			                      "<span>" + uniname + "  ,  " + place + "<br/>" + fyear + "  -  " + tyear + "</span><br/><hr/>");
		                    }
		                    else
		                    {
		            	        return false;
		                    } 
		                }
		            }
		        }
		    }
		}
		return false;
	});

	$("#removeexp").on("click", function(){
		$("#container").hide();
		$("#preview").show();
	});

    var jobtitle,company,loc,smnth,syear,emnth,eyear;
	$("#subtn, #moreexp").on("click", function(){
		jobtitle= $('#jobtitle').val();
		company= $('#company').val();
		local = $('#one').val();
		smnth = $('#smselect').find(':selected').attr('value');
		syear = $('#syselect').find(':selected').attr('value');
		emnth = $('#emselect').find(':selected').attr('value');
		eyear = $('#eyselect').find(':selected').attr('value');
		
	});

	$("#subtn").on("click", function(){
		if(name_valid(jobtitle))
        {
        	if(name_valid(company))
        	{
        		if(name_valid(local))
        		{
        			if(num_valid(smnth))
        			{
        				if(num_valid(syear))
        				{
        					if(num_valid(emnth))
        					{
        						if(num_valid(eyear))
        						{
        							$("#container").hide();
		                            $("#preview").show();
        		                    $("#pre-body").append("<h3> Work Experience</h3>",
			                            "<h4>" + jobtitle + "</h4>",
			                            "<span>" + company + "  -  " + local +"</span><br/>",
			                            "<span>" + smnth + " " + syear + "  -  " + emnth + " " + eyear + "</span><hr/>");
		                        }
		                        else
		                        {
		            	            return false;
		         
		                        }
		                    }
		                }
		            }
		        }
		    }
		}
		return false;
	});

	$("#current").on("click",function(){
		if ($(this).is(':checked'))
			{
				$("#eyselect, #emselect").hide();
				$("#till").show().text("now");
		    }
		    else
		    {
		    	$("#till").hide().text("now");
		    	$("#eyselect, #emselect").show();
		    }
	});

	$("#more").on("click", function(){
		if(name_valid(deg))
        {
        	if(name_valid(fof))
        	{
        		if(name_valid(uniname))
        		{
        			if(name_valid(place))
        			{    
        			$("#pre-middle").show();
		            $("#pre-middle").append("<h3> Education</h3>",
			            "<h4>" + deg + " in " + fof + "</h4>",
			            "<span>" + uniname + "  ,  " + place + "<br/>" + fyear + "  -  " + tyear + "</span><br/><hr/>");
		            }
		            else
		            {
		            	//return false;
		            }
		        }
		    }
		}

	});

	$("#moreexp").on("click", function(){
		if(name_valid(jobtitle))
        {
        	if(name_valid(company))
        	{
        		if(name_valid(local))
        		{
        		$("#pre-exp").show();
		        $("#pre-exp").append("<h3> Work Experience</h3>",
			                "<h4>" + jobtitle + "</h4>",
			                "<span>" + company + "  -  " + local +"</span><br/>",
			                "<span>" + smnth + " " + syear + "  -  " + emnth + " " + eyear + "</span><hr/>");
		        }
		        else
		        {
		            	//return false;
		        }
		    }
		}
		       

	});

	$("#submit").on("click",function(){
		$("#final").hide();
		$("#download").show();
		alert("Application Submitted");

	});

	$("#download a").on("click",function(){
		alert("needs to be done");

	})


});