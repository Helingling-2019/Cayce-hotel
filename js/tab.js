function g(o){return document.getElementById(o);}
//我发布的帖子滑动门
function state(n){
for(var i=1;i<=2;i++){g('state_'+i).className='undis';g('state'+i).className='unpass';}g('state_'+n).className='dis';g('state'+n).className='pass';
}

//个人信息、收货地址滑动门
function mess(n){
for(var i=1;i<=2;i++){g('mess-'+i).className='undis';g('mess'+i).className='unpass1';}g('mess-'+n).className='dis';g('mess'+n).className='pass1';
}