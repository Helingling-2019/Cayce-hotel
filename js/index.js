
//banner
$(function(){
	var imgNum = $(".banner").length;
	var lef = $(".icoList").width()/1000;
	$(".icoList").css("margin-top","-"+lef+"px").show();
	
	var timer;
	
	$(".icoList li a").click(function(){
		var index = $(".icoList li a").index($(this));
		changeImg(index);
	}).eq(0).click();
	
	$(".banner-left").click(function(){
		var index = $(".icoList li a").index($(".icoList li a.cur"));
		var indexImg = index-1;
		if(indexImg<0)
			indexImg=imgNum-1;
		changeImg(indexImg);
		//alert(index);
	});
	
	$(".banner-right").click(function(){
		var index = $(".icoList li a").index($(".icoList li a.cur"));
		var indexImg = index+1;
		if(indexImg>imgNum-1)
			indexImg=0;
		changeImg(indexImg);
		//alert(index);
	});
	
	function changeImg(index)
	{
		$(".icoList li a").removeClass("cur").eq(index).addClass("cur");
		$(".indexBanner .banner").fadeOut(600).eq(index).fadeIn(400);
	}
	
	 
	
	timer = setInterval(function(){
		if (!$(".indexBanner .banner").is(":animated"))
		{
			var index = $(".icoList li a").index($(".icoList li a.cur"));
			if (index < $(".icoList li").length-1)
				index++;
			else
				index=0;
			changeImg(index);		
		}
		
	},4000);
});


 //七夕特惠、新店折扣、会员商城
$(document).ready(function(){
$(".main2_2a").hide();
$(".main2_2a:first").show();
$(".more1").hide();
$(".more1:first").show();
$(".main2_1 li").hover(function(){
	$(".main2_1 li").removeClass("currentB");
	$(this).addClass("currentB");
	var n = $(".main2_1 li").index(this);
		$(".main2_2a").hide();
		$(".main2_2a:eq("+n+")").show();
		$(".more1").hide();
		$(".more1:eq("+n+")").show();
	});
});

//商品详情
 //全部商品分类
$(document).ready(function(){
$(".spxq1_1a img").hide();
$(".spxq1_1a img:first").show();
$(".qht-1").hover(function(){
	$(".qht-1").removeClass("curD");
	$(this).addClass("curD");
	var n = $(".qht-1").index(this);
		$(".spxq1_1a img").hide();
		$(".spxq1_1a img:eq("+n+")").show();
	});
});
//我的订单
$(document).ready(function(){
$(".wddd-a").hide();
$(".top_r2_1a").hover(function(){
	$(".wddd-a").show();
	$(".top_r2_1a1").css({background:"url(images/xjt_1.png) no-repeat right center"})
	},function(){
       $(".wddd-a").hide();
	   $(".top_r2_1a1").css({background:"url(images/xjt.png) no-repeat right center"})
   });
});

//会员商城banner
$(function(){
	var numpic = $('#slides li').size()-1;
	var nownow = 0;
	var inout = 0;
	var TT = 0;
	var SPEED = 5000;


	$('#slides li').eq(0).siblings('li').css({'display':'none'});


	var ulstart = '<ul id="pagination">',
		ulcontent = '',
		ulend = '</ul>';
	ADDLI();
	var pagination = $('#pagination li');
	var paginationwidth = $('#pagination').width();
	$('#pagination').css('margin-left',(60-paginationwidth))
	
	pagination.eq(0).addClass('current')
		
	function ADDLI(){
		//var lilicount = numpic + 1;
		for(var i = 0; i <= numpic; i++){
			ulcontent += '<li>' + '<a href="#">' + (i+1) + '</a>' + '</li>';
		}
		
		$('#slides').after(ulstart + ulcontent + ulend);	
	}

	pagination.on('click',DOTCHANGE)
	
	function DOTCHANGE(){
		
		var changenow = $(this).index();
		
		$('#slides li').eq(nownow).css('z-index','900');
		$('#slides li').eq(changenow).css({'z-index':'800'}).show();
		pagination.eq(changenow).addClass('current').siblings('li').removeClass('current');
		$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(changenow).fadeIn(500);});
		nownow = changenow;
	}
	
	pagination.mouseenter(function(){
		inout = 1;
	})
	
	pagination.mouseleave(function(){
		inout = 0;
	})
	
	function GOGO(){
		
		var NN = nownow+1;
		
		if( inout == 1 ){
			} else {
			if(nownow < numpic){
			$('#slides li').eq(nownow).css('z-index','900');
			$('#slides li').eq(NN).css({'z-index':'800'}).show();
			pagination.eq(NN).addClass('current').siblings('li').removeClass('current');
			$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(NN).fadeIn(500);});
			nownow += 1;

		}else{
			NN = 0;
			$('#slides li').eq(nownow).css('z-index','900');
			$('#slides li').eq(NN).stop(true,true).css({'z-index':'800'}).show();
			$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(0).fadeIn(500);});
			pagination.eq(NN).addClass('current').siblings('li').removeClass('current');

			nownow=0;

			}
		}
		TT = setTimeout(GOGO, SPEED);
	}
	
	TT = setTimeout(GOGO, SPEED); 

})

//商品详细页
$(document).ready(function(){
$(".spxy-n").hide();
$(".spxy-n:first").show();
$(".spxy-u li").click(function(){
	$(".spxy-u li").removeClass("currentC");
	$(this).addClass("currentC");
	var n = $(".spxy-u li").index(this);
		$(".spxy-n").hide();
		$(".spxy-n:eq("+n+")").show();
	});
});

//酒店支付
$(document).ready(function(){
$(".bank-2").hide();
$(".bank-2:first").show();
$(".bank-1 li").click(function(){
	$(".bank-1 li").removeClass("currentE");
	$(this).addClass("currentE");
	var n = $(".bank-1 li").index(this);
		$(".bank-2").hide();
		$(".bank-2:eq("+n+")").show();
	});
});
