window.onload = function(){
	//1.播放音乐
	  function checkAudio() {
                var myAudio = document.createElement('audio');
                if (myAudio.canPlayType) {
                    if (myAudio.canPlayType('audio/mpeg')) {
                        document.write("您的浏览器支持MP3编码。<br />");
                    }    
                    // Ogg全称应该是OGG Vobis(ogg Vorbis) 是一种新的音频压缩格式，
                    if (myAudio.canPlayType('audio/ogg;codecs="vorbis"')) {
                        document.write("您的浏览器支持ogg编码。<br />");
                    }
                    if (myAudio.canPlayType('audio/mp4;codecs="mp4a.40.5"')) {
                        document.write("您的浏览器支持aac编码。<br />");
                    }
                }else {
                    document.write("您的浏览器不支持要检测的音频格式。");
                }
            }
	    window.onload = function() {
                checkAudio();
            }
	    
	    
	
}
