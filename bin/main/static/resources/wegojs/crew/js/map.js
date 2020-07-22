"use strict"
var map = map || {}
map = (() => {
    const WHEN_ERR = `찾는 mapjs를 호출할수 없습니다.`
    let js;
    let init = () => {
        js = $.js()
    }
    let onCreate = () => {
        init()
        mapfun()
        mapsDBinsert()
    }
    let mapfun = () => {
        let mapContainer = document.getElementById(`map`),
            mapOption = {
                center: new kakao.maps.LatLng(37.510275, 127.043892), 
                level: 5
            };
        let map = new kakao.maps.Map(mapContainer, mapOption);
        let markerPosition = new kakao.maps.LatLng(37.510275, 127.043892)
        
        let positions =[
        	{title:`코엑스스타필드`, latlng: new kakao.maps.LatLng(37.512287, 127.059076)},
        	{title:`LG아트센터`, latlng: new kakao.maps.LatLng(37.502252,127.037525)},
        	{title:`도산공원`, latlng: new kakao.maps.LatLng(37.524651, 127.035367)},
        	{title:`피규어뮤지엄W`, latlng: new kakao.maps.LatLng(37.525781, 127.040367)},
        	{title:`백암아트홀`, latlng: new kakao.maps.LatLng(37.510345, 127.065966)}
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
    }
    let mapsDBinsert = () => {
        $(`#mapdb`).click(e => {
            e.preventDefault
            $.getJSON(`/maps/map/create/`, d => {
              
                $.getJSON(`/maps/insert/mapDB`, d => {
                 
                })
            })

        })
    }
    return { onCreate }

})();

