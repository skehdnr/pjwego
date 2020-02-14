"use strict"
var hotelPay = hotelPay || {}
hotelPay = (()=>{
	const WHEN_ERR = '호출하는 hotelPay js를 찾을 수 없습니다 .'
	let js, routerjs, mainVuejs, hotelMainVuejs, hotelHomejs,hotelComparejs, hotelPayVuejs,hotelEndjs;
	let hoteldetailjs
    let init=()=>{
        js = $.js()
        routerjs = js+'/cmm/router.js'
      	mainVuejs = js+'/vue/mainVue.js'
      	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
      	hotelHomejs = js+'/hotel/hotelHome.js'
      	hotelComparejs = js+'/hotel/hotelCompare.js'
      	hotelEndjs = js+'/hotel/hotelEnd.js'
      	hotelPayVuejs = js+'/hotel/hVue/hotelPayVue.js'
      	hoteldetailjs - js + `/hotel/hotelDetail.js`

    }
    let onCreate=()=>{
    	init();
    	$.when(
                $.getScript(mainVuejs),
                $.getScript(routerjs),
                $.getScript(hotelHomejs),	
                $.getScript(hotelComparejs),
                $.getScript(hotelEndjs),
                $.getScript(hotelPayVuejs),
                $.getScript(hoteldetailjs)
    	).done(()=>{
          
            setContentView()
            hotelEndgo()
          booking()
            kakaoPay()
            
           
    	}).fail(()=>{
    		alert(WHEN_ERR)
    	})
    	
    }
    let setContentView=()=>{
    
		 let x = {css:$.css(),img:$.img()}
		$('#mainbody').html(hotelPayVue.hPay_body(x))
		 $('html').scrollTop(0);
		 userinfo()
		 booking()
    	
    }
    let hotelEndgo=()=>{
		$('#book').click(e=>{
			e.preventDefault() 
			hotelEnd.onCreate()
		})
	}
    
    let kakaoPay=()=>{
    	$('#check_module').click(e=>{
    	e.preventDefault()
    		 location.href = 'http://localhost:8080/web/payment';
    		
            
    	})
    }
    let userinfo=()=>{
    	let x = {uname: sessionStorage.getItem('UNAME'),
    			tel: sessionStorage.getItem('TEL'),
    			birth: sessionStorage.getItem('BIRTH'),
    			indate: localStorage.getItem('INDATE'),
    	    	outdate: localStorage.getItem('OUTDATE')}
    	$('#mainbody').html(hotelPayVue.hPay_body(x))
    }
    let booking=()=>{
    	userinfo()
    	$('#book').click(e=>{
    		e.preventDefault()
    		alert('예약완료!!')
    		
    		let data = {
    			indate: localStorage.getItem('INDATE'),
    			outdate:localStorage.getItem('OUTDATE'),
    			hseq:$('#Hotelhseq').val(),
    			rseq:$('#Hotelrseq').val(),
    			price:$('#Hotelprice').val(),
    			uid: sessionStorage.getItem(`UID`)
    			}
    		alert(localStorage.getItem('INDATE'))
    		alert(localStorage.getItem('OUTDATE'))
    		alert($('#Hotelhseq').val()+"호텔 알럿")
    		alert($('#Hotelrseq').val()+"룸 알럿")
    		alert($('#Hotelprice').val()+"가격 알럿")
    		alert(sessionStorage.getItem(`UID`))
    		$.ajax({
    			url : '/hotel/insert/reservationDB',
    			type : 'POST',
    			dataType : 'json',
    	    	data : JSON.stringify(data),
    	    	contentType : 'application/json',
    	    	success : d=>{
    	    		if(d.msg === 'SUCCESS'){
    	    			hotelEnd.onCreate()
	    			}else
	    				alert('예약을 다시 시도해주세요')
    	    	},
    	    	error : e=>{
    	    		alert('ajax 실패....')
    	    		
    	    	}
    		})
    		if(!$(`input[name="termsFormField.agreeToTerms"]:checked`)){
    			alert('동의 체크해주세요.')
    		}
    	})
    }
    
    return {onCreate, booking}
})();