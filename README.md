# click-yan-zheng
这是一个 B/S 结构的中文验证码组件，使用者免键盘输入，直接点击即可进行验证
 
# USAGE
step 1) composer require dagang007/click-yan-zheng   <br/>
step 2) implement 3 actions    <br/>
step 3) include .js   <br/>
step 4) initialize a variable   <br/>   
var clickYanZHeng = {   
	id : 'Ya',  //clickable element   
	urlInit : "/index/index/ver",	// action url  return verify->chars()    
	urlPic : "/index/index/pic",	// action url  return verify->pic()   
	urlYan : "/index/index/piccheck",	// action url return 1 or 2   
	eCavas : 've',  // id of created element    
	eIMG : 'im3',   // id   
	eChars : 'chs'  // id   
};

 
