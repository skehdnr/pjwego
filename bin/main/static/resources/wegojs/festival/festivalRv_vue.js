var festivalRv_vue = festivalRv_vue || {}
festivalRv_vue = {
		festivalRv_main: x =>{
			return `
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
			<div id="admin-container">
	<div style="solid black;">
		<div>
			<div id="admin-header">
				<h1 align="center">예약 정보 입력</h1>
			</div>
			<form name="registerform">

				<div class="form-group row">
					<label for="userid" class="col-sm-2 form-control-label">아이디</label>
					<div class="col-sm-5">
						<input id="fuid" type="text" class="form-control" value="${x.userid}" readonly>
					</div>
				</div>

				<div class="form-group row">
					<label for="usertel" class="col-sm-2 form-control-label">전화번호</label>
					<div class="col-sm-5">
						<input id="ftel" type="text" class="form-control" value="${x.tel}" readonly>
					</div>
				</div>

				<div class="form-group row">
					<label for="userdate" class="col-sm-2 form-control-label">참가날짜</label>
					<div class="col-sm-5">
						<input id="fdate" type="date" class="form-control" value="">
					</div>
				</div>
				
				<div class="form-group row" >
					<label for="userpe" class="col-sm-2 form-control-label">참여인원</label>
						<div id="inputadd">
						<input id="fpersons" type="text" value="" style="margin-left:3.5%; height:30px; width:360px;" 
						placeholder="참가인원을 선택해 주세요." readonly>
						</div>
						<select id="fper" name="select" style="margin-left:2%; height:30px; width:8%; ">
	                        <option value="1인">1인</option>
	                        <option value="2인">2인</option>
	                        <option value="3인">3인</option>
	                        <option value="4인">4인</option>
	                        <option value="5인">5인</option>
	                        <option value="6인">6인</option>
	                        <option value="7인">7인</option>
	                        <option value="8인">8인</option>
	                        <option value="9인">9인</option>
                    	</select>
                    	<p>※10인 이상 단체인 경우 별도문의 필요※</p>
				</div>
				
				<div class="btnfield" style="text-align: center">
					<input id="fpass" type="button" value="예약하기">
				</div>
			</form>
		</div>
	</div>
</div>`
		}
}