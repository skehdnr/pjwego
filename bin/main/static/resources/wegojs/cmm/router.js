"use strict";
function Session() {
	sessionStorage.setItem('js', x + '/resources/wegojs');
	sessionStorage.setItem('css', x + '/resource/wegocss');
	sessionStorage.setItem('img', x + '/resources/wegoimg');
	return {
		js: () => { return sessionStorage.getItem('js'); },
		css: () => { return sessionStorage.getItem('css'); },
		img: () => { return sessionStorage.getItem('img'); }
	}
}
function Users(s){
	sessionStorage.setItem('UNAME', s.uname);
	sessionStorage.setItem('NICKNAME', s.nickname);
	sessionStorage.setItem('UID', s.uid);
	sessionStorage.setItem('PWD', s.pwd);
	sessionStorage.setItem('TEL', s.tel);
	sessionStorage.setItem('BIRTH', s.birth);
   return{
		uname : () =>{return sessionStorage.getItem('UNAME');},
		uid : () =>{return sessionStorage.getItem('UID');},
		pwd : () =>{return sessionStorage.getItem('PWD');},
		nickname : () =>{return sessionStorage.getItem('NICKNAME');},
		tel : () =>{return sessionStorage.getItem('TEL');},
		birth : () =>{return sessionStorage.getItem('BIRTH');}
   }
}
 function Admin(t){
	sessionStorage.setItem('AID',t.aid);
	sessionStorage.setItem('APWD',t.apwd);
	sessionStorage.setItem('TEL',t.tel);
	return{
		aid : ()=>{return sessionStorage.getItem('AID');},
		apwd : ()=>{return sessionStorage.getItem('APWD');},
		tel : ()=>{return sessionStorage.getItem('TEL');}
	}
}
