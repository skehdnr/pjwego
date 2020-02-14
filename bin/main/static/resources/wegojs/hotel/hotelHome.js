"use strict"
var hotelHome = hotelHome || {}
hotelHome = (()=>{
	const WHEN_ERR = '호출하는 hotelHome js를 찾을 수 없습니다 .'
	let js, routerjs, hotelMainVuejs, mainVuejs,hotelDetailjs, search;
	let init =()=>{
		js = $.js()
        routerjs = js+'/cmm/router.js'
      	mainVuejs = js+'/vue/mainVue.js'
      	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
      	hotelDetailjs = js+'/hotel/hotelDetail.js'
	}
	let onCreate=()=>{
		init();
		$.when(
			$.getScript(mainVuejs),
			$.getScript(routerjs),
			$.getScript(hotelDetailjs),
			$.getScript(hotelMainVuejs)
		).done(()=>{
			setContentView()
			hotelList()
			test()
			hotelTableCreate()
			hotelSearch()
			
			
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
        let x = {css:$.css(),img:$.img()}	
		$('#mainbody').html(hotelMainVue.hmain_body())
		    $('#aa').click(e=>{
			e.preventDefault()
			alert($('#checkIn').val()+"~"+ $('#checkOut').val())
			dateStorage({indate:$('#checkIn').val(), outdate:$('#checkOut').val()})
		})
		
		 $('html').scrollTop(0);	
	}

    let hotelList=x=>{
    	$.getJSON('/hotel/list', d=>{
    		let h = d.hotel
    		let h2 = d.hotel2
	
    		$.each(h, (i,j)=>{
    			$(`<div class="col-lg-6 col-md-6">  
    						<div class="single_place"> 
    							<img src="${j.hotel_img}" alt="" style="min-inline-size:-webkit-fill-available">  
    							<div class="hover_Text d-flex align-items-end justify-content-between"> 
    								<div class="hover_text_iner"> 
    								 <a id="id${j.hotel_seq}" href="#" class="place_btn"><img src="${j.hotel_img}" alt=""></a> <h3>${j.hotel_name}</h3> 
    								 <p>${j.hotel_addr}</p>  
    								 <div class="place_review">   
    								 	<a href="#"><i class="fas fa-star"></i></a> 
    								 		<a href="#"><i class="fas fa-star"></i></a> 
    								 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<a href="#"><i class="fas fa-star"></i></a>   
    							 	 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<span>${j.rating}</span></div></div> 
    								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`)
    					.appendTo('#hotelList')
    					$('#id'+j.hotel_seq).click(e=>{
        		e.preventDefault()
        		hotelDetail.roomList({hotel_seq:j.hotel_seq})
        	})
    		})
    		$('#first_rating').click(e=>{
    			e.preventDefault()
    			$('#hotelList').empty()
    			$.each(h, (i,j)=>{
    			$(`<div class="col-lg-6 col-md-6">  
    						<div class="single_place"> 
    							<img src="${j.hotel_img}" alt="" style="min-inline-size:-webkit-fill-available">  
    							<div class="hover_Text d-flex align-items-end justify-content-between"> 
    								<div class="hover_text_iner"> 
    								 <a id="id${j.hotel_seq}" href="#" class="place_btn"><img src="${j.hotel_img}" alt=""></a> <h3>${j.hotel_name}</h3> 
    								 <p>${j.hotel_addr}</p>  
    								 <div class="place_review">   
    								 	<a href="#"><i class="fas fa-star"></i></a> 
    								 		<a href="#"><i class="fas fa-star"></i></a> 
    								 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<a href="#"><i class="fas fa-star"></i></a>   
    							 	 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<span>${j.rating}</span></div></div> 
    								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`)
    					.appendTo('#hotelList')
    					$('#id'+j.hotel_seq).click(e=>{
        		e.preventDefault()
        		hotelDetail.roomList({hotel_seq:j.hotel_seq})
        	})
    		})
    		$('#first_price').click(e=>{
    			e.preventDefault()
    			$('#hotelList').empty()
    			$.each(h2, (i,j)=>{
    			$(`<div class="col-lg-6 col-md-6">  
    						<div class="single_place"> 
    							<img src="${j.hotel_img}" alt="" style="min-inline-size:-webkit-fill-available">  
    							<div class="hover_Text d-flex align-items-end justify-content-between"> 
    								<div class="hover_text_iner"> 
    								 <a id="id${j.hotel_seq}" href="#" class="place_btn"><img src="${j.hotel_img}" alt=""></a> <h3>${j.hotel_name}</h3> 
    								 <p>${j.hotel_addr}</p>  
    								 <div class="place_review">   
    								 	<a href="#"><i class="fas fa-star"></i></a> 
    								 		<a href="#"><i class="fas fa-star"></i></a> 
    								 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<a href="#"><i class="fas fa-star"></i></a>   
    							 	 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<span>${j.rating}</span></div></div> 
    								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`)
    					.appendTo('#hotelList')
    					$('#id'+j.hotel_seq).click(e=>{
        		e.preventDefault()
        		hotelDetail.roomList({hotel_seq:j.hotel_seq})
        	})
    		})
    		})
    		
    		})
    		
    	})
    }

    let hotelTableCreate=()=>{

		$('#tablebtn').click(e=>{
			e.preventDefault()

			 
		/*	$.getJSON('/hotel/create/hoteltable/',d=>{
				alert("hoteltable성공:"+d.msg)
				//hotel table 생성
			})*/
			
			/*   $.getJSON('/hotel/insert/hotelDB/',d=>{
				alert("성공:"+d.msg)
				//hotel db 생성
			})  */
			
			/*      $.getJSON('/hotel/create/roomtable/',d=>{
				alert("roomtable성공:"+d.msg)
				//room table 생성
			})  */
			
			/*  $.getJSON('/hotel/insert/roomdb/',d=>{
				alert("성공:"+d.msg)}) */
			
			/*$.getJSON('/hotel/create/commentstable/',d=>{
				alert("commentstable 성공:"+d.msg) })*/
				
			/*    	$.getJSON('/hotel/insert/commentsDB/',d=>{
				alert("commentsDB 성공:"+d.msg) }) */
			 
			/*	$.getJSON('/hotel/create/reservationtable/',d=>{
			alert("reservationtable 성공:"+d.msg) })*/
			

		
		})
	}
    
    function dateStorage(x) {
    	  localStorage.setItem('INDATE', x.indate);
    	  localStorage.setItem('OUTDATE', x.outdate);

    	}

  
  let hotelSearch = x => {
      $('#searchbtn').click(e => {
          e.preventDefault()

          $.getJSON('/hotel/search/' + $('#hotel_area').val(), d => {
        	  alert(d.hotel)
              alert('검색 ' + $('#hotel_area').val())
              $('#hotelList').empty()
              $.each(d, (i, j) => {
                  $(`<div class="col-lg-6 col-md-6">  
  						<div class="single_place"> 
							<img src="${j.hotel_img}" alt="" style="min-inline-size:-webkit-fill-available">  
							<div class="hover_Text d-flex align-items-end justify-content-between"> 
								<div class="hover_text_iner"> 
								 <a id="id${j.hotel_seq}" href="#" class="place_btn"><img src="${j.hotel_img}" alt=""></a> <h3>${j.hotel_name}</h3> 
								 <p>${j.hotel_addr}</p>  
								 <div class="place_review">   
								 	<a href="#"><i class="fas fa-star"></i></a> 
								 		<a href="#"><i class="fas fa-star"></i></a> 
								 	<a href="#"><i class="fas fa-star"></i></a>  
								 	<a href="#"><i class="fas fa-star"></i></a>   
							 	 	<a href="#"><i class="fas fa-star"></i></a>  
								 	<span>${j.rating}</span></div></div> 
								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`).appendTo('#hotelList')
                	$('#id'+j.hotel_seq).click(e=>{
        		e.preventDefault()
        		hotelDetail.roomList({hotel_seq:j.hotel_seq})
        	})
                  $(window).unbind('scroll')
              })



          })



      })
  }
  let test =x=>{

	  let target = document.getElementById("location");
		  //alert('선택된 옵션 value 값=' + target.options[target.selectedIndex].value);

		  $("#location").on("change", function(){
		  	// value 값으로 선택
		  	alert("옵션선택")
			  $('#hotelList').empty()
	  $.getJSON('/hotel/location/'+$('#location').val(), d=>{
		  let h = d.hotel
		  alert($('#location').val() + "떠라떠라")
		
		  	$(this).val({h}).prop("selected", true);
			   $.each(h, (i,j)=>{
		  			$(`<div class="col-lg-6 col-md-6">  
		  						<div class="single_place"> 
		  							<img src="${j.hotel_img}" alt="" style="min-inline-size:-webkit-fill-available">  
		  							<div class="hover_Text d-flex align-items-end justify-content-between"> 
		  								<div class="hover_text_iner"> 
		  								 <a id="id${j.hotel_seq}" href="#" class="place_btn"><img src="${j.hotel_img}" alt=""></a> <h3>${j.hotel_name}</h3> 
		  								 <p>${j.hotel_addr}</p>  
		  								 <div class="place_review">   
		  								 	<a href="#"><i class="fas fa-star"></i></a> 
		  								 		<a href="#"><i class="fas fa-star"></i></a> 
		  								 	<a href="#"><i class="fas fa-star"></i></a>  
		  								 	<a href="#"><i class="fas fa-star"></i></a>   
		  							 	 	<a href="#"><i class="fas fa-star"></i></a>  
		  								 	<span>${j.rating}</span></div></div> 
		  								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`)
		  					.appendTo('#hotelList')
		  					$('#id'+j.hotel_seq).click(e=>{
		      		e.preventDefault()
		      		hotelDetail.roomList({hotel_seq:j.hotel_seq})
		      	})
		  		})
		  	// OR option 순서값으로 선택
		  	$(this).find("option:eq(0)").prop("selected", true);
		  });

		
	  })
	    
  }

	return{onCreate}
		
})();
