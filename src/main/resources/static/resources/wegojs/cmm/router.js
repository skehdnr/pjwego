"use strict";
function Session() {
	sessionStorage.setItem('js', '/resources/wegojs');
	sessionStorage.setItem('css', '/resource/wegocss');
	sessionStorage.setItem('img', '/resources/wegoimg');
	return {
		js: () => { return sessionStorage.getItem('js'); },
		css: () => { return sessionStorage.getItem('css'); },
		img: () => { return sessionStorage.getItem('img'); }
	}
}
function Users(s){
	sessionStorage.setItem('username', s.username);
	sessionStorage.setItem('nickname', s.nickname);
	sessionStorage.setItem('userid', s.userid);
	sessionStorage.setItem('passwd', s.passwd);
	sessionStorage.setItem('tel', s.tel);
	sessionStorage.setItem('birth', s.birth);
   return{
		username : () =>{return sessionStorage.getItem('username');},
		userid : () =>{return sessionStorage.getItem('userid');},
		passwd : () =>{return sessionStorage.getItem('passwd');},
		nickname : () =>{return sessionStorage.getItem('nickname');},
		tel : () =>{return sessionStorage.getItem('tel');},
		birth : () =>{return sessionStorage.getItem('birth');}
   }
}
 function Admin(t){
	sessionStorage.setItem('admin_id',t.admin_id);
	sessionStorage.setItem('admin_pwd',t.admin_pwd);
	sessionStorage.setItem('tel',t.tel);
	sessionStorage.setItem('admin_addr',t.admin_addr);
	return{
		admin_id : ()=>{return sessionStorage.getItem('admin_id');},
		admin_pwd : ()=>{return sessionStorage.getItem('admin_pwd');},
		tel : ()=>{return sessionStorage.getItem('tel');},
		admin_addr : ()=>{return sessionStorage.getItem('admin_addr');}
	}
}
