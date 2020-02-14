"use strict"
var userjoin = userjoin ||{}
userjoin=(()=>{
	const WHEN_ERR = '호출하는 userjoin 페이지가 없음'
	let js;
	let mainVuejs;
	let userjoinvuejs
	let mainHomejs
	let loginjs
	let init = () => {
		js = $.js()
		userjoinvuejs = js + '/user/userjoin_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		loginjs =js+'/withcs/login.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(userjoinvuejs),
			$.getScript(mainHomejs),
			$.getScript(loginjs)
		).done(()=>{
			setContentView()
			gologin()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(userjoin_vue.userjoin_body())
	}
	let gologin=()=>{
		$('#uid').keyup(() => {
			if ($('#uid').val().length > 3) {
				$.ajax({
					url: '/user/'+$('#uid').val()+'/existId',
					contentType: 'application/json',
					success: d => { 
						if (d.msg === 'SUCCESS') {
							$('#uidNotice')
								.val('사용가능한 아이디입니다.')
								.css('color', 'blue')
						} else {
							$('#uidNotice')
								.val('중복된 아이디  입니다')
								.css('color', 'red')
						}
					}
				})
			}
		})
		$('#pwdck').keyup(()=>{
			if( $('#pwd').val() != $('#pwdck').val() ){
				$('#pwdNotice')
				.val('비밀번호가 일치하지 않습니다')
				.css('color', 'red')
		        
			}else{
				$('#pwdNotice')
				.val('비밀번호 일치 합니다')
				.css('color', 'blue')
				}
			})
		
		$('#userjoin_btn').click(e=>{
			e.preventDefault()
		let data = {uid:$(`#uid`).val(),pwd:$(`#pwd`).val(),uname:$(`#uname`).val(),
					nickname:$(`#nickname`).val(),birth:$(`#birth`).val(),
					tel:($(`#tel1`).val()+$(`#tel2`).val()+$(`#tel3`).val())}
            $.ajax({
	    	url : '/user/',
	    	type : 'POST',
	    	dataType : 'json',
	    	data : JSON.stringify(data),
	    	contentType : 'application/json',
	    	success : d => {
	    			if(d.msg === 'SUCCESS'){
	    				login.onCreate()
	    			}else
	    				alert('회원가입 실패1')
	    	},
	    	error : e => {
	    		alert('필수값을 입력해 주세요')
	    	}
		})
		if(!$('#uid').val() || !$('#pwd').val()){
			alert('아이디와 비밀번호를 입력해 주세요')
		}
			})
	}

	return {onCreate}
})()