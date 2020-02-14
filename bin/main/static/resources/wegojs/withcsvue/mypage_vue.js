"use strict"
var mypage_vue = mypage_vue || {}
mypage_vue = {
	mypage_body: x => {
		return `<section class="breadcrumb breadcrumb_bg">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="breadcrumb_iner">
			                        <div class="breadcrumb_iner_item text-center">
			                            <h2>${x.nickname} 님의 Mypage</h2>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
		<div id="admin-container">
<div>
	<form name="searchForm" id="searchForm">
		<div class="sub">
			<div align="center">
				<div class="card-block" >
					<div class="form-group row">
						<label for="userId" class="col-sm-2 form-control-label">아이디</label>
						<div class="col-sm-5">
							<input type="text" id="uid" class="form-control" name="userName" value="" readonly="readonly"
							placeholder="${x.uid}">
						</div>
					</div>

					<div class="form-group row">
						<label for="nickname" class="col-sm-2 form-control-label">닉네임</label>
						<div class="col-sm-5">
							<input type="text" id="nickname" class="form-control" name="userName" value="" readonly="readonly"
							placeholder="${x.nickname}">
						</div>
					</div>
					<div class="form-group row">
						<label for="birth" class="col-sm-2 form-control-label">생년월일</label>
						<div class="col-sm-5">
							<input type="text" id="birth" class="form-control" name="birth" value="" readonly="readonly"
							placeholder="${x.birth}">
						</div>
					</div>

					<div class="form-group row">
						<label for="tel" class="col-sm-2 form-control-label">연락처</label>
						<div class="col-sm-5">
							<input type="text" id="tel" class="form-control" name="tel" value="" readonly="readonly"
							placeholder="${x.tel}">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="tel" class="col-sm-2 form-control-label">예약정보</label>
						<div class="col-sm-5">
							<input type="text" id="birth" class="form-control" name="info" value="" readonly="readonly"
							placeholder="${x.tel}">
						</div>
					</div>
					

          </div>
		  <div text-align: center; font-size: 0;>
					<span class="form-group row" style="display: inline-block;">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span id="delete_btn" class="col-sm-5" style="float:none;">
							<a href="#">
								<h2 align="center "> 회원탈퇴</h2>
							</a>
						</span>
			          </span>
			          </div>
				</div>


			</div>
	</form>
</div></div>`

	},
adminmypage_body: z => {
		return `<div id="admin-container">
<div>
	<form name="searchForm" id="searchForm">
		<div id="admin-header" align="center">
			<h1> ${z.hname} 님의 Mypage</h1>
		</div>
		<div class="sub">
			<div align="center">
      <div style="display: inline-block;">
				<div class="card-block" >
					<div class="form-group row">
						<label for="userId" class="col-sm-2 form-control-label">아이디</label>
						<div class="col-sm-5">
							<input type="text" id="uid" class="form-control" name="userName" value="" readonly="readonly"
							placeholder="${z.hid}">
						</div>
					</div>

					<div class="form-group row">
						<label for="userName" class="col-sm-2 form-control-label">닉네임</label>
						<div class="col-sm-5">
							<input type="text" id="nickname" class="form-control" name="userName" value="" readonly="readonly"
							placeholder="${z.tel}">
						</div>
					</div>
					<div class="form-group row">
						<label for="managerTitle" class="col-sm-2 form-control-label">생년월일</label>
						<div class="col-sm-5">
							<input type="text" id="birth" class="form-control" name="pubManagerTitle" value="" readonly="readonly"
							placeholder="${z.hname}">
						</div>
					</div>

					<div class="form-group row">
						<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
						<input type="hidden" class="form-control" name="userPhone" value="">
						<div class="col-sm-6 input-group" id="phoneIpt">
							<input type="text" class="form-control" id="userPhone1" value="">
							<span class="input-group-addon">-</span>
							<input type="text" class="form-control" id="userPhone2" value="">
							<span class="input-group-addon">-</span>
							<input type="text" class="form-control" id="userPhone3" value="">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="managerTitle" class="col-sm-2 form-control-label">반려동물</label>
						<div class="col-sm-5">
							<input type="text" id="pettype" class="form-control" name="pubManagerTitle" value="" readonly="readonly"
							placeholder="${z.companytype}">
						</div>
					</div>
          </div>
          </div>
		  <div text-align: center; font-size: 0;>
					<span class="form-group row" style="display: inline-block; margin-right:1%">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span id="change_btn" class="col-sm-5">
							<a href="#">
								<h2 align="center">| 정보수정 |</h2>
							</a>
						</span>
					</span>
					<span class="form-group row" style="display: inline-block;">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span id="delete_btn" class="col-sm-5">
							<a href="#">
								<h2 align="center ">| 회원탈퇴</h2>
							</a>
						</span>
          </span>
          </div>
				</div>
			</div>
	</form>
</div></div>`

	}
}