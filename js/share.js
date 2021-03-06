!function(){
	function getStyles(config){
		return "<meta name='sharer'><link rel='stylesheet' href='http://weloveiconfonts.com/api/?family=entypo'><link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Lato:900'><style>"+config.selector+"{width:90px;height:20px}"+config.selector+" [class*=entypo-]:before{font-family:entypo,sans-serif}"+config.selector+" label{font-size:16px;cursor:pointer;margin:0;padding:5px 10px;border-radius:5px;background:"+config.button_background+";color:"+config.button_color+";-webkit-transition:all .3s ease;transition:all .3s ease}"+config.selector+" label:hover{opacity:.8}"+config.selector+" label span{text-transform:uppercase;font-size:.85em;font-family:Lato,sans-serif;font-weight:900;-webkit-font-smoothing:antialiased;padding-left:6px}"+config.selector+" .social{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scale(0) translateY(-190px);-ms-transform:scale(0) translateY(-190px);transform:scale(0) translateY(-190px);opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;margin-left:-15px}"+config.selector+" .social.active{opacity:1;-webkit-transform:scale(1) translateY(-90px);-ms-transform:scale(1) translateY(-90px);transform:scale(1) translateY(-90px);-webkit-transition:all .4s ease;transition:all .4s ease;margin-left:-45px}"+config.selector+" ul{position:relative;left:0;right:0;width:180px;height:46px;color:#fff;background:#3b5998;margin:auto;padding:0;list-style:none}"+config.selector+" ul li{font-size:20px;cursor:pointer;width:60px;margin:0;padding:12px 0;text-align:center;float:left;display:block;height:22px;position:relative;z-index:2;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-transition:all .3s ease;transition:all .3s ease}"+config.selector+" ul li:hover{color:rgba(0,0,0,.5)}"+config.selector+" ul:after{content:'';display:block;width:0;height:0;position:absolute;left:0;right:0;margin:35px auto;border-left:20px solid transparent;border-right:20px solid transparent;border-top:20px solid #3b5998}"+config.selector+" li[class*=twitter]{background:#6cdfea;padding:12px 0}"+config.selector+" li[class*=gplus]{background:#e34429;padding:12px 0}</style>"
	};
	
	$.fn.share=function(t){
		var e,o,i,n,a,r,l,s,c=this;return $(this).hide(),null==t&&(t={}),
		n={},
		n.url=t.url||window.location.href,
		n.text=t.text||$("meta[name=description]").attr("content")||"",
		n.app_id=t.app_id,n.title=t.title,
		n.image=t.image,
		n.button_color=t.color||"#333",
		n.button_background=t.background||"#e1e1e1",
		n.button_icon=t.icon||"export",
		n.button_text=t.button_text||"Share",
		l=function(e,o){return t[e]?t[e][o]||n[o]:n[o]},
		n.twitter_url=l("twitter","url"),
		n.twitter_text=l("twitter","text"),
		n.fb_url=l("facebook","url"),
		n.fb_title=l("facebook","title"),
		n.fb_caption=l("facebook","caption"),
		n.fb_text=l("facebook","text"),
		n.fb_image=l("facebook","image"),
		n.gplus_url=l("gplus","url"),
		n.selector="."+$(this).attr("class"),
		n.twitter_text=encodeURIComponent(n.twitter_text),
		"integer"==typeof n.app_id&&(n.app_id=n.app_id.toString()),
		$("meta[name=sharer]").length||$("head").append(getStyles(n)),
		$(this).html("<label class='entypo-"+n.button_icon+"'><span>"+n.button_text+"</span></label><div class='social'><ul><li class='entypo-twitter' data-network='twitter'></li><li class='entypo-facebook' data-network='facebook'></li><li class='entypo-gplus' data-network='gplus'></li></ul></div>"),
		!window.FB&&n.app_id&&$("body")
		.append("<div id='fb-root'></div><script>(function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src='//connect.facebook.net/en_US/all.js#xfbml=1&appId="+n.app_id+"',e.parentNode.insertBefore(d,e))})(document,'script','facebook-jssdk');</script>"),
		r={
			twitter:"http://twitter.com/intent/tweet?text="+n.twitter_text+ " %40radarboy_japan " +"&url="+n.twitter_url,
			facebook:"https://www.facebook.com/sharer/sharer.php?u="+n.fb_url,
			gplus:"https://plus.google.com/share?url="+n.gplus_url
			},
		e=$(this).parent().find(".social"),
		s=function(t){return t.stopPropagation(),e.toggleClass("active")},
		a=function(){return e.addClass("active")},i=function(){return e.removeClass("active")},
		o=function(){var t;return t=r[$(this).data("network")],
		"facebook"===$(this).data("network")&&n.app_id?window.FB.ui({method:"feed",name:n.fb_title,link:n.fb_url,picture:n.fb_image,caption:n.fb_caption,description:n.fb_text}):window.open(t,"targetWindow","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=350"),!1},
	
		$(this).find("label").on("click",s),
		$(this).find("li").on("click",o),
		$("body").on("click",function(){
			return e.hasClass("active")?e.removeClass("active"):void 0
		}),
			setTimeout(function(){return $(c).show()},250),{toggle:s.bind(this),
			open:a.bind(this),close:i.bind(this),options:n,self:this
		}
	};
	}.call(this)