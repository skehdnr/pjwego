"use strict"
var tourism = tourism || {}
tourism = (() => {
	const WHEN_ERR = `호출하는 tourism.js 를 찾을 수 없음 `
	let js
	let tourism_Vuejs
	let mainHomejs
	let mainVuejs
	let mappagejs
	let mapjs
	let init = () => {
		js = $.js()
		tourism_Vuejs = js + `/tourism/tourismVue.js`
		mainHomejs = js + `/cmm/mainHome.js`
		mainVuejs = js + `/vue/mainVue.js`
		mappagejs = js + `/tourism/mappage.js`
		mapjs = js + `/crew/js/map.js`
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(tourism_Vuejs),
			$.getScript(mappagejs),
			$.getScript(mapjs)
		).done(() => {
			setContentView()
			createtable()
			inserttourism()
			
			tourList()
			
		map.onCreate()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		let x = {css:$.css(),img:$.img()}
		$(`#mainbody`).html(tourismVue.tourism_body())
		 $(`html`).scrollTop(0);
		
	}

	
	let createtable=()=>{
		$(`#createtourism`).click(()=>{
			$.getJSON(`/tourism/create/table`,d=>{
			})
		})
	}
	let createliketable=()=>{
		$(`#createlike`).click(()=>{
			$.getJSON(`/tourism/likeplace`,d=>{
			})
		})
	}
	let inserttourism=()=>{
		$(`#dummy`).click(()=>{
			$.getJSON(`/tourism/insert/dummy`,d=>{
			})
		})
	}

	
	let tourList =()=>{
		
	$.getJSON(`/tourism/list`, d=>{
		let t = d.tour
	
		
		
		$.each(t, (i,j) =>{

			$(`<div class="content2" id="home">
					 <div id="inner" class="inner" style="background-image: url(${j.tourimg});"></div>
					<div class="inner2">
					
					<h1 id="tourName">${j.tour_name}</h1>
					<div id="tourinfo" value=""><h3>${j.tour_addr}</h3></div>
					<div id="tourTag" value=""><h4>${j.tel}</h4></div>
					<button class="genric-btn primary radius" style="inline-size:-webkit-fill-available; font-size: x-large;" id="tour_id_${j.tour_seq}">상세보기</button>				 
					 </div>`).appendTo(`#tourList`)
				
			$(`#tour_id_`+j.tour_seq).click(e=>{
					e.preventDefault()
					let x = {tour_seq:j.tour_seq}
					
			$.getJSON(`/tourism/tourinfo/`+x.tour_seq,d=>{
				$(`#tourInfo`).empty()
				$(`#tourMap`).empty()
					let t2 = d.tourinfo
					let m = d.tourism
					let lat = m.latitude
					let long = m.longitude
					let place = m.tour_name
			$(`<div class="tourInfoTitle" style="text-align: center;"><h2>${t2.tour_name}</h2></div>
					<div class="tourInfoImg"><img src="${t2.tourimg}"></div>
					<div class="tourInfoMain"><h4>${t2.tour_info}</h4></div>`).appendTo(`#tourInfo`)

			let mapContainer = document.getElementById(`tourMap`),
			
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
        	 
        	
        	let iwContent = `<div style="padding:5px; color:red;">Hello World!</div>`,
        		iwRemoveable = true
        	
        	let infowindow = new kakao.maps.InfoWindow({
        		content : iwContent,
        		removable : iwRemoveable
        	})
        	
        	kakao.maps.event.addListener(marker, `click`, function(){
        		infowindow.open(map, marker);
        	})
        }
			})
	
		

	
				})
		})
		let container = document.getElementById(`tourMap`);
		let options = {
			center: new kakao.maps.LatLng(37.553583, 126.969639),
			level: 3
		};
		let map = new kakao.maps.Map(container, options);
		
$(`<ul class="hotelnavi">
								  <li><a id="tour" href="#home">관광지</a></li>
								  <li><a id="weather" href="#about">날씨</a></li>
								</ul>`).appendTo(`#main5`)
				$(`#tour`).click(e=>{
					e.preventDefault()
					$(`#main3`).empty()
					
	let x = {css:$.css(),img:$.img()}
		$(`#mainbody`).html(tourismVue.tourism_body())
		 $(`html`).scrollTop(0);
	
		$(`<ul class="hotelnavi">
								  <li><a id="tour" href="#home">관광지</a></li>
								  <li><a id="weather" href="#about">날씨</a></li>
								</ul>`).appendTo(`#main5`)

		$.each(t, (i,j) =>{
			$(`<div class="content2" id="home">
					 <div id="inner" class="inner" style="background-image: url(${j.tourimg});"></div>
					<div class="inner2">
					
					<h1 id="tourName">${j.tour_name}</h1>
					<div id="tourinfo" value=""><h3>${j.tour_addr}</h3></div>
					<div id="tourTag" value=""><h4>${j.tel}</h4></div>
					<button class="genric-btn primary radius" id="tour_id_${j.tour_seq}">상세보기</button>				 
					 </div>`).appendTo(`#tourList`)
				
			$(`#tour_id_`+j.tour_seq).click(e=>{
					e.preventDefault()
					let x = {tour_seq:j.tour_seq}
			$.getJSON(`/tourism/tourinfo/`+x.tour_seq,d=>{
				$(`#tourInfo`).empty()
				$(`#tourMap`).empty()
					let t2 = d.tourinfo
					let m = d.tourism
					alert(m)
					let lat = m.latitude
					let long = m.longitude
					let place = m.tour_name
			$(`<div class="tourInfoTitle" style="text-align: center;"><h2>${t2.tour_name}</h2></div>
					<div class="tourInfoImg"><img src="${t2.tourimg}"></div>
					<div class="tourInfoMain"><h4>${t2.tour_info}</h4></div>`).appendTo(`#tourInfo`)


			let mapContainer = document.getElementById(`tourMap`),
			
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
        	 
        	
        	let iwContent = `<div style="padding:5px; color:red;">Hello World!</div>`,
        		iwRemoveable = true
        	
        	let infowindow = new kakao.maps.InfoWindow({
        		content : iwContent,
        		removable : iwRemoveable
        	})
        	
        	kakao.maps.event.addListener(marker, `click`, function(){
        		infowindow.open(map, marker);
        	})
        }
			})
	
			
			
		


		



	
				})
		})
					
					
				})	
				$(`#weather`).click(e=>{
					e.preventDefault()
					$(`#main3`).empty()
					tour_weather()
					$(`<div id="openweathermap-widget-15"></div>`).appendTo(`#main3`)
				})


	})

				



}

	

	let tour_weather=()=>{
        window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 15,cityid: `1835848`,appid: `1fb33004552be7cdfe718df5afbd67c6`,units: `metric`,containerid: `openweathermap-widget-15`,  });  (function() {var script = document.createElement(`script`);script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName(`script`)[0];s.parentNode.insertBefore(script, s);  })();
    }
	return { onCreate }
})();