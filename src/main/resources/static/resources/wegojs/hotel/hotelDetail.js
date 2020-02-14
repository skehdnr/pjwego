"use strict"
var hotelDetail = hotelDetail || {}
hotelDetail = (()=>{
	const WHEN_ERR = '호출하는 hotelDetail js를 찾을 수 없습니다 .'
	        let context, js;
	        let routerjs;
	        let mainVuejs, hotelMainVuejs, hotelHomejs,hotelComparejs, hotelPayjs,hotelmapVue,loginjs,login_vuejs,mappageVuejs,mapjs;
	       let hotelpayjs
	        let init=()=>{
	            context = $.ctx()
	            js = $.js()
	            routerjs = js+'/cmm/router.js'
	          	mainVuejs = js+'/vue/mainVue.js'
	          	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
	          	hotelHomejs = js+'/hotel/hotelHome.js'
	          	hotelComparejs = js+'/hotel/hotelCompare.js'
	          	hotelPayjs = js + '/hotel/hotelPay.js'
				hotelmapVue = js+ '/hotel/hVue/hotelMapVue.js'
				loginjs = js + '/withcs/login.js'
				login_vuejs = js + '/withcsvue/login_vue.js'
				mappageVuejs = js + '/tourism/mappageVue.js'
				mapjs = js + '/crew/js/map.js'
				hotelpayjs = js+`/hotel/hotelPay`
				
	        }
	        let onCreate=()=>{
	        	init();
	        	$.when(
	                    $.getScript(mainVuejs),
	                    $.getScript(routerjs),
	                    $.getScript(hotelHomejs),
	                    $.getScript(hotelComparejs),
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
	                compare()
	                roomList()
	                map.onCreate()
	              
	        	}).fail(()=>{
	        		alert(WHEN_ERR)
	        	})
	        }
	        let setContentView=()=>{ 	
	            let x = {css:$.css(),img:$.img()}
	    		$('#mainbody').html(hotelDetailVue.hDetail_body(x))
	    		 $('html').scrollTop(0);
	        }
	    	let hotelComparego=()=>{
	    		$('#detailgo').click(e=>{
	    			e.preventDefault()
	    		})
	    	}
	    	 
	    	let roomList=x=>{
	    		$('#mainbody').html(hotelDetailVue.hDetail_body(x))
	    		 $('html').scrollTop(0);
	    		
	    		context = $.ctx()
	    		$.getJSON(context+'/hotel/roomlist/'+x.hseq, d=>{	
	    			let hotel = d.hotel
	    			let room = d.room
	    			let c = d.comments
	    			let e = parseInt(c.rating)
	    			let m = d.hotelMap
	    			alert(x.hseq)
	    			/*alert (m.latitude)
	    			alert (m.longitude)
	    			let res = m.latitude +','+ m.longitude
	    			alert(res)*/
	    			/*alert(room)
	    			alert(hotel)
	    			alert(c.rating)
	    			alert(e)
	    			console.log(c)*/
	    		/*	let mapContainer = document.getElementById('map');
			        let mapOption = {
			                center: new kakao.maps.LatLng(res), 
			                level: 5
			            };
			        let map = new kakao.maps.Map(mapContainer, mapOption);
			        alert(map)
			        */
	    			
	    			$(	` <div class="main_1 main_common1" style="background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%; display:inline-table;  float: left; width: 700px; height: 300px; border: 1px solid #bcbcbc; >
	    					          <p class="content"><img style="height: inherit; width:inherit;" id="img" src="${hotel.hotelimg}"/></p>
	    					        </div>
	    					          <div class="main_2 main_common2"  style= display:inline-table; float: left; width: 430px; height: 300px;  border: 1px solid #bcbcbc; >
	    					            <div class="content3"><h2 style="font-weightbolder">${hotel.hotelname}</h2></div>
	    					            <div class="content3"><h2 style="font-weightbolder">${hotel.haddr}</br></h2><h4>[Tel: ${hotel.tel}]</h4></div>
	    					          <div class="content3"><input id="map" type="button" class="btn btn-primary" value="지도"/></div>
	    					          </div>`).appendTo('#main1')
	    			
	    		
$('#map').click(e=>{
		e.preventDefault()
		alert('지도 팝업 ')
		$(`<div id="myModal" class="modal">
				  <!-- Modal content -->
				  <div class="modal-content">
				    <span class="close" style="text-align:right;">&times;</span>
				     <div id="map" style="width:100%;height:100%;">
					</div><br/>
				  </div>
				</div>`).appendTo('#mainbody')
				map.onCreate()

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

	    					         
	    				   $(`<div class="detail_head"><h2 style=" text-align: center;">${hotel.hotelname}</h2></div><div style="text-align-last: right">  <h4 id="star">총 평점 : [ ${c.rating} ] </h4> </div>
    		    			<div class="detail_hotelinfo"><h3 style=" text-align: center;">${hotel.hotelinfo}</h3></div>`)
    		    			.appendTo('#main4')
    		    			for(let t=1; t<=e/2; t++){
    		    				$(`<img style="width: 30px;height: 30px;" src="/web/resources/wegoimg/hotel/star.png">`).appendTo('#star')
    		    			}
	    					$(`<ul class="hotelnavi">
								  <li><a id="room" href="#home">객실</a></li>
								  <li><a id="contact" href="#contact">정책</a></li>
								  <li><a id="about" href="#about">이용후기</a></li>
								</ul>`).appendTo('#main5')
								
								
	    				  
	    				
	    				$.each(room, (i,j)=>{
	    					console.log(j)
	    					
		    					$(`<div class="content2" id="home">
	    									 <div id="inner" class="inner" style="background-image: url(${j.roomimg});"></div>
	    									<div class="inner2">
	    									<h2 id="roomtype">${j.roomtype}</h2>
	    									<div id="Hotelhseq" value="${j.hseq}"><h2>호텔번호 : ${j.hseq}</h2></div>
	    									<div id="Hotelrseq" value="${j.rseq}"><h2>객실번호 : ${j.rseq}</h2></div>
	    									<h2 id="Hotelprice" value="${j.price}">${j.price}원1</h2>	
	    									 <button id="hPaygo" type="button" class="genric-btn primary radius" style="inline-size:-webkit-fill-available; font-size: x-large;"> 예약</button>
	    									 </div>
	    									 </div>`).appendTo('#main3')
	    				})
	    			$('#hPaygo').click(e=>{
	    			e.preventDefault()
	    			
	    			if(sessionStorage.getItem('UID') != null){
	    				hotelPay.booking()
	    			}else{
	    				alert("로그인을 해주세요")
	    				$('#mainbody').html(login_vue.login_body())
	    				 $('html').scrollTop(0);
	    				login.userlogin()
	    			}
	    			
	    		})
    				$('#room').click(e=>{
    					e.preventDefault()
    					$('#main3').empty()
    						$.each(room, (i,j)=>{
	    					console.log(j)
		    				$(`<div class="content2" id="home">
	    						<div id="inner" class="inner" style="background-image: url(${j.roomimg});"></div>
	    						<div class="inner2">
	    						<h2 id="roomtype">${j.roomtype}</h2>
	    						<div id="Hotelhseq1" value="${j.hseq}"><h2>호텔번호 : ${j.hseq}</h2></div>
	    						<div id="Hotelrseq1" value="${j.rseq}"><h2>객실번호 : ${j.rseq}</h2></div>
	    						<h2 id="Hotelprice1">${j.price}원</h2>	
	    						<div id="btn"></div>
	    						</div>
	    						</div>`).appendTo('#main3')
    						$('<button class="hPaygo1" type="button"  > 예약</button>')
    						.click(e=>{
    							e.preventDefault()
    							alert('>>>> '+ $('#roomtype').text())
    							if(sessionStorage.getItem('UID') != null){
    			    				hotelPay.booking()
    			    			}else{
    			    				alert("로그인을 해주세요")
    			    				$('#mainbody').html(login_vue.login_body())
    			    				 $('html').scrollTop(0);
    			    				login.userlogin()
    			    			}
    						}).appendTo('#btn')
    						
	    									
	    				})
	    			
    				})
	    			$('#contact').click(e=>{
	    				e.preventDefault()
    					$('#main3').empty().append(refund())
    				})
	    			$('#about').click(e=>{
	    				e.preventDefault()
    					$('#main3').empty()
    					$.getJSON(context+'/hotel/comments/'+x.hseq,d=>{
    			
    						let comments = d.comments
    						$.each(comments, (i,j)=>{
    							console.log(j)
    		    				$(`<div id="detail_comments"><h3>${j.hcomments}</h3><h4 style="text-align-last: right"> ----${j.uid}, 평점 : [${j.rating}]</h4></div>`).appendTo('#main3')
    		    				
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
				    </div>`).appendTo('#main3')
	    }
	    
	    let hotelMap=()=>{
			$('#mainbody').html(mappageVue.mappageVue_body())
			$('html').scrollTop(0)
	    }
	    let mapfun = () => {
	        let mapContainer = document.getElementById('map'),
	            mapOption = {
	                center: new kakao.maps.LatLng(37.510275, 127.043892), 
	                level: 5
	            };
	        let map = new kakao.maps.Map(mapContainer, mapOption);
	        let markerPosition = new kakao.maps.LatLng(37.510275, 127.043892)
	        

	        
	    }
	        return{onCreate, roomList}
})();