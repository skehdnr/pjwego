"use strict"
var findinfo = findinfo||{}
findinfo=(()=>{
	const WHEN_ERR = `호출하는 findinfo 페이지가 없음`
	let js;
    let mainVuejs;
	let findinfovuejs;
	let loginjs
    let init = () => {
		js = $.js()
		findinfovuejs = js + `/withcsvue/findinfo_vue.js`
		mainVuejs = js +`/vue/mainVue.js`
		loginjs = js + `/withcs/login.js`
	}
	let onCreate=x=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(findinfovuejs),
			$.getScript(loginjs)
		).done(()=>{
			setContentView()
			finduid()
			findupwd()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(login_vue.login_body())
	}
	let finduid=()=>{
		$(`#mainbody`).html(findinfo_vue.findinfo_id())
		
		$(`#findid2`).click(()=>{
			 $.getJSON(`/user/`+$(`#uname`).val()+`/findid/`+$(`#tel`).val(),d=>{
				 let s = d.user
      		   alert("찾으시는 아이디는  [ "+s.userid+ " ] 입니다.")
				 login.onCreate()
				
			 })
	             
		})
		}

	let findupwd=()=>{
		$(`#mainbody`).html(findinfo_vue.findinfo_pwd())
		
		$(`#findpwd_btn2`).click(()=>{
	               $.ajax({
	            	   url : `/user/`+$(`#find_uid`).val()+`/findpwd/`+$(`#pwdtel`).val(),
	            	   type : `POST`,
	            	   data : JSON.stringify({
	            		   	  uid:$(`#find_uid`).val(),
	            		   	  tel: $(`#pwdtel`).val()}),
	            	   dataType : `json`,
	            	   contentType : `application/json`,
	            	   success : d=>{
	            		   let s = d.user
	            		   alert("찾으시는 비밀번호는  [ "+s.passwd + " ]입니다.")
	            		   login.onCreate()
	            	   },
	            	   error : e => {
	            		   alert(`다시 시도해주세요.`)
	            		   findinfo.findupwd()
	       	    		
	       	    	}
	               })
		})
		}

	return{onCreate,finduid ,findupwd}
})()