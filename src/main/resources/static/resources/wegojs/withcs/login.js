"use strict"
var login = login ||{}
login=(()=>{
	const WHEN_ERR = '호출하는 login 페이지가 없음'
	let js;
    let mainVuejs;
	let loginvuejs;
	let mainHomejs
	let routerjs
	let mypagejs,adminmainjs,adminmainVuejs,findinfojs
    let init = () => {
		js = $.js()
		loginvuejs = js + '/withcsvue/login_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		routerjs = js + '/cmm/router.js'
		mypagejs = js+ '/withcs/mypage.js'
		adminmainjs = js + '/admin/adminmain.js'
		adminmainVuejs = js + '/adminvue/adminmain_Vue.js'
		findinfojs = js+`/withcs/findinfo.js`
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(loginvuejs),
			$.getScript(mainHomejs),
			$.getScript(routerjs),
			$.getScript(mypagejs),
			$.getScript(adminmainjs),
			$.getScript(adminmainVuejs),
			$.getScript(findinfojs)
		).done(()=>{
			setContentView()
			gofind()
			userlogin()
			/*googlelogins()
			kakaologins()
			naverlogins()
			fblogins()*/
			loginafter()
			adminlogin()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
			$('#mainbody').html(login_vue.login_body())
			 $('html').scrollTop(0);
	}
	let gofind=()=>{
		$('#findid_btn').click(e=>{
			e.preventDefault()
               
			findinfo.finduid()
			})
		$('#findpwd_btn').click(e=>{
			e.preventDefault()
                findinfo.findupwd()
            })	
	}
	let userlogin=()=>{
		$('#userlogin_btn').click(()=>{
			$.ajax({
		          url : '/user/'+$('#uid').val(),
		          type : 'POST',
		          data : JSON.stringify({userid : $('#uid').val(), passwd : $('#pwd').val()}),
		          dataType : 'json',
		          contentType : 'application/json',
		          success: d =>{
					  let s = d.user
					  $.extend(new Users(s))
					   let x = {css:$.css(),img:$.img()}
					  
					  $('#login_1').empty()
					  $('#login_1').
					  html(`<a id="logout_btn" href="#"  class="btn_1 d-none d-lg-block">LOGOUT</a>`)
					  
					  $('#login_2').empty()
					  $('#login_2').
					  html(`<a id="mypage_go" href="#" class="btn_1 d-none d-lg-block">MYPAGE</a>`)
		             
					  $('#mainbody').empty()
		              $('#mainbody').html(mainVue.main_body(x))
		              $('html').scrollTop(0);
		             loginafter()
				},
		          error : e => {
			    	alert('로그인 실패');
		          }
			})
		})
	}
	let adminlogin=()=>{
		$('#adminlogin_btn1').click(()=>{
			$('#mainbody').html(login_vue.adminlogin_body())
			$('#adminlogin_btn').click(()=>{
				$.ajax({
		          url : '/admin/'+$('#aid').val(),
		          type : 'POST',
		          data : JSON.stringify({admin_id : $('#aid').val(), admin_pwd : $('#apwd').val()}),
		          dataType : 'json',
		          contentType : 'application/json',
		          success: d =>{
				$('#login_1').empty()
				  $('#login_1').
				  html(`<a id="logout_btn" href="#"  class="btn_1 d-none d-lg-block">LOGOUT</a>`)
				  
				  $('#login_2').empty()
				  $('#login_2').
				  html(`<a id="adminpage_go" href="#" class="btn_1 d-none d-lg-block">ADMIN</a>`)
				  adminmain.onCreate()
				  loginafter()
			},
	          error : e => {
		    	alert('어드민 Loign 실패');
	          }
		})
	})
	})
	}
	let loginafter=()=>{
		$('#logout_btn').click(e=>{
			alert('로그아웃 성공')
        	e.preventDefault()
        	 mainHome.onCreate()
        })
        $('#mypage_go').click(e=>{
            e.preventDefault()
             mypage.onCreate()
              $('html').scrollTop(0);
        })
        $('#adminpage_go').click(e=>{
        	e.preventDefault()
        	 adminmain.onCreate()
        	 $('html').scrollTop(0);
        })
	}
	/*let googlelogins=x=>{
		$('#googlelogin').click(function() {
			location.href='http://localhost:8080/web/googlelogin'
		})
	}
	let kakaologins=x=>{
		$('#kakaologin').click(function() {
			location.href='http://localhost:8080/web/kakaologin'
		})
	}
	let naverlogins=x=>{
		$('#naverlogin').click(function() {
			location.href='http://localhost:8080/web/naverlogin'
		})
	}
	let fblogins=x=>{
		$('#fblogin').click(function() {
			location.href='http://localhost:8080/web/fblogin'
		})
	}*/
	
	
	
	return{onCreate,userlogin}
})()
