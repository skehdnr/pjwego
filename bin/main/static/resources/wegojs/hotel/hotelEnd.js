"use strict"
var hotelEnd = hotelEnd || {}
hotelEnd = (()=>{
	const WHEN_ERR = `호출하는 hotelEnd js를 찾을 수 없습니다 .`
		let js, routerjs, mainVuejs, hotelMainVuejs, hotelHomejs,hotelComparejs,hotelEndVuejs, hotelPayjs ;
	    let init=()=>{
	        js = $.js()
	        routerjs = js+`/cmm/router.js`
	      	mainVuejs = js+`/vue/mainVue.js`
	      	hotelMainVuejs = js+`/hotel/hVue/hotelMainVue.js`
	      	hotelHomejs = js+`/hotel/hotelHome.js`
	      	hotelComparejs = js+`/hotel/hotelCompare.js`
	      	hotelPayjs = js+`/hotel/hotelPay.js`
	      	hotelEndVuejs = js+`/hotel/hVue/hotelEndVue.js`
	    }
	    let onCreate=()=>{
	    	init();
	    	$.when(
	                $.getScript(mainVuejs),
	                $.getScript(routerjs),
	                $.getScript(hotelHomejs),
	                $.getScript(hotelComparejs),
	                $.getScript(hotelPayjs),
	                $.getScript(hotelComparejs),
	                $.getScript(hotelEndVuejs)
	           
	    	).done(()=>{
	            
	            setContentView()
	            hotelmaingo()
	           bookList()
	           
	    	}).fail(()=>{
	    		alert(WHEN_ERR)
	    	})	    	
	    }
	    let setContentView=()=>{
            let x = {css:$.css(),img:$.img()}
    		$(`#mainbody`).html(hotelEndVue.hEnd_body(x))
    		 $(`html`).scrollTop(0);
	    }
	    let hotelmaingo=()=>{
	    	$(`#maingo`).click(e=>{
	    		e.preventDefault()
	    		hotelHome.onCreate()
	    	})
	    }
	   let bookList=()=>{
		   let x = {
    				checkin_date: localStorage.getItem(`checkin_date`),
					checkout_date:localStorage.getItem(`checkout_date`),
					room_type: localStorage.getItem(`room_type`),
					payment:localStorage.getItem(`payment`),
					hotel_name: localStorage.getItem(`hotel_name`),
					userid: sessionStorage.getItem(`userid`),
					username: sessionStorage.getItem(`username`)
					
				}
		   $(`	<h2 >${x.hotel_name}</h2></br>
				<h3 >${x.room_type}</h3></br>
				<h4 >총 결제금액 : ${x.payment}</h4></br>
				<h4 >아이디 : ${x.userid}</h4></br>
				<h4 >이름 : ${x.username}</h4></br>
						
				<p>*특별 요청 사항(예: 간이 침대, 늦은 체크인)을 자세히 포함해 주세요. 요청하신 사항을 호텔이 제공할 수 있는지 확인 후 24시간 이내에 고객님께 메일로 알려드립니다. 24시간이 지나도록 메일을 받지 못하시면 호텔에 직접 문의하거나 호텔에서 다른 대안을 마련할 수 있도록 연락해 주세요. 특별 요청은 항상 보장되지는 않으며, 추가 요금이 발생할 수 있습니다.</p>
				<h2>입실날짜</h2>
			
				<h3 size="50" style="font-size: larger";>${x.checkin_date}</h3> ~ <h3 size="50" style="font-size: larger";>${x.checkout_date}</h3></br>`).appendTo(`#book_list`)
	   }
	    return {onCreate}
})();