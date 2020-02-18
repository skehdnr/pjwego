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
			<!-- breadcrumb start-->
			    <section class="breadcrumb breadcrumb_bg">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="breadcrumb_iner">
			                        <div class="breadcrumb_iner_item text-center">
			                            <h2>FESTIVAL</h2>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			<section class="festival_details_content section_padding">
			        <div class="container">
			            <div class="row justify-content-center">
			                <div class="col-lg-6">
			                    <div class="content_iner">
			                        <h1>예약이 완료되었습니다.</h1>
			                        
			                        <h3>(주)위고를 이용해주셔서 감사합니다.</h3>
			                        
			             <div id="main1">
						<div id="title"><h2>RESERVATION INFORMATION</h2></div>
						<h5 size="50" style="font-size: larger";>아이디 : ${x.userid}</h5></br>
						<h5 size="50" style="font-size: larger";>연락처 : ${x.tel}</h5></br>
						<h5 size="50" style="font-size: larger";>참가일 : ${x.visit_date}</h5></br>
						<h5 size="50" style="font-size: larger";>참여인원 : ${x.person}</h5></br>
						
						<p>*Festival의 특성상 입장료,참가비 등의 추가 요금이 발생할수 있습니다.*</p>
						<p>*추가요금 문의는 각 Festival에 문의해 주세요.*</p>
						<p>*Due to the characteristics of the Festival, additional charges such as admission fee and participation fee may be incurred.*</p>
						<p>*For additional charges, please contact each Festival.*</p>
						</div>
					
					
			                        <div class="festival_details_content_btn">
			                            <a id="festivalmain_go" href="#" class="btn_1">메인으로 돌아가기</a>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			
			</body>`
		}
}