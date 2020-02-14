"use strict";
var mainHome = mainHome || {};
mainHome = (() => {
    const WHEN_ERR = '호출하는 mainHome js를 찾을 수 없습니다 .'
    let js;
    let routerjs,mainVuejs; 
    let crewjs,introjs; 
    let tourismjs; 
    let communityjs; 
    let loginjs,mypagejs,joinchoicejs;
    let hotelMainVuejs, hotelHomejs,hotelDetailjs,festivaljs;

    let init = () => {
        js = $.js()
        routerjs = js + '/cmm/router.js'
      	mainVuejs = js +'/vue/mainVue.js'
        crewjs = js +'/crew/js/crew.js'
        introjs=js+'/crew/js/intro.js'
        tourismjs =js+'/tourism/tourism.js'
        communityjs = js +'/community/communityjs/community.js'
        loginjs = js + '/withcs/login.js'
        mypagejs = js + '/withcs/mypage.js'
        joinchoicejs = js + '/withcs/joinchoice.js'
        hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
      	hotelHomejs = js+'/hotel/hotelHome.js'
      	hotelDetailjs = js+'/hotel/hotelDetail.js'
      	festivaljs = js+ `/festival/festival.js`
    }
    let onCreate = () => {
        init()
        $.when(
            $.getScript(mainVuejs),
            $.getScript(routerjs),
            $.getScript(crewjs),
            $.getScript(introjs),
            $.getScript(tourismjs),
            $.getScript(communityjs),
            $.getScript(loginjs),
            $.getScript(mypagejs),
            $.getScript(joinchoicejs),
             $.getScript(hotelMainVuejs),
            $.getScript(hotelHomejs),
            $.getScript(hotelDetailjs),
            $.getScript(festivaljs)
        ).done(() => {
            setContentView()
            btnVowel()
            
        }).fail(() => {
            alert(WHEN_ERR)
        })
    }
    let setContentView = () => {
        let x = {css:$.css(),img:$.img()}
        $('body').html(mainVue.main_navi(x))
             .append(mainVue.main_body(x))
             .append(mainVue.main_footer(x))
             
    }

    let btnVowel =()=>{
            $('#introduce').click(e=>{
                e.preventDefault()
                intro.onCreate()
                $('html').scrollTop(0);
            })
        $('#crewid').click(e=>{
            e.preventDefault()
            crew.onCreate()
               $('html').scrollTop(0);
        })
        $('#tourismgo').click(e=>{
            e.preventDefault()
            tourism.onCreate()
               $('html').scrollTop(0);
        })
        $('#communitygo').click(e=>{
            e.preventDefault()
            community.onCreate()
               $('html').scrollTop(0);
        })
        $('#login_btn').click(e=>{
            e.preventDefault
              login.onCreate()
              $('html').scrollTop(0);
        })
        $('#join_btn').click(e=>{
            e.preventDefault
             joinchoice.onCreate()
              $('html').scrollTop(0);
        })
        $('#hotel_go').click(e=>{
        	e.preventDefault()
        	 hotelHome.onCreate()
        	 $('html').scrollTop(0);
        })
        $('#festival_go').click(e=>{
        	e.preventDefault()
        	 festival.onCreate()
        	 $('html').scrollTop(0);
        })
       
    }
    return { onCreate }
})();