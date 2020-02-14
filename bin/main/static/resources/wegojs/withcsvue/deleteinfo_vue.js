var deleteinfo_vue = deleteinfo_vue||{}
deleteinfo_vue = {
	deleteinfo_body:()=>{
		return `<div id="admin-container">
		<form name="deleteadmin_form">
		<div id="admin-header">
				<h1 align="center">회원탈퇴</h1>
			</div>
		<div class="form-group row">
					<label for="pwd" class="col-sm-2 form-control-label">아이디</label>
					<div class="col-sm-5">
						<input type="text" id="uid" class="form-control" name="userid" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>
		<div class="form-group row">
					<label for="pwd" class="col-sm-2 form-control-label">패스워드입력</label>
					<div class="col-sm-5">
						<input id="pwd" type="password" minlength="6" maxlength="20" class="form-control"  autocomplete="off"
							value="">
						<input type="text" class="form-control" id="pwdNotice" value="" readonly="readonly">	
					</div>
					<div class="col-sm-5">
						<input id="pwdck" type="password" minlength="6" maxlength="20" class="form-control" autocomplete="off"
							value="">
					</div>
				</div>
		<div class="form-group row">
        <label for="pwd2" class="col-sm-2 form-control-label">탈퇴사유를 선택</label>
            <div class="formfield">
              <input type="radio" name="admintype" value="서비스불만족" alt="탈퇴사유" >서비스불만족
              <input type="radio" name="admintype" value="원하는정보없음" alt="탈퇴사유" >원하는정보없음
              <input type="radio" name="admintype" value="다른사이트이용" alt="탈퇴사유" >다른사이트이용
              <input type="radio" name="admintype" value="기타" alt="탈퇴사유">기타
              <input type="text" placeholder="직접입력">
			</div>
		</div>
		<button id="gogomain_btn" style="width: 10%; float: right;">탈퇴</button><br/><br/>
	</form></div>`
	}
}