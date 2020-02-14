var festival = festival||{}
festival = (()=>{
	const WHEN_ERR = `호출하는 festival js가 없음`
		let context, js;
	    let mainVuejs, festivalvuejs,routerjs,festivalDetailjs;
		let init = ()=>{
			context = $.ctx()
			js = $.js()
			routerjs = js+`/cmm/router.js`
			mainVuejs = js + `/vue/mainVue.js`
			festivalvuejs = js + `/festival/festival_vue.js`
			festivalDetailjs = js + `/festival/festivalDetail.js`
		}

		let onCreate=()=>{
			init()
			$.when(
				$.getScript(mainVuejs),
				$.getScript(routerjs),
				$.getScript(festivalvuejs)
			).done(()=>{
				setContentView()
				festivalList()
				festivalcraw()
			}).fail(()=>{
				alert(WHEN_ERR)
			})
		}
	
	let setContentView=()=>{
		 let x = {css:$.css(),img:$.img()}	
			$(`#mainbody`).html(festival_vue.fmain_body())
	}
	
	let festivalcraw=()=>{
		$(`#festivalcraw`).click(()=>{
			$.getJSON(context+`/festival/crawling`,d=>{
				alert(`크롤링성공`)
			})
		})
		
	}

	let festivalList =x=>{
		$.getJSON(context+`/festival/flist`,d=>{
			let f = d.festival
			$.each(f, (i,j)=>{
				$(`<div class="col-lg-6 col-md-6">  
    						<div class="single_place"> 
    							<img src="${j.fimg}" alt="" style="min-inline-size:-webkit-fill-available">  
    							<div class="hover_Text d-flex align-items-end justify-content-between"> 
    								<div class="hover_text_iner"> 
    								 <a id="id${j.feseq}" href="#" class="place_btn"><img src="${j.fimg}" alt=""></a> <h3>${j.ftitle}</h3> 
    								 <p>${j.fdate}</p>  
    								 <div class="place_review"></div></div> 
    								 	</div></div></div>`)
    								 	.appendTo(`#festivalList`)
    								 	$(`#id`+j.feseq).click(e=>{
    								 		e.preventDefault()
    								 		festivalDetail.festival_list({feseq:j.feseq})
    								 	})
			})
		})
	}
	
	return{onCreate}
})()
