"use strict"

var mappage = mappage || {}
mappage = (()=>{
	const WHEN_ERR = '호출하는 mappagejs 를 찾을 수 없습니다.'
		let js
		let tourism_Vuejs
		let mainHomejs
		let mainVuejs
		let mappageVuejs
		let mapjs
		let init = () =>{
			js = $.js() 
			tourism_Vuejs = js + '/tourism/tourismVue.js'
			mainHomejs = js + '/cmm/mainHome.js'
			mainVuejs = js + '/vue/mainVue.js'
			mappageVuejs = js + '/tourism/mappageVue.js'
			mapjs = js + '/crew/js/map.js'
		}
		
		let onCreate = () =>{
			init()
			$.when(
					$.getScript(mainVuejs),
					$.getScript(tourism_Vuejs),
					$.getScript(mappageVuejs),
					$.getScript(mapjs)
					

			).done(()=>{
				setContentView()
				map.onCreate()
				tab1()
				tab2()
				infoCrawl()
				newsCrawl()

			}).fail(()=>{
				alert(WHEN_ERR)
			})
		}
		
		let setContentView = () =>{
			$('#mainbody').html(mappageVue.mappageVue_body())
			$('html').scrollTop(0)
		}

		
		let tab1=()=>{
			$('ul.tab li').click(function() {
				let activeTab = $(this).attr('data-tab')
				$('ul.tab li').removeClass('current')
				$('.tabcontent').removeClass('current')
				$(this).addClass('current')
				$('#' + activeTab).addClass('current')
			})
		}
		
		let tab2=()=>{
			$('ul.tabtab li').click(function() {
				let activeTab = $(this).attr('data-tab')
				$('ul.tabtab li').removeClass('currentt')
				$('.tabcontentt').removeClass('currentt')
				$(this).addClass('currentt')
				$('#' + activeTab).addClass('currentt')
			})
		}
		
		let infoCrawl =()=>{
			$('#infofofo').click(()=>{
				$.getJSON('/crawls/info',d=>{
        			$.each(d, (i,j)=>{
        				$('<div/>')
				             .html('<h3>'+j.info1+'</h3>')
				             .appendTo('#tab3')
        			})
        			return false;
        		})
			})
		}
		
		let newsCrawl =()=>{
			$('#newnews').click(()=>{
				$.getJSON('/crawls/news', d=>{
					$.each(d, (i,j) =>{
						$('<div/>')
						.html('<div><img style="width:600px; height:300px;" src="'+j.photo+'"/><br/><h3>'+j.title+'</h4><br/><h4>'+j.comment+'</h4></div>')
						.appendTo('#tab4')
					})
				})
			})
			
		}
		
		let reviewCrawl=()=>{
			$('#reviewreview').click(()=>{
				$('#tab5').click(()=>{
					
				})
			})
		}
		return {onCreate}
})()