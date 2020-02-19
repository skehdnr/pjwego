var community = community||{}
community = (()=>{
	const WHEN_ERR = `호출하는 커뮤니티 js가 없음`
	const PATH = "/resources/wegoimg/community/"
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
		if (sessionStorage.getItem(`userid`) != null){
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
				            <div id="id${j.art_seq}" class="portfolio-hover">
				              <div class="portfolio-hover-content">
				                <i class="fas fa-plus fa-3x"></i>
				              </div>
				            </div>
				            <img style="width:100%;"class="img-fluid" src="${PATH}${j.art_img}" alt="">
				          </a>
				          <div class="portfolio-caption">
				            <h4>${j.title}</h4>
				          </div>
				        </div>`).appendTo(`#communitybody`)
				        $(`#id`+j.art_seq).click(e=>{
				        	e.preventDefault()
				        	$(`html`).scrollTop(0)
				        	$(`#communitybody`).empty()
				        	$(detail_vue.detail(j)).appendTo(`#communitybody`)
			let x = {art_seq : j.art_seq}		
			$.getJSON(`/community/reply/`+x.art_seq, d=>{
				let c = d.reply
				console.log(c)
				$.each(c, (i,j)=>{
					$(`<div id="detail_reply"><h5>${j.board_comment}</h5><h5 style="text-align-last: right"> id: ${j.userid}</h5>`).appendTo(`#commentspace`)
				})
			})
		$(`#reply_go`).click(e=>{
					e.preventDefault()
					let data = {
					board_comment: $(`#writecomment`).val(),
					userid: sessionStorage.getItem(`userid`),
					art_seq: x.art_seq
				}
				
    		$.ajax({
    			url : `/community/insert/Reply`,
    			type : `POST`,
    			dataType : `json`,
    	    	data : JSON.stringify(data),
    	    	contentType : `application/json`,
    	    	success : d=>{
    	    		if(d.msg === `SUCCESS`){
								alert("등록되었습니다.")
								
								$.getJSON(`/community/newReply/`+x.art_seq, d=>{
									
									let r = d.reply
								
									$.each(r, (i,j)=>{
									$(`<div id="detail_reply"><h5>${j.board_comment}</h5><h5 style="text-align-last: right"> id: ${j.userid}</h5>`).appendTo(`#commentspace`)
									
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


				        	/* $(`<p class="item-intro text-muted">작성자 : ${j.userid} 님</p>`).appendTo(`#writerid`)
				        	if(sessionStorage.getItem(`userid`) != null){
				        		$(`<a id = "replybtn"href="#" class="genric-btn primary small" style="width:100%">댓글달기</a>`)
	                            .appendTo(`#replybtnspace`)
							} */

							
				        /* 	$(`#replybtn`).click(e => {
		                        e.preventDefault()
		                        reply(j.art_seq)
		                    }) */
							$(`#gowrite`).click(e=>{
							e.preventDefault()
							write.onCreate()
		})
				        	
				        })
			})
		})
	}
	
	let reply = x =>{
		let json = {
				reply : $(`#writereply`).val(),
				artseq:x,
				uid : sessionStorage.getItem(`userid`)
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
        $(`#searchbtn`).click(e => {
            e.preventDefault()

            $.getJSON(`/community/search/` + $(`#searchword`).val(), d => {
                $(`#communitybody`).empty()
                $.each(d, (i, j) => {
                    $(`<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div id="id${i}" class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img style="width:100%;"class="img-fluid" src="${PATH}${j.art_img}" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${j.title}</h4>
                    </div>
                    </div>`).appendTo(`#communitybody`)
                    $(`#id` + i).click(e => {
                        e.preventDefault()
                        $(`#communitybody`).empty()

                        $(`<div style="display: block; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
                            <h2 class="text-uppercase">${j.title}</h2>
                        <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img class="img-fluid d-block mx-auto" src="${PATH}${j.art_img}" alt="">
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