function resizeVimeo(){$vimeo=$("#vimeo"),$vimeo.hide(),$vimeo.height=$vimeo.attr("height"),$vimeo.width=$vimeo.attr("width"),$vimeo.ratio=$vimeo.height/$vimeo.width,$vimeo.padding={width:32,height:32*$vimeo.ratio},$vimeo.attr("width",window.innerWidth-$vimeo.padding.width),$vimeo.attr("height",window.innerWidth*$vimeo.ratio-$vimeo.padding.height),$vimeo.slideDown("slow")}$(function(){function i(i){"showLeft"!==i&&classie.toggle(o,"disabled"),"showRight"!==i&&classie.toggle(n,"disabled")}resizeVimeo(),$(".studentBlock",this).hover(function(){$(".photo",this).addClass("color")},function(){$(".photo",this).removeClass("color")});var t=document.getElementById("cbp-spmenu-s1"),e=document.getElementById("cbp-spmenu-s2"),o=document.getElementById("showLeft"),n=document.getElementById("showRight"),a=document.body;o.onclick=function(){classie.toggle(this,"active"),classie.toggle(t,"cbp-spmenu-open"),i("showLeft")},n.onclick=function(){classie.toggle(this,"active"),classie.toggle(e,"cbp-spmenu-open"),i("showRight")}}),$(function(){var i="body";if(Modernizr.svg){var t=$('<div id="canvas"></div>');t.css({opacity:"0",transition:"all 1s"}),t.css({position:"absolute",top:0,width:"100%",height:"100%",overflow:"hidden"}),$(i).prepend(t);for(var e=0;40>e;e++){for(var o=[],n=1;5>n;n++)o[e]=$('<img src="js/svg/shape-'+Math.ceil(5*Math.random())+'.svg" alt="shape" class="svgAnimate'+Math.ceil(3*Math.random())+'" id="svg'+e+'" />'),SVGInjector(o[e]);var a=100*Math.random()+"px",s=Math.random()*window.innerHeight+"px",d=Math.random()*window.innerWidth+"px",h="rotate("+360*Math.random()+"deg)",r=Math.random(),c="blur("+r+"px)";o[e].css({position:"absolute",width:a,height:a,top:s,left:d,transform:h,opacity:r}),t.append(o[e])}}}),$(window).load(function(){for(var i=["#add036","#167e3e","#6d6e70","#e6e7e8"],t=0;40>t;t++){var e=Math.floor(Math.random()*i.length);$("#svg"+t+" .fill").attr("fill",i[e])}$("#canvas").css("opacity","1"),setInterval(function(){var i=Math.random()*window.innerHeight+"px",t=Math.random()*window.innerWidth+"px";$("#svg"+Math.ceil(20*Math.random())).css({top:i,left:t})},300)}),$(window).resize(function(){resizeVimeo()}),console.log("%c CSS & JavaScript animations by Kit MacAllister — http://kittrick.co","font-family: 'Century Gothic', Futura, Helvetica, Serif; font-weight: bold; color: #0b7d1c;");