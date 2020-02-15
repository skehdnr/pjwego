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
		$.getJSON(`/festival/finfo/`+x.festival_seq, d=>{
			let festival = d.festival
			$(`<div class="main_1 main_common1" style="background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%; display:inline-table;  float: left; width: 700px; height: 300px; border: 1px solid #bcbcbc; >
			          <p class="content"><img style="height: inherit; width:inherit;" id="img" src="${festival.festival_img}"/></p>
			        </div>
			          <div class="main_2 main_common2"  style= display:inline-table; float: left; width: 430px; height: 300px;  border: 1px solid #bcbcbc; >
			            <div class="content3"><h2 style="font-weightbolder">${festival.festival_title}</h2></div>
			            <div class="content3"><h2 style="font-weightbolder">행사기간<br/>${festival.festival_date}</h2></div>
			            <div class="content3"><h2 style="font-weightbolder">
			            <button id="fsrv" type="button">행사&축제 예약하기</button></h2></div>
			          </div>`).appendTo('#main1')
			          $(`<div class="detail_head"><h2 style=" text-align: center;">${festival.festival_title}</h2></div><div style="text-align-last: right"></div>
    		    			<div class="detail_festivalinfo"><h3 style=" text-align: center;">${festival.festival_info}</h3></div>`)
    		    			.appendTo('#main4')
		$('#fsrv').click(e=>{
			e.preventDefault()
	    			if(sessionStorage.getItem('userid') != null){
	    				festival_Reservation()
	    				fperson()
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
		 let x = {css:$.css(),img:$.img(),
			     userid : sessionStorage.getItem('userid'),
				tel : sessionStorage.getItem('tel')}
		 $('#mainbody').empty()
		 $('#mainbody').html(festivalRv_vue.festivalRv_main(x))
	     $('html').scrollTop(0);
		 festivalend()
	}
	
	let festivalend=()=>{
		$(`#fpass`).click(()=>{
			alert(`예약하기`)
			let data = {userid:$(`#fuid`).val(), tel:$(`#ftel`).val(),
				visit_date:$(`#fdate`).val(),person:$(`#fpersons`).val()}
				alert(data)
				alert(data.userid)
				alert(data.tel)
				alert(data.visit_date)
				alert(data.person)
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

	let fperson=()=>{
		let perf = $(`#fper option:selected`).val()
		$(`#fper`).on(`change`,function(){
			alert($(`#fper option:selected`).val())
			$(`#fpersons`).val($(`#fper option:selected`).val())
		})
		
	}
	
	
	
	return{onCreate,festival_list}
})()
