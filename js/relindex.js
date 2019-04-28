window.onload=function(){
    //1.轮播
	//获得slider插件对象
	var gallery = mui('.mui-slider');
	gallery.slider({
	  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	//2.热门目的地
	  var swiper1 = new Swiper('.swiper1', {
      effect: 'flip',
      //effect: slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,
      //"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination1',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   }); 
   
   
    //3.特色
      var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 1.2,
      spaceBetween: 30,
      
      pagination: {
        el: '.swiper-paginations2',
        clickable: true,
      },
    });
    //4.当地玩乐切换
    var btns = document.getElementById('local_tab');
	var btnss = btns.children;
	var cont = document.getElementById("divBox");
	var conts = cont.children;
	for(var i=0;i<btnss.length;i++){	 		
		btnss[i].addEventListener("tap",function () {
				 	for(var j=0;j<btnss.length;j++){
				if(this==btnss[j]){
			conts[j].style.display = "block";      

	}else{
		conts[j].style.display = "none";
	}
}
		})
	}

    //5.底部选项卡链接
            var aniShow = "slide-in-right";
			//关于backbutton和menubutton两个按键的说明，在iOS平台不存在，故需隐藏
			if(!mui.os.android){
				var span = document.getElementById("android-only")
				if(span){
					span.style.display = "none";
				}
				aniShow = "pop-in";
			}
			var subWebview=null,template=null,index=null;
			mui.plusReady(function () {
				//获得主页面webview引用；
				index = plus.webview.currentWebview().opener();
			})
			mui('.mui-bar-tab').on('tap', 'a', function() {
				var id = this.getAttribute("href");
				var type = this.getAttribute("open-type");
				var href = this.href;
				if(type=="common"||mui.os.ios){
					var webview_style = {
						popGesture: "close"
					};
					mui.openWindow({
						id: id,
						url: href,
						styles: webview_style,
						show: {
							aniShow: aniShow
						},
						waiting: {
							autoShow: false
						}
					});
				}else{
					var href = this.href;
					var title = this.innerText;
					template = plus.webview.getWebviewById("default-main");
					//获得共用子webview
					subWebview = template.children()[0];
					
					//通知模板修改标题，并显示隐藏右上角图标；
					mui.fire(template,'updateHeader',{title:title,showMenu:false});
					if (subWebview.getURL() != href) {
						subWebview.loadURL(href);
					} else {
						 subWebview.show();
					}
					template.show('slide-in-right', 150);
				}
			});
			

}
