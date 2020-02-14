var festivalDetail = festivalDetail||{}
festivalDetail = (()=>{
	const WHEN_ERR = `호출하는 festivalDetail js가 없음`
		let js;
	  let mainVuejs,fastivalDetailvuejs,routerjs,festivalRvvuejs,festivalEndVuejs;
		let init = ()=>{
			js = $.js()
			routerjs = js+`/cmm/router.js`
			mainVuejs = js + `/vue/mainVue.js`
			fastivalDetailvuejs = js +`/festival/fastivalDetail_vue.js`
			festivalRvvuejs = js + `/festival/festivalRv_vue.js`
			festivalEndVuejs = js + `/festival/festivalEnd_Vue.js`
		}

		let onCreate=()=>{
			init()
			$.when(
				$.getScript(mainVuejs),
				$.getScript(routerjs),
				$.getScript(fastivalDetailvuejs),
				$.getScript(festivalRvvuejs),
				$.$.getScript(festivalEndVuejs)
			).done(()=>{
				setContentView()
				festival_list()
			}).fail(()=>{
				alert(WHEN_ERR)
			})
		}
	
	let setContentView=()=>{
		 let x = {css:$.css(),img:$.img()}	
			$(`#mainbody`).html(festival_vue.fmain_body())
	}
	
	let festival_list=x=>{
		$('#mainbody').html(festivalDetail_Vue.fsDetail_body(x))
		$('html').scrollTop(0);
		$.getJSON(`/festival/finfo/`+x.feseq, d=>{
			let festival = d.festival
			$(`<div class="main_1 main_common1" style="background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%; display:inline-table;  float: left; width: 700px; height: 300px; border: 1px solid #bcbcbc; >
			          <p class="content"><img style="height: inherit; width:inherit;" id="img" src="${festival.fimg}"/></p>
			        </div>
			          <div class="main_2 main_common2"  style= display:inline-table; float: left; width: 430px; height: 300px;  border: 1px solid #bcbcbc; >
			            <div class="content3"><h2 style="font-weightbolder">${festival.ftitle}</h2></div>
			            <div class="content3"><h2 style="font-weightbolder">행사기간<br/>${festival.fdate}</h2></div>
			            <div class="content3"><h2 style="font-weightbolder">
			            <button id="fsrv" type="button">행사&축제 예약하기</button></h2></div>
			          </div>`).appendTo('#main1')
			          $(`<div class="detail_head"><h2 style=" text-align: center;">${festival.ftitle}</h2></div><div style="text-align-last: right"></div>
    		    			<div class="detail_festivalinfo"><h3 style=" text-align: center;">${festival.finfo}</h3></div>`)
    		    			.appendTo('#main4')
		$('#fsrv').click(e=>{
			e.preventDefault()
	    			if(sessionStorage.getItem('UID') != null){
	    				festival_Reservation()
	    				person()
	    			}else{
	    				alert("로그인후 예약 가능합니다.")
	    				$('#mainbody').html(login_vue.login_body())
	    				 $('html').scrollTop(0);
	    				login.userlogin()
	    			}
			})
		})
	}
	
	let festival_Reservation=()=>{
		 let x = {css:$.css(),img:$.img()}
		 $('#mainbody').empty()
		 $('#mainbody').html(festivalRv_vue.festivalRv_main())
	     $('html').scrollTop(0);
		 festivalend()
	}
	
	let festivalend=()=>{
		$(`#fpass`).click(()=>{
			alert(`예약완료`)
			let data = {uid:$(`#fuid`).val(), tel:$(`#ftel`).val(),
				date:$(`#fdate`).val(),person:$(`#fperson`).val()}
			$.ajax({
				url : `/festival/festivalend`,
				type : `POST`,
				dataType : `json`,
    	    	data : JSON.stringify(data),
    	    	contentType : `application/json`,
    	    	success : d=>{
    	    		if(d.msg === `SUCCESS`){
    	    			festivalEnd_vue.fEnd_body()
	    			}else
	    				alert(`예약실패`)
    	    	},
    	    	error : e=>{
    	    		alert(`ajax 실패`)
    	    	}
	    		})
		})
	}
	let person=()=>{
		let perf = $(`#fper option:selected`).val()
		$(`#fper`).on(`change`,function(){
			alert($(`#fper option:selected`).val())
			/*$(`#inputadd`).empty()*/
			/*$(`<input id="fperson" type="text" value="`+$(`#fper option:selected`).val()+`" 
		style="margin-left:3.5%; height:30px; width:360px;" readonly>`).appendTo(`#inputadd`)*/
		})
		
	}
	
	
	
	return{onCreate,festival_list}
})()
