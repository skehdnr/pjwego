var detail_vue = detail_vue || {}
detail_vue = {
	detail:j=>{return `<div style="display: block; padding-top:20px; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
                  <h2 class="text-uppercase">${j.title}</h2>
                  <div id = "writerid"></div>
                  
              <div id ="imgspace"><img class="img-fluid d-block mx-auto" src=z${j.img} alt=""></div>
              <p>${j.content}</p>   
              
              <div style=" padding-left: 10px; padding-top: 20px;">
                <input id ="writecomment" type="text" style="width:80%"/><button id="reply_go">등록</button>
               
              </div>
          
              <div style="text-align: initial; padding-left: 15px; padding-top: 9px; padding-bottom: 10px;">
               <div id="commentspace" style="height: 300px;"></div>
              </div>            
              </div>
              
               `



	}
}