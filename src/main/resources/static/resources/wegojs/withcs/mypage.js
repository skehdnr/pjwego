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
			hotel_name: localStorage.getItem('hotel_name'),
			checkin_date: localStorage.getItem('checkin_date'),
			checkout_date:localStorage.getItem('checkout_date'),
			room_type: localStorage.getItem('room_type'),
			festival_title : localStorage.getItem('festival_title'),
			userid : sessionStorage.getItem('userid'),
			username : sessionStorage.getItem('username'),
			nickname : sessionStorage.getItem('nickname'),
			birth : sessionStorage.getItem('birth'),
			tel : sessionStorage.getItem('tel')
			} 
		$.getJSON(`/user/mypagelist/`+ x.userid , d=>{
			let mypagelists = d.festivalbook
			$(`<div id="title"><h2>${x.nickname} 님의 Mypage</h2></div>
						<h5 size="50" style="font-size: larger";>아이디 : ${x.userid}</h5></br>
						<h5 size="50" style="font-size: larger";>닉네임 : ${x.nickname}</h5></br>
						<h5 size="50" style="font-size: larger";>생년월일 : ${x.birth}</h5></br>
						<h5 size="50" style="font-size: larger";>연락처 : ${x.tel}</h5></br>
						<h5 size="50" style="font-size: larger";>※ Festival 예약정보 ※ <br/> 
		Festival 명 : ${x.festival_title}  <br/> 예약일 : ${mypagelists.visit_date} <br/> 인원수  : ${mypagelists.person} </h5></br>
						<h5 size="50" style="font-size: larger";>※ Hotel 예약정보 ※ <br/> 
															호텔명 : ${x.hotel_name} <br />
															객실명 : ${x.room_type} <br />
															이용날짜 : ${x.checkin_date} 부터  ${x.checkout_date}  </h5></br>`).appendTo(`#main1`)

		})
		
		$(`#mainbody`).html(mypage_vue.mypage_body(x))
	}

	return{onCreate}
})()