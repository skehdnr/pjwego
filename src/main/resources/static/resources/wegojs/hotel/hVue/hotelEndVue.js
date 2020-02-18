var hotelEndVue = hotelEndVue || {}
hotelEndVue = {
		hEnd_body: x=>{
			return `<style>
				.container{		
			
			 		grid-template-columns: 20% 1fr; 
					grid-template-rows: 100px 630px;
					width: 50%
					height: 100%
					border: 1px solid black; 
					text-align: center;
							
			}
			#main1 {
			          font-weight: bold;
			          text-align: center;
			        background-color: rgba(255);
	
				border: 1px solid #bcbcbc; 
			
			}
			#title{
			border: 1px solid #bcbcbc; 
				}
#book_list{
			border: 1px solid #bcbcbc; 
			height: 700px
		}
			</style>
			<body>
			<section class="tour_details_content section_padding">
			        <div class="container">
			            <div class="row justify-content-center">
			                <div class="col-lg-6">
			                    <div class="content_iner">
			                        <h1>예약이 완료되었습니다.</h1>
			                        
			                        <h3>(주)위고를 이용해주셔서 감사합니다.</h3>
			                        
			             <div id="main1">
						<div id="title"><h2>RESERVATION INFORMATION</h2></div>
					<div id="book_list" ></div>
					</div>
					
					
			                        <div class="tour_details_content_btn">
			                            <a id="maingo" href="#" class="btn_1">메인으로 돌아가기</a>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			
			</body>`
		}
}