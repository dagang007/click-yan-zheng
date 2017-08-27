(clickYanZHeng.action=function(){
	document.addEventListener('DOMContentLoaded' , function(){
		document.getElementById(clickYanZHeng.id).onclick = flas;
	});
	
	function flas(e,ver1,pic1,yanurl1){
		var ver = ver1||clickYanZHeng.urlInit;
		var pic = pic1||clickYanZHeng.urlPic;
		var yanurl = yanurl1||clickYanZHeng.urlYan;
		xmlhttp=new XMLHttpRequest();
		xmlhttp.open("get", ver );
		xmlhttp.onreadystatechange = function(){ lun(ver,pic , yanurl ); }
		xmlhttp.send(null);	
	}
	
	function lun(ver,pic , yanurl){
		if( xmlhttp.readyState === 4 && xmlhttp.status === 200 ){
			if(!document.getElementById( clickYanZHeng.eCavas ) ){
				var content = document.createElement('div');
				content.style.border = '2px solid grey';
				content.style.width = '292px';
				content.style.height = '410px';
				content.style.margin = 'auto';
				content.style.position = 'fixed';
				content.style.zIndex = '1000';
				content.style.top = '10px';
				content.style.left = '199px';
				content.id = clickYanZHeng.eCavas;
				document.body.appendChild( content );
				
				var veri = document.getElementById( clickYanZHeng.eCavas );
				veri.innerHTML = '<b style="color:red" id="bb_id" data="">验证结果：</b>';
				
				var butt2 = document.createElement('button');
				butt2.addEventListener('click', function(){ this.parentNode.parentNode.removeChild( this.parentNode); bb_id.setAttribute('data' , ''); });
				butt2.style.float = 'right';
				butt2.innerText = 'X 关闭窗口';
				veri.appendChild( butt2);
				
				var img = document.createElement('img');
				img.id = clickYanZHeng.eIMG;
				veri.appendChild( img );
				img.src = pic;
				
				var chars = document.createElement('div');
				chars.id = clickYanZHeng.eChars;
				veri.appendChild( chars );
				for(var i=0; i<16; i++){
					var char = document.createElement('span');
					char.style.display = 'inline-block';
					char.style.border = '1px solid grey';
					char.style.width = '70px';
					char.style.height = '70px';
					char.style.fontSize = '50px';
					char.innerText = xmlhttp.responseText.substr(i, 1);
					char.addEventListener('click', function(){ add( this.innerText,this ,yanurl) });
					chars.appendChild( char );
				}
				var butt1 = document.createElement('button');
				butt1.addEventListener('click', function(e){flas(e,ver, pic ,yanurl)} );
				butt1.style.width = '145px';
				butt1.innerText = '刷新';
				veri.appendChild( butt1);
				
				
			}else{	
				var chars = document.getElementById( clickYanZHeng.eChars );
				for(var i=0; i<16; i++){
					chars.childNodes[i] .innerText = xmlhttp.responseText.substr(i, 1);
					chars.childNodes[i].style.background = 'white';
				}
				var img = document.getElementById( clickYanZHeng.eIMG );
				img.src = pic;
				bb_id.setAttribute('data' , '');
			}
		}
	}//end lun
	
	function add( c , t ,yanurl){
		var s = bb_id.getAttribute('data');
		if( s.length <3 ){
			bb_id.setAttribute('data' , s += c);
			t.style.background = 'yellow';
		}
		if(s.length == 3){
			if(!document.getElementById('butto3') ){
				var butt3 = document.createElement('button');
				butt3.addEventListener('click', function(){ yan(yanurl) });
				butt3.innerText = '立即验证';
				butt3.style.width = '145px';
				butt3.id = 'butto3';
				var veri = document.getElementById( clickYanZHeng.eCavas );
				veri.appendChild( butt3);
			}
		}
	}
	function yan(yanurl){
		xmlhttp2=new XMLHttpRequest();
		xmlhttp2.open("post", yanurl);
		xmlhttp2.setRequestHeader('Content-Type' , 'application/x-www-form-urlencoded');			
		xmlhttp2.onreadystatechange = yan_back;
		xmlhttp2.send('yan='+bb_id.getAttribute('data'));	
	}
	function yan_back(){
		if( xmlhttp2.readyState === 4 && xmlhttp2.status === 200 ){
			if(xmlhttp2.responseText==1)bb_id.innerText = '正确！关闭窗口';
			else bb_id.innerText = '错误，刷新重试';
		}
	}
	
})();