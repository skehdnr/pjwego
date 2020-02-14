"use strict"
var hotelHome = hotelHome || {}
hotelHome = (()=>{
	const WHEN_ERR = '호출하는 hotelHome js를 찾을 수 없습니다 .'
	let context, js, routerjs, hotelMainVuejs, mainVuejs,hotelDetailjs, search;
	let init =()=>{
		context = $.ctx()
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
    	$.getJSON(context+'/hotel/list', d=>{
    		let h = d.hotel
    		let h2 = d.hotel2
    		
    		
    		$.each(h, (i,j)=>{
    			$(`<div class="col-lg-6 col-md-6">  
    						<div class="single_place"> 
    							<img src="${j.hotelimg}" alt="" style="min-inline-size:-webkit-fill-available">  
    							<div class="hover_Text d-flex align-items-end justify-content-between"> 
    								<div class="hover_text_iner"> 
    								 <a id="id${j.hseq}" href="#" class="place_btn"><img src="${j.hotelimg}" alt=""></a> <h3>${j.hotelname}</h3> 
    								 <p>${j.haddr}</p>  
    								 <div class="place_review">   
    								 	<a href="#"><i class="fas fa-star"></i></a> 
    								 		<a href="#"><i class="fas fa-star"></i></a> 
    								 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<a href="#"><i class="fas fa-star"></i></a>   
    							 	 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<span>${j.rating}</span></div></div> 
    								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`)
    					.appendTo('#hotelList')
    					$('#id'+j.hseq).click(e=>{
        		e.preventDefault()
        		hotelDetail.roomList({hseq:j.hseq})
        	})
    		})
    		$('#first_rating').click(e=>{
    			e.preventDefault()
    			$('#hotelList').empty()
    			$.each(h, (i,j)=>{
    			$(`<div class="col-lg-6 col-md-6">  
    						<div class="single_place"> 
    							<img src="${j.hotelimg}" alt="" style="min-inline-size:-webkit-fill-available">  
    							<div class="hover_Text d-flex align-items-end justify-content-between"> 
    								<div class="hover_text_iner"> 
    								 <a id="id${j.hseq}" href="#" class="place_btn"><img src="${j.hotelimg}" alt=""></a> <h3>${j.hotelname}</h3> 
    								 <p>${j.haddr}</p>  
    								 <div class="place_review">   
    								 	<a href="#"><i class="fas fa-star"></i></a> 
    								 		<a href="#"><i class="fas fa-star"></i></a> 
    								 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<a href="#"><i class="fas fa-star"></i></a>   
    							 	 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<span>${j.rating}</span></div></div> 
    								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`)
    					.appendTo('#hotelList')
    					$('#id'+j.hseq).click(e=>{
        		e.preventDefault()
        		hotelDetail.roomList({hseq:j.hseq})
        	})
    		})
    		$('#first_price').click(e=>{
    			e.preventDefault()
    			$('#hotelList').empty()
    			$.each(h2, (i,j)=>{
    			$(`<div class="col-lg-6 col-md-6">  
    						<div class="single_place"> 
    							<img src="${j.hotelimg}" alt="" style="min-inline-size:-webkit-fill-available">  
    							<div class="hover_Text d-flex align-items-end justify-content-between"> 
    								<div class="hover_text_iner"> 
    								 <a id="id${j.hseq}" href="#" class="place_btn"><img src="${j.hotelimg}" alt=""></a> <h3>${j.hotelname}</h3> 
    								 <p>${j.haddr}</p>  
    								 <div class="place_review">   
    								 	<a href="#"><i class="fas fa-star"></i></a> 
    								 		<a href="#"><i class="fas fa-star"></i></a> 
    								 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<a href="#"><i class="fas fa-star"></i></a>   
    							 	 	<a href="#"><i class="fas fa-star"></i></a>  
    								 	<span>${j.rating}</span></div></div> 
    								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`)
    					.appendTo('#hotelList')
    					$('#id'+j.hseq).click(e=>{
        		e.preventDefault()
        		hotelDetail.roomList({hseq:j.hseq})
        	})
    		})
    		})
    		
    		})
    		
    	})
    }

    let hotelTableCreate=()=>{

		$('#tablebtn').click(e=>{
			e.preventDefault()

			 
		/*	$.getJSON(context+'/hotel/create/hoteltable/',d=>{
				alert("hoteltable성공:"+d.msg)
				//hotel table 생성
			})*/
			
			/*   $.getJSON(context+'/hotel/insert/hotelDB/',d=>{
				alert("성공:"+d.msg)
				//hotel db 생성
			})  */
			
			/*      $.getJSON(context+'/hotel/create/roomtable/',d=>{
				alert("roomtable성공:"+d.msg)
				//room table 생성
			})  */
			
			/*  $.getJSON(context+'/hotel/insert/roomdb/',d=>{
				alert("성공:"+d.msg)})*/
			
			/*$.getJSON(context+'/hotel/create/commentstable/',d=>{
				alert("commentstable 성공:"+d.msg) })*/
				
			/*	$.getJSON(context+'/hotel/insert/commentsDB/',d=>{
				alert("commentsDB 성공:"+d.msg) })*/
			
			/*	$.getJSON(context+'/hotel/create/reservationtable/',d=>{
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

          $.getJSON(context + '/hotel/search/' + $('#harea').val(), d => {
        	  alert(d.hotel)
              alert('검색 ' + $('#harea').val())
              $('#hotelList').empty()
              $.each(d, (i, j) => {
                  $(`<div class="col-lg-6 col-md-6">  
  						<div class="single_place"> 
							<img src="${j.hotelimg}" alt="" style="min-inline-size:-webkit-fill-available">  
							<div class="hover_Text d-flex align-items-end justify-content-between"> 
								<div class="hover_text_iner"> 
								 <a id="id${j.hseq}" href="#" class="place_btn"><img src="${j.hotelimg}" alt=""></a> <h3>${j.hotelname}</h3> 
								 <p>${j.haddr}</p>  
								 <div class="place_review">   
								 	<a href="#"><i class="fas fa-star"></i></a> 
								 		<a href="#"><i class="fas fa-star"></i></a> 
								 	<a href="#"><i class="fas fa-star"></i></a>  
								 	<a href="#"><i class="fas fa-star"></i></a>   
							 	 	<a href="#"><i class="fas fa-star"></i></a>  
								 	<span>${j.rating}</span></div></div> 
								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`).appendTo('#hotelList')
                	$('#id'+j.hseq).click(e=>{
        		e.preventDefault()
        		hotelDetail.roomList({hseq:j.hseq})
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
	  $.getJSON(context + '/hotel/location/'+$('#location').val(), d=>{
		  let h = d.hotel
		  alert($('#location').val() + "떠라떠라")
		
		  	$(this).val({h}).prop("selected", true);
			   $.each(h, (i,j)=>{
		  			$(`<div class="col-lg-6 col-md-6">  
		  						<div class="single_place"> 
		  							<img src="${j.hotelimg}" alt="" style="min-inline-size:-webkit-fill-available">  
		  							<div class="hover_Text d-flex align-items-end justify-content-between"> 
		  								<div class="hover_text_iner"> 
		  								 <a id="id${j.hseq}" href="#" class="place_btn"><img src="${j.hotelimg}" alt=""></a> <h3>${j.hotelname}</h3> 
		  								 <p>${j.haddr}</p>  
		  								 <div class="place_review">   
		  								 	<a href="#"><i class="fas fa-star"></i></a> 
		  								 		<a href="#"><i class="fas fa-star"></i></a> 
		  								 	<a href="#"><i class="fas fa-star"></i></a>  
		  								 	<a href="#"><i class="fas fa-star"></i></a>   
		  							 	 	<a href="#"><i class="fas fa-star"></i></a>  
		  								 	<span>${j.rating}</span></div></div> 
		  								 	<div class="details_icon text-right"> <h3>${j.price}원</h3></div></div></div></div>`)
		  					.appendTo('#hotelList')
		  					$('#id'+j.hseq).click(e=>{
		      		e.preventDefault()
		      		hotelDetail.roomList({hseq:j.hseq})
		      	})
		  		})
		  	// OR option 순서값으로 선택
		  	$(this).find("option:eq(0)").prop("selected", true);
		  });

		
	  })
	    
  }

	return{onCreate}
		
})();
