$(window).load(function(){
  $("#preloaderImg").fadeOut("slow");
  $("#loader").delay(1000).fadeOut("slow");

});

$(document).ready(function(){
    
    
    /*$("#backtotop").css("display","none");*/

    
     $(".button-collapse").sideNav();

		var full_url = window.location.href;
        console.log(full_url);
		var parts = full_url.split("#");
        var trgt = parts[1];
		/*location.hash='';*/
		if(trgt!=null && trgt!='')
		{
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top;
        	$('html, body').animate({scrollTop:target_top},
									{
				easing:'easeInSine',
				duration:1500,	
				complete:function()
				{		
					
				}
			}
 		);
		}
    var pt2=$("#part2").offset().top;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if(st>=pt2-64){
       $("#backtotop").fadeIn('slow');
   }else{
       $("#backtotop").fadeOut('slow');
   }
});
    
    	$(".scroll").click(function(event){
        event.preventDefault();
        var full_url = this.href;
            /*console.log(full_url);*/
		op=1;
		//file:///C:/Users/pratik/Desktop/MS/SCOMM/MUN/Site/index.html#2
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#"+trgt).offset();
        var target_top = target_offset.top;
		//console.log(target_top);
        $('html, body').animate({scrollTop:target_top-64}, 1500, 'easeInSine');
    });
    
    
    $('.modal-trigger').leanModal();
    
     $("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "circle_bg_color": "#333333",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#0076b6",
            "show": true
        },
        "Hours": {
            "text": "Hours",
            "color": "#0076b6",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#0076b6",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#0076b6",
            "show": true
        }
    }
});
    
    $("#apply-now").hover( function(){
        $(this).css("background-color","#0076b6");
    },function(){
        $(this).css("background-color","#f2f2f6");
    });
    
    $("#apply-nowsp").hover( function(){
        $(this).css("background-color","#0076b6");
    },function(){
        $(this).css("background-color","#f2f2f6");
    });
	
    $("#fb").hover( function(){
		$(this).attr("src","fb.png");
	},function(){
		$(this).attr("src","fb_white.png");
	});
	
	$("#tw").hover( function(){
		$(this).attr("src","t.png");
	},function(){
		$(this).attr("src","tw_white.png");
	});
	
	$("#yt").hover( function(){
		$(this).attr("src","yt.png");
	},function(){
		$(this).attr("src","yt_white.png");
	});
    
	window.onresize = function(event) {
    $("#DateCountdown").TimeCircles().rebuild(); 
	};
    
    
    
    /*var t=new Array();

	for(var i=1;i<=5;i++)
	{
		try{
			t[i]=$("#part"+i).offset().top;
		}catch(e){
			
		}
		
	}
var s=1;
    $(window).scroll(function(){
        s;
        for(var i=1;i<=5;i++)
            {
                if(scrollY+768>=t[i])
                    s=i;
            }
        $("#backtotop").css("display","block");
        
    });*/
   
    
    
	});