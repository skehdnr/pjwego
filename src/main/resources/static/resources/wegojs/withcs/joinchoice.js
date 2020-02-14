"use strict"
var joinchoice = joinchoice ||{}
joinchoice=(()=>{
	const WHEN_ERR = `호출하는 joinchoice 페이지가 없음`
	let context, js;
	let mainVuejs;
	let joinchoicevuejs
	let mainHomejs
	let userjoinjs
	let adminjoinjs
	let init = () => {
        context = $.ctx()
		js = $.js()
		joinchoicevuejs = js + `/withcsvue/joinchoice_vue.js`
		userjoinjs = js + `/user/userjoin.js`
		adminjoinjs = js + `/admin/adminjoin.js`
	}
	let onCreate=()=>{
		init()
		$.when(
			
			$.getScript(joinchoicevuejs),
			$.getScript(userjoinjs),
			$.getScript(adminjoinjs)
			

		).done(()=>{
			setContentView()
			gochoice()
			maketable()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(joinchoice_vue.joinchoice_body())
	}
	let gochoice = ()=>{
		$('#userjoin').click(()=>{
               
                userjoin.onCreate()
			})
		$('#adminjoin').click(()=>{
             
                adminjoin.onCreate()
            })
	}
	let maketable =()=>{
        $('#createuser').click(()=>{
             $.getJSON(context+'/user/create/table',d=>{
               
             })
		})
		$('#createadmin').click(()=>{
             $.getJSON(context+'/admin/create/table',d=>{
                
             })
		})
		$('#dumuser').click(()=>{
			
			$.getJSON(context+'/user/insert/dummy',d=>{
				
			})
		})
		$('#createtour').click(()=>{
			$.getJSON(context+'/admin/create/tourtable',d=>{
				
			})
		})
		
	 }

	return {onCreate}
})()