"use strict"
var mypage = mypage ||{}
mypage=(()=>{
	const WHEN_ERR = '호출하는 mypage 페이지가 없음'
	let js;
    let mainVuejs,mypagevuejs,mainHomejs,routerjs;

	let init = () => {
		js = $.js()
		mypagevuejs = js + '/withcsvue/mypage_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		routerjs = js + '/cmm/router.js'
	}
	let onCreate = ()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(mypagevuejs),
			$.getScript(mainHomejs),
			$.getScript(routerjs)
		).done(()=>{
			setContentView()
			godelete()
			gochange()
			golist() 
			
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		gomypage()
	}
	let godelete=()=>{
		$('#delete_btn').click(()=>{
                deleteinfo.onCreate()
            })
	}
	let gochange=()=>{
		$('#change_btn').click(()=>{
                changeadmin.onCreate()
            })
	}
	let golist=()=>{
		$('#listadmin_btn').click(()=>{
                listadmin.onCreate()
            })
	}
	let gomypage =()=>{
		let x = {
			uid : sessionStorage.getItem('UID'),
			uname : sessionStorage.getItem('UNAME'),
			nickname : sessionStorage.getItem('NICKNAME'),
			birth : sessionStorage.getItem('BIRTH'),
			tel : sessionStorage.getItem('TEL')
		}
		$(`#mainbody`).html(mypage_vue.mypage_body(x))
	} 

	/* let gomypage =()=>{
		if (login(d.uid)===uid){
		let x = {
			uid : sessionStorage.getItem('uid'),
			uname : sessionStorage.getItem('uname'),
			nickname : sessionStorage.getItem('nickname'),
			birth : sessionStorage.getItem('birth'),
			tel : sessionStorage.getItem('tel'),
			pettype : sessionStorage.getItem('pettype')
		}
		alert(x.uid+x.uname+x.tel)
		$(`#mainbody`).html(mypage_vue.mypage_body(x))
	}else{
		let z ={
			hname : sessionStorage.getItem('hname'),
			hid : sessionStorage.getItem('hid'),
			pwd : sessionStorage.getItem('pwd'),
			ceoname : sessionStorage.getItem('ceoname'),
			tel : sessionStorage.getItem('tel'),
			addr : sessionStorage.getItem('addr'),
			licensenum : sessionStorage.getItem('licensenum'),
			companytype : sessionStorage.getItem('companytype')
		}
		$(`#mainbody`).html(mypage_vue.adminmypage_body(z))
	}
	} */


	return{onCreate}
})()