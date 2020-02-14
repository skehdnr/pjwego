var community = community||{}
community = (()=>{
	const WHEN_ERR = `호출하는 커뮤니티 js가 없음`
	let js;
    let mainVuejs, detail, writejs, searchjs, communitymainvue ;
	let init = ()=>{
		js = $.js()
		mainVuejs = js + `/vue/mainVue.js`
		communitymainvue = js + `/community/vue/main_vue.js`
		detailvue = js + `/community/vue/detail_vue.js`
		writejs = js + `/community/communityjs/write.js`
		searchjs = js + `/community/vue/search_vue.js`
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(communitymainvue),
			$.getScript(detailvue),
			$.getScript(writejs),
			$.getScript(searchjs)
		).done(()=>{
			setContentView()
			movewrite()
            movesearch()
            make()
            crw()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView=()=>{
		$(`#mainbody`).empty()
		$(main_vue.community()).appendTo(`#mainbody`)
		if (sessionStorage.getItem(`UID`) != null){
			$(`<div style="padding-bottom: 20px;" >
		              <button id = "gowrite" class="button rounded-0 primary-bg text-white w-100 btn_1" >Write</button>
		             </div>`).appendTo(`#writebtnspace`)
		}
		recent_list({pageNo:1})
        scroll()
		$(main_vue.head()).append(`head`)
	}
	
	let scroll=()=>{
		let count = 1
		$(window).scroll(function(){
			if($(document).height()-$(this).height()-100<$(this).scrollTop()){
				count++
				recent_list({pageNo:count})
			}
		})
	}
	
	let recent_list = x =>{
		$.getJSON(`/community/list/`+x.pageNo, d=>{
			console.log(d.community)
			$.each(d.community, (i,j)=>{
				$(`<div class="col-md-4 col-sm-6 portfolio-item">
				          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
				            <div id="id${j.artseq}" class="portfolio-hover">
				              <div class="portfolio-hover-content">
				                <i class="fas fa-plus fa-3x"></i>
				              </div>
				            </div>
				            <img style="width:100%;"class="img-fluid" src="${j.img}" alt="">
				          </a>
				          <div class="portfolio-caption">
				            <h4>${j.title}</h4>
				          </div>
				        </div>`).appendTo(`#communitybody`)
				        $(`#id`+j.artseq).click(e=>{
				        	e.preventDefault()
				        	$(`html`).scrollTop(0)
				        	$(`#communitybody`).empty()
				        	$(detail_vue.detail(j)).appendTo(`#communitybody`)
				        	
				        	$(`<p class="item-intro text-muted">작성자 : ${j.uid} 님</p>`).appendTo(`#writerid`)
				        	if(sessionStorage.getItem(`UID`) != null){
				        		$(`<a id = "replybtn"href="#" class="genric-btn primary small" style="width:100%">댓글달기</a>`)
	                            .appendTo(`#replybtnspace`)
				        	}
				        	$(`#replybtn`).click(e => {
		                        e.preventDefault()
		                        reply(j.artseq)
		                    })
		                    if (sessionStorage.getItem('UID') != null) {
		                    $('#likebtn').on("click", function (e) {
                            $(this).find(">img").attr("src", function (index, attr) {
                                if (attr.match('beforeheart')) {
                                    return attr.replace("beforeheart.png", "afterheart.png")
                                } else {
                                    return attr.replace("afterheart.png", "beforeheart.png")
                                }
                            })

                        })
                    }
				        	
				        })
			})
		})
	}
	
	let reply = x =>{
		let json = {
				reply : $(`#writereply`).val(),
				artseq:x,
				uid : sessionStorage.getItem(`UID`)
		} 
		$.ajax({
			url : `/community/${x}/reply/`,
			type: `POST`,
			data: JSON.stringify(json),
            dataType: `json`,
            contentType: `application/json`,
            success: d => {
                $(`#communitybody`).empty()
                recent_list()
            },
            error: e => { }
        })
    }
	
	let movewrite=()=>{
		$(`#gowrite`).click(e=>{
			e.preventDefault()
			write.onCreate()
		})
	}
	
	let movesearch = () => {
        $('#searchbtn').click(e => {
            e.preventDefault()

            $.getJSON('/community/search/' + $('#searchword').val(), d => {
                alert('서치 ' + d.title)
                $('#communitybody').empty()
                $.each(d, (i, j) => {
                    $(`<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div id="id${i}" class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img style="width:100%;"class="img-fluid" src="${j.img}" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${j.title}</h4>
                    </div>
                    </div>`).appendTo(`#communitybody`)
                    $('#id' + i).click(e => {
                        e.preventDefault()
                        $(`#communitybody`).empty()

                        $(`<div style="display: block; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
                            <h2 class="text-uppercase">${j.title}</h2>
                        <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img class="img-fluid d-block mx-auto" src=${j.img} alt="">
                        <p>${j.content}</p>           
                        <div style=" padding-left: 10px;">
                            <input type="text" style="width:100%" />
                            <a href="#" class="genric-btn primary small" style="width:100%">댓글달기</a>
                        </div>
                        <div style="text-align: initial; padding-left: 15px; padding-top: 9px; padding-bottom: 10px;">
                            <li>멋진곳입니다</li>
                            <li>좋아요!</li>
                        </div>                
                        </div>`).appendTo(`#communitybody`)

                    })
                    $(window).unbind(`scroll`)
                })
            })
        })
    }
	
	 let make = () => {
	        $(`#create`).click(() => {
	            $.getJSON(`/community/create/table`, d => {
	            })
	        })
	        $(`#createlike`).click(() => {
	            $.getJSON(`/community/create/tablelike`, d => {
	              
	            })
	        })
	        $(`#createcomment`).click(() => {
	            $.getJSON(`/community/create/tablecomment`, d => {
	            })
	        })

	    }
	 
	 let crw = () => {
	        $(`#crawling`).click(e => {
	        	e.preventDefault()
	            $.getJSON(`/community/crawler`, d => {
	            })
	        })
	    }
	
	
	
	
	
	
	
	return{onCreate}
})()