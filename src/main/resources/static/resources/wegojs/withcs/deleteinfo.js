"use strict"
var deleteinfo = deleteinfo ||{}
deleteinfo =(()=>{
	const WHEN_ERR = '호출하는 login 페이지가 없음'
	let js;
    let mainVuejs,deleteinfovuejs,mainHomejs ;

	let init = () => {
		js = $.js()
		deleteinfovuejs = js + '/withcsvue/deleteinfo_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(deleteinfovuejs),
			$.getScript(mainHomejs)
		).done(()=>{
			setContentView()
			godeletemain()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$('#mainbody').html(deleteinfo_vue.deleteinfo_body())
	}
	let godeletemain=()=>{
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
		$('#gogomain_btn').click(()=>{
			let data ={userid:$(`#uid`).val(),passwd :$(`#pwd`).val()}
			$.ajax({
				url:'/user/'+$('#uid').val()+'/remove',
				type:'DELETE',
				data:JSON.stringify(data),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					alert('회원탈퇴성공')
                	mainHome.onCreate()
				},error:e=>{
					alert('탈퇴실패')
				}
			})
                
            })
	}
	return{onCreate}
})()