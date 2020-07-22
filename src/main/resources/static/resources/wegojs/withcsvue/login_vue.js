var login_vue = login_vue || {}
login_vue = {
	login_body: () => {
		return `<section class="breadcrumb breadcrumb_bg">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="breadcrumb_iner">
			                        <div class="breadcrumb_iner_item text-center">
			                            <h2>LOGIN</h2>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
		
		<section class="inner-page-contents">

      <div class="container">
        <div class="row">
          <!-- LEFT COLUMN STARTS-->
          <div style="text-align: center; width: 66.66666667%; margin-left: 16.66666667%;">
            <!-- FOOD STARTS-->
            <section>
            
              <div class="row login-form">
              
                <div class="input_form" style="width: 50%; margin-left: 25%;">
                    <input name="loginId" id="uid" type="text" placeholder="아이디를 입력해주세요." >
                </div>
                <div class="input_form" style="width: 50%; margin-left: 25%; margin-top: -1px;">
                    <input name="loginPw" id="pwd" type="password" placeholder="비밀번호를 입력해주세요." >
                </div>
                <div style="width: 50%; margin-left: 25%;">
                    <input id="userlogin_btn" type="button" value="로그인" style="height: 45px;">
                    <input id="adminlogin_btn1" type="button" value="어드민로그인" style="height: 45px;">
                </div>
				<div style="width: 50%; margin-left: 25%;">
				<a id="findid_btn" href="#">아이디 찾기 |</a><a id="findpwd_btn" href="#">| 비밀번호 찾기</a></div>
              </div>
              <div>
            <span><input type="image" id="naverlogin" name="button" src="/resources/wegoimg/naver.png" style="height: 50px;width: 50px; "></span>
            <span><input type="image" id="fblogin" name="button" src="/resources/wegoimg/fb.png" style="height: 50px;width: 50px; "></span>
            <span><input type="image" id="googlelogin" name="button" src="/resources/wegoimg/google.png" style="height: 50px;width: 50px; "></span>
           	<span><input type="image" id="kakaologin" name="button" src="/resources/wegoimg/kakao.png" style="height: 50px;width: 50px; "></span>
            </div>
            </section>
            <!-- /. FOOD ENDS-->
          </div>
          <!-- /. LEFT COLUMN ENDS --> 
        </div>
      </div>
       
    </section>
`
		 
  },
  adminlogin_body :()=>{
		return `<section class="inner-page-contents">
      <div class="container">
        <div class="row">
          <!-- LEFT COLUMN STARTS-->
          <div style="text-align: center; width: 66.66666667%; margin-left: 16.66666667%;">
            <!-- FOOD STARTS-->
            <section>
              <div class="row login-form">
              
                <div class="input_form" style="width: 50%; margin-left: 25%;">
                    <input name="hosiloginId" id="aid" type="text" placeholder="아이디를 입력해주세요." value="test">
                </div>
                <div class="input_form" style="width: 50%; margin-left: 25%; margin-top: -1px;">
                    <input name="adminloginPw" id="apwd" type="password" placeholder="비밀번호를 입력해주세요." value="1" >
                </div>
                <div style="width: 50%; margin-left: 25%;">
                    <input id="adminlogin_btn" type="button" value="로그인" style="height: 45px;">
                </div>
				<div style="width: 50%; margin-left: 25%;">
				<a id="findid_btn" href="#">아이디 찾기 |</a><a id="findpwd_btn" href="#">| 비밀번호 찾기</a></div>
              </div>
            </section>
            <!-- /. FOOD ENDS-->
          </div>
          <!-- /. LEFT COLUMN ENDS --> 
        </div>
      </div>
      
    </section>
`
  }
}