var festivalEnd_vue = festivalEnd_vue || {}
festivalEnd_vue = {
		fEnd_body: x=>{
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
			</style>
			<body>
			<section class="festival_details_content section_padding">
			        <div class="container">
			            <div class="row justify-content-center">
			                <div class="col-lg-6">
			                    <div class="content_iner">
			                        <h1>예약이 완료되었습니다.</h1>
			                        
			                        <h3>(주)위고를 이용해주셔서 감사합니다.</h3>
			                        
			             <div id="main1">
						<div id="title"><h2>RESERVATION INFORMATION</h2></div>
						<h5 size="50" style="font-size: larger";>${x.uid}</h5></br>
						<h5 size="50" style="font-size: larger";>${x.tel}</h5></br>
						<h5 size="50" style="font-size: larger";>${x.fdate}</h5></br>
						<h5 size="50" style="font-size: larger";>${x.fper}</h5></br>
						
					
						<p>*특별 요청 사항(예: 간이 침대, 늦은 체크인)을 자세히 포함해 주세요. 요청하신 사항을 호텔이 제공할 수 있는지 확인 후 24시간 이내에 고객님께 메일로 알려드립니다. 24시간이 지나도록 메일을 받지 못하시면 호텔에 직접 문의하거나 호텔에서 다른 대안을 마련할 수 있도록 연락해 주세요. 특별 요청은 항상 보장되지는 않으며, 추가 요금이 발생할 수 있습니다.</p>
						<h5 size="50" style="font-size: larger";>${x.indate}</h5> ~ <h5 size="50" style="font-size: larger";>${x.outdate}</h5></br>
					</div>
					
					
			                        <div class="festival_details_content_btn">
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