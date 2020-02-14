"use strict"
var hotelMap = hotelMap || {}
hotelMap = (() => {
    const WHEN_ERR = '찾는 mapjs를 호출할수 없습니다.'
    let context, js;
    let init = () => {
        context = $.ctx()
        js = $.js()
    }
    let onCreate = () => {
        init()
        mapfun()
        mapsDBinsert()
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
    return { onCreate }

})();

