"use strict"
var hotelDetail = hotelDetail || {}
hotelDetail = (()=>{
	const WHEN_ERR = `호출하는 hotelDetail js를 찾을 수 없습니다 .`
	        let js;
	        let routerjs;
	        let mainVuejs, hotelMainVuejs, hotelHomejs, hotelPayjs,hotelmapVue,loginjs,login_vuejs,mappageVuejs,mapjs;
	       let hotelpayjs
	        let init=()=>{
	            js = $.js()
	            routerjs = js+`/cmm/router.js`
	          	mainVuejs = js+`/vue/mainVue.js`
	          	hotelMainVuejs = js+`/hotel/hVue/hotelMainVue.js`
	          	hotelHomejs = js+`/hotel/hotelHome.js`
	          	hotelPayjs = js + `/hotel/hotelPay.js`
							hotelmapVue = js+ `/hotel/hVue/hotelMapVue.js`
							loginjs = js + `/withcs/login.js`
							login_vuejs = js + `/withcsvue/login_vue.js`
							mappageVuejs = js + `/tourism/mappageVue.js`
							mapjs = js + `/crew/js/map.js`
							hotelpayjs = js+`/hotel/hotelPay`
				
	        }
	        let onCreate=()=>{
	        	init();
	        	$.when(
	                    $.getScript(mainVuejs),
	                    $.getScript(routerjs),
	                    $.getScript(hotelHomejs),
	                    $.getScript(hotelPayjs),
	                    $.getScript(hotelmapVue),
	                    $.getScript(loginjs),
	                    $.getScript(login_vuejs),
	                    $.getScript(mappageVuejs),
	                    $.getScript(mapjs),
	                    $.getScript(hotelpayjs)
	               
	        	).done(()=>{
	                setContentView()
	                gpa()
	               
	                roomList()
									insertComment()
									hotelMap()
	              
	        	}).fail(()=>{
	        		alert(WHEN_ERR)
	        	})
	        }
	        let setContentView=()=>{ 	
	            let x = {css:$.css(),img:$.img()}
	    		$(`#mainbody`).html(hotelDetailVue.hDetail_body(x))
	    		 $(`html`).scrollTop(0);
	        }
	    	 
	    	let roomList=x=>{
	    		$(`#mainbody`).html(hotelDetailVue.hDetail_body(x))
	    		 $(`html`).scrollTop(0);
	    		
	    		$.getJSON(`/hotel/roomlist/`+x.hotel_seq, d=>{	
	    			let hotel = d.hotel
	    			let room = d.room
	    			let c = d.comments
	    			let e = parseInt(c.rating)
						let m = d.hotelMap
						let lat = m.latitude
					let long = m.longitude
					let place = m.hotel_name

	    			
	    			$(	` <div class="main_1 main_common1" style="background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%; display:inline-table;  float: left; width: 700px; height: 300px; border: 1px solid #bcbcbc; >
	    					          <p class="content"><img style="height: inherit; width:inherit;" id="img" src="${hotel.hotel_img}"/></p>
	    					        </div>
	    					          <div class="main_2 main_common2"  style= display:inline-table; float: left; width: 430px; height: 300px;  border: 1px solid #bcbcbc; >
	    					            <div class="content3"><h2 style="font-weightbolder">${hotel.hotel_name}</h2></div>
	    					            <div class="content3"><h2 style="font-weightbolder">${hotel.hotel_addr}</br></h2><h4>[Tel: ${hotel.tel}]</h4></div>
	    					          <a id="detailmap" href="#"><div class="content3" id="hotelmap"></div></a>
	    					          </div>`).appendTo(`#main1`)
						
						
	    			let mapContainer = document.getElementById(`hotelmap`),
			
            mapOption = {
                center: new kakao.maps.LatLng(lat, long), 
                level: 5
            };
        let map = new kakao.maps.Map(mapContainer, mapOption);
        let markerPosition = new kakao.maps.LatLng(lat, long)
        
        let positions =[
        	{title: place, latlng: new kakao.maps.LatLng(lat, long)}
        	];   
        
        let imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
       
        for(let i = 0; i < positions.length; i++) {
        	let imageSize = new kakao.maps.Size(24,35);
        	let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        	
        	 let marker = new kakao.maps.Marker({
        		 map:map,
                 position: positions[i].latlng,
                 title : positions[i].title,
                 image : markerImage,
                 clickable: true
             });
        	 
        	
        	let iwContent = `<div style="padding:5px; color:black;">Here!</div>`,
        		iwRemoveable = true
        	
        	let infowindow = new kakao.maps.InfoWindow({
        		content : iwContent,
        		removable : iwRemoveable
        	})
        	
        	kakao.maps.event.addListener(marker, `click`, function(){
        		infowindow.open(map, marker);
        	})
        }
	    		
$(`#detailmap`).click(e=>{
		e.preventDefault()
		$(`#myModal`).empty()

		$(`<div id="myModal" class="modal">
				  <!-- Modal content -->
				  <div class="modal-content">
				    <span class="close" style="text-align:right;">&times;</span>
						 <div id="modal_map" style="width:800px;height:800px;">

					</div><br/>
				  </div>
				</div>`).appendTo(`#mainbody`)
					let mapContainer = document.getElementById(`modal_map`),
			
            mapOption = {
                center: new kakao.maps.LatLng(lat, long), 
                level: 5
            };
        let map = new kakao.maps.Map(mapContainer, mapOption);
        let markerPosition = new kakao.maps.LatLng(lat, long)
        
        let positions =[
        	{title: place, latlng: new kakao.maps.LatLng(lat, long)}
        	];   
        
        let imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
       
        for(let i = 0; i < positions.length; i++) {
        	let imageSize = new kakao.maps.Size(24,35);
        	let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        	
        	 let marker = new kakao.maps.Marker({
        		 map:map,
                 position: positions[i].latlng,
                 title : positions[i].title,
                 image : markerImage,
                 clickable: true
             });
        	 
        	
        	let iwContent = `<div style="padding:5px; color:black;">Here!</div>`,
        		iwRemoveable = true
        	
        	let infowindow = new kakao.maps.InfoWindow({
        		content : iwContent,
        		removable : iwRemoveable
        	})
        	
        	kakao.maps.event.addListener(marker, `click`, function(){
        		infowindow.open(map, marker);
        	})
        }

		const modal = document.getElementById("myModal");
		modal.style.display = "block";
		const span = document.getElementsByClassName("close")[0];
		span.onclick = function() {
			  modal.style.display = "none";
			}
		window.onclick = function(event) {
			  if (event.target == modal) {
			    modal.style.display = "none";
			  }
			}			
	})						
	    				   $(`<div class="detail_head"><h2 style=" text-align: center;">${hotel.hotel_name}</h2></div><div style="text-align-last: right">  <h4 id="star">총 평점 : [ ${c.rating} ] </h4> </div>
    		    			<div class="detail_hotelinfo"><h3 style=" text-align: center;">${hotel.hotel_info}</h3></div>`)
    		    			.appendTo(`#main4`)
    		    			for(let t=1; t<=e/2; t++){
    		    				$(`<img style="width: 30px;height: 30px;" src="/resources/wegoimg/hotel/star.png">`).appendTo(`#star`)
    		    			}
	    					$(`<ul class="hotelnavi">
								  <li><a id="room" href="#home">객실</a></li>
								  <li><a id="contact" href="#contact">정책</a></li>
								  <li><a id="about" href="#about">이용후기</a></li>
								</ul>`).appendTo(`#main5`)

	    				$.each(room, (i,j)=>{
	    				
		    					$(`<div class="content2" id="home">
	    									 <div id="inner" class="inner" style="background-image: url(${j.room_img});"></div>
	    									<div class="inner2">
	    									<h2 id="room_type_${i}">${j.room_type}</h2>
												<h5 id="room_seq_${i}">${j.room_seq}</h5>
	    									<span id="price_div"><h3 id="payment_${i}">${j.price}</h3>원</span>
	    									 <button id="hPaygo_${i}" type="button" class="genric-btn primary radius" style="inline-size:-webkit-fill-available; font-size: x-large;"> 예약</button>
	    									 </div>
												 </div>`).appendTo(`#main3`)
											
					$(`#hPaygo_`+i).click(e=>{
	    			e.preventDefault()
	    		alert($(`#hotel_seq_`+i).text())
						 localStorage.setItem(`room_type`, $(`#room_type_`+i).text());
						 localStorage.setItem(`room_seq`, $(`#room_seq_`+i).text());
						 localStorage.setItem(`payment`, $(`#payment_`+i).text()*localStorage.getItem(`total`));
					
	    			if(sessionStorage.getItem(`userid`) != null){
	    				hotelPay.booking()
	    			}else{
	    				alert("로그인을 해주세요")
	    				$(`#mainbody`).html(login_vue.login_body())
	    				 $(`html`).scrollTop(0);
	    				login.userlogin()
	    			}
	    			
	    		})
	    				})

    				$(`#room`).click(e=>{
    					e.preventDefault()
    					$(`#main3`).empty()
    						$.each(room, (i,j)=>{
	    					console.log(j)
	    					
		    					$(`<div class="content2" id="home">
	    									 <div id="inner" class="inner" style="background-image: url(${j.room_img});"></div>
	    									<div class="inner2">
	    									<h2 id="room_type_${i}">${j.room_type}</h2>
												<h5 id="room_seq_${i}">${j.room_seq}</h5>
	    									<span id="price_div"><h3 id="payment_${i}">${j.price}</h3>원</span>
	    									 <button id="hPaygo1_${i}" type="button" class="genric-btn primary radius" style="inline-size:-webkit-fill-available; font-size: x-large;"> 예약</button>
	    									 </div>
												 </div>`).appendTo(`#main3`)
												
						$(`#hPaygo1_`+i).click(e=>{
	    			e.preventDefault()
						  
						 localStorage.setItem(`room_type`, $(`#room_type_`+i).text());
						 localStorage.setItem(`room_seq`, $(`#room_seq_`+i).text());
						 localStorage.setItem(`payment`, $(`#payment_`+i).text()*localStorage.getItem(`total`));
	    			if(sessionStorage.getItem(`userid`) != null){
	    				hotelPay.booking()
	    			}else{
	    				alert("로그인을 해주세요")
	    				$(`#mainbody`).html(login_vue.login_body())
	    				 $(`html`).scrollTop(0);
	    				login.userlogin()
	    			}
	    			
	    		})
	    				})

							
	    			
    				})
	    			$(`#contact`).click(e=>{
	    				e.preventDefault()
    					$(`#main3`).empty().append(refund())
    				})
	    			$(`#about`).click(e=>{
	    				e.preventDefault()
							$(`#main3`).empty()
																		
    					$.getJSON(`/hotel/comments/`+x.hotel_seq,d=>{
								let comments = d.comments
								
    						$.each(comments, (i,j)=>{
    							console.log(j)
    		    			$(`<div id="detail_comments" style="border: 1px solid black; "><h3>${j.user_comment}</h3><h4 style="text-align-last: right"> ----${j.userid}, 평점 : [${j.rating}]</h4></div>`).appendTo(`#main3`)
										
								


										
								})
									$(`<input type="text" id="hotel_comments">
																<select name="select" id="ratingByUser" >
																	<option value="1">1점</option>
																	<option value="2">2점</option>
																	<option value="3">3점</option>
																	<option value="4">4점</option>
																	<option value="5">5점</option>
																	<option value="6">6점</option>
																	<option value="7">7점</option>
																	<option value="8">8점</option>
																	<option value="9">9점</option>
																	<option value="10">10점</option>
																</select>
										<button id="comment_go">등록</button>`).appendTo(`#comment_place`)

				$(`#comment_go`).click(e=>{
					e.preventDefault()
					let data = {
					user_comment: $(`#hotel_comments`).val(),
					rating: $(`#ratingByUser`).val(),
					userid: sessionStorage.getItem(`userid`),
					hotel_seq: x.hotel_seq
				}
		
    		$.ajax({
    			url : `/hotel/insert/hotelComment`,
    			type : `POST`,
    			dataType : `json`,
    	    	data : JSON.stringify(data),
    	    	contentType : `application/json`,
    	    	success : d=>{
    	    		if(d.msg === `SUCCESS`){
								alert("등록되었습니다.")
								
								$.getJSON(`/hotel/newComments/`+x.hotel_seq, d=>{
									
									let new_comments = d.newComment
								
									$.each(new_comments, (i,j)=>{
									$(`<div id="detail_comments" style="border: 1px solid black; "><h3>${j.user_comment}</h3><h4 style="text-align-last: right"> ----${j.userid}, 평점 : [${j.rating}]</h4></div>`).appendTo(`#main3`)
									
									})
								})
								
	    			}else
	    				alert(`다시 시도해주세요`)
    	    	},
    	    	error : e=>{
    	    		alert(`ajax 실패....`)
    	    		
    	    	}
				})

				
				})
    						 
							})
							
								

    					
    					
    				})
	    				
	    		

	    		})
	    		
	    	}
	    	
	    let refund=()=>{
	    	$(`<div id="menu1" class="detail_refund>
				      <h1 style="font-weight: bold;">정책</h1>
				<p>------------------------------------------------------------------------------------------</p>
				<h4>환불 불가</h4></br>
				<p>예약이 확정되면 취소/변경이 불가능합니다.체크인하지 않을 경우 노쇼(No-show)로 간주되며, 예약 총 금액(000,000원)이 부과됩니다.</p></br>
				<h4>결제방법</h4></br>
				<p>객실 확보를 위해 신용카드가 사전승인되거나, 객실 요금과 동일한 요금이 결제됩니다. 예약가능한 객실이 없는 경우에는 전액 환불됩니다.</p></br>
				<p>기간 이후 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</p></br>
				<h4>No refund</h4></br>
				<p>Once the reservation is confirmed, you cannot cancel/change it.Failure to check in will result in no-show and a total booking of 000,000 will be charged.</p></br>
				<h4>Payment method</h4></br>
				<p>To secure a room, your credit card will be approved in advance, or you will be charged the same rate as your room rate. If you do not have a room available for reservation, you will receive a full refund.</p></br>
				<p>If you change or cancel your reservation after the period, you will be charged a one-night fee (including tax).</p></br>
				    </div>`).appendTo(`#main3`)
	    }
	    

	        return{onCreate, roomList}
})();