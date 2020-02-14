var findinfo_vue = findinfo_vue || {}
findinfo_vue = {
  findinfo_id:() => {
    return `<section class="breadcrumb breadcrumb_bg">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="breadcrumb_iner">
			                        <div class="breadcrumb_iner_item text-center">
			                            <h2>FIND USER</h2>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
    <div id="admin-container">
    <div>
    <form name="post">
    <div id="admin-header">
				<h1 align="center">아이디찾기</h1>
			</div>
<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">이름</label>
					<div class="col-sm-5">
						<input type="text" id="uname" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>        
      <div class="form-group row">
					<label for="tel" class="col-sm-2 form-control-label">연락처</label>
					<div class="col-sm-5">
						<input type="text" id="tel" class="form-control" name="findTel" maxlength="20" autocomplete="off"
							placeholder="숫자만 입력해주세요.">
					</div>
				</div> 
      <div style="text-align: center">
          <input id="findid2" type="submit" value="아이디 찾기" />
          </div>
    </form>
  </div>
</div></div>`
  },
  findinfo_pwd: x => {
    return `<section class="breadcrumb breadcrumb_bg">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="breadcrumb_iner">
			                        <div class="breadcrumb_iner_item text-center">
			                            <h2>FIND USER</h2>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
    
    <div id="admin-container">
    <div>
    <form name="post">
    <div id="admin-header">
				<h1 align="center">비밀번호찾기</h1>
			</div>
<div class="form-group row">
					<label for="userid" class="col-sm-2 form-control-label">아이디</label>
					<div class="col-sm-5">
						<input type="text" id="find_uid" class="form-control" name="userid" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>        
       <div class="form-group row">
					<label for="tel" class="col-sm-2 form-control-label">연락처</label>
					<div class="col-sm-5">
						<input type="text" id="pwdtel" class="form-control" name="findTel" maxlength="20" autocomplete="off"
							placeholder="숫자만 입력해주세요.">
					</div></div>
      <div style="text-align: center">
          <input id="findpwd_btn2" type="submit" value="비밀번호 찾기" />
          </div>
    </form>
  </div>
</div></div>`
  }

}