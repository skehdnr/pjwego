"use strict"
var tourism = tourism || {}
tourism = (() => {
	const WHEN_ERR = '호출하는 tourism.js 를 찾을 수 없음 '
	let context, js
	let tourism_Vuejs
	let mainHomejs
	let mainVuejs
	let mappagejs
	let mapjs
	let init = () => {
		context = $.ctx()
		js = $.js()
		tourism_Vuejs = js + '/tourism/tourismVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		mainVuejs = js + '/vue/mainVue.js'
		mappagejs = js + '/tourism/mappage.js'
		mapjs = js + '/crew/js/map.js'
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
			mapfun()
			tourList()
			
		map.onCreate()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$('#mainbody').html(tourismVue.tourism_body())
	}

	
	let createtable=()=>{
		$('#createtourism').click(()=>{
			$.getJSON(context+'/tourism/create/table',d=>{
				alert('만들어져랏')
			})
		})
	}
	let createliketable=()=>{
		$('#createlike').click(()=>{
			$.getJSON(context+'/tourism/likeplace',d=>{
				alert('만들어저랏')
			})
		})
	}
	let inserttourism=()=>{
		$('#dummy').click(()=>{
			$.getJSON(context+'/tourism/insert/dummy',d=>{
				alert('만들어져랏')
			})
		})
	}

	
let tourList =()=>{
	$.getJSON(context+'/tourism/list', d=>{
		let index = [1,2,3,4]
		let t = d.tour
		console.log(t)
		
		$.each(t, (i,j) =>{

			$(`<div class="content2" id="home">
					 <div id="inner" class="inner" style="background-image: url(${j.tourImg});"></div>
					<div class="inner2">
					<h1 id="tourName">${j.tourName}</h1>
					<div id="tourinfo" value=""><h4>${j.tourAddr}</h4></div>
					<div id="tourTag" value=""><h5>${j.tel}</h5></div>				 
					 </div>`).appendTo('#tourList')
		})
		
	})
}



	
	

	
	let mapfun = () => {
        let mapContainer = document.getElementById('tourMap'),
            mapOption = {
                center: new kakao.maps.LatLng(37.510275, 127.043892), 
                level: 5
            };
        let map = new kakao.maps.Map(mapContainer, mapOption);
        let markerPosition = new kakao.maps.LatLng(37.510275, 127.043892)
        
        let positions =[
        	{title:'코엑스스타필드', latlng: new kakao.maps.LatLng(37.512287, 127.059076)},
        	{title:'LG아트센터', latlng: new kakao.maps.LatLng(37.502252,127.037525)},
        	{title:'도산공원', latlng: new kakao.maps.LatLng(37.524651, 127.035367)},
        	{title:'피규어뮤지엄W', latlng: new kakao.maps.LatLng(37.525781, 127.040367)},
        	{title:'백암아트홀', latlng: new kakao.maps.LatLng(37.510345, 127.065966)}
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
        	 
        	
        	let iwContent = '<div style="padding:5px; color:red;">Hello World!</div>',
        		iwRemoveable = true
        	
        	let infowindow = new kakao.maps.InfoWindow({
        		content : iwContent,
        		removable : iwRemoveable
        	})
        	
        	kakao.maps.event.addListener(marker, 'click', function(){
        		infowindow.open(map, marker);
        	})
        }
    }
	return { onCreate }
})();