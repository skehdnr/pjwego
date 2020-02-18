"use strict"
var mypage_vue = mypage_vue || {}
mypage_vue = {
	mypage_body: x => {
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
			<section class="breadcrumb breadcrumb_bg">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="breadcrumb_iner">
			                        <div class="breadcrumb_iner_item text-center">
			                            <h2>Mypage</h2>
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
			             <div id="main1">
						
						</div>
					<div text-align: center; font-size: 0;>
							<span class="form-group row" style="display: inline-block;">
								<label for="managerPhone" class="col-sm-2 form-control-label"></label>
								<span id="delete_btn" class="col-sm-5" style="float:none;">
									<a href="#">
										<h2 align="center">회원탈퇴</h2>
									</a>
								</span>
							</span>
						</div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>`

	}
}