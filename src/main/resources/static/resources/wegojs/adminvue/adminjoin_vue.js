var adminjoin_vue = adminjoin_vue || {}
adminjoin_vue = {
	adminjoin_body:()=>{
		return `<section class="breadcrumb breadcrumb_bg">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="breadcrumb_iner">
			                        <div class="breadcrumb_iner_item text-center">
			                            <h2>ADMIN JOIN</h2>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
				</section>
				<section>
		<div id="admin-container">
	<div style="solid black;">
		<div>
			<form name="registerform">

				<div class="form-group row">
					<label for="adminId" class="col-sm-2 form-control-label">아이디입력</label>
					<div class="col-sm-5">
						<input id="aid" type="text" class="form-control" name="adminid" 
						minlength="4" maxlength="10" autocomplete="off"
							value="" placeholder="4~10자리를 입력해 주세요" required="4">
					</div>
				</div>

				<div class="form-group row">
					<label for="pwd" class="col-sm-2 form-control-label">패스워드입력</label>
					<div class="col-sm-5">
						<input id="apwd" type="password" minlength="6" maxlength="20" placeholder="6이상 20이하 글자를 입력해주세요" class="form-control"  autocomplete="off"
							value="">
						<input type="text" class="form-control" id="pwdNotice" value="" readonly="readonly">	
					</div>
					<div class="col-sm-5">
						<input id="pwdck" type="password" minlength="6" maxlength="20" class="form-control" autocomplete="off"
							value="">
					</div>
				</div>

				<div class="form-group row">
					<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
					<input type="hidden" class="form-control" name="admintel" value="">
					<div class="col-sm-6 input-group" id="phoneIpt">
						<input id="tel1" type="text" class="form-control" style="margin-left:10%;" value="" maxlength="4" name="adminPhone1" required="">
						<span class="input-group-addon">-</span>
						<input id="tel2" type="text" class="form-control" value="" maxlength="4" name="adminPhone2" required="">
						<span class="input-group-addon">-</span>
						<input id="tel3" type="text" class="form-control"  value="" maxlength="4" name="adminPhone3" required="">
					</div>
				</div>
				
					<div class="form-group row">
					<label id="addr" for="managerTitle" class="col-sm-2 form-control-label">업체주소</label>
					<div class="col-sm-6">
						<input type="text" id="sample6_postcode" style="height:30px;" placeholder="우편번호" required="">
						<input type="button" id="addr_btn" value="우편번호 찾기" required="">
						<input type="text" id="sample6_address" class="form-control" placeholder="주소" required=""><br>
						<input type="text" id="sample6_detailAddress" class="form-control" placeholder="상세주소"  required="">
					</div>
				</div>
				
				<div class="btnfield" style="text-align: center">
					<input id="adminjoin_btn" type="submit" value="회원가입">
				</div>
			</form>
		</div>
	</div>
</div></section>`
	}
}