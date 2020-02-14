var hotelPayVue = hotelPayVue || {}
hotelPayVue = {
		hPay_body: x=>{
			return `<style>
			.container{
				grid-template-columns: 20% 1fr;
				grid-template-rows: 50px 1500px 50px;
				height: 100%
				border: 1px solid #bcbcbc; 
				grid-template-areas: 
				"header header"
				"side main"
				"footer footer"
		
		}
			.header{
				grid-area: header;
				margin: 0 auto;
				border: 1px solid #bcbcbc; 
			}
				.side{
				grid-area: side;
				text-align: center;
				border: 1px solid #bcbcbc; 
		
		}
			#img{
				width: 100%;
				height: 100%;
				display: inline-block;
				border: 1px solid #bcbcbc; 
			}
				.main{
				grid-area: main;
				display: grid;
				grid-template-rows: 500px 500px 500px;
				border: 1px solid #bcbcbc; 
			}
		
		#main1 {
		          font-weight: bold;
		          text-align: center;
		        background-color: rgba(255);

			border: 1px solid #bcbcbc; 
		
		}
			#main2 {
		        font-weight: bold;
		          text-align: center;
		        background-color: #ffffff;
		        opacity: 0.9;
			border: 1px solid #bcbcbc; 
			}
			#main3 {
		
		      font-weight: bold;
		          text-align: center;
		        background-color: #ffffff;
		        opacity: 0.9;
			border: 1px solid #bcbcbc; 
			}
			#title{
				border: 1px solid #bcbcbc; 
			}
		.cta{
			background-color: #156bc1;
		    border: 1px solid #156bc1;
		    border-radius: 2px;
		    box-shadow: inset 0 -2px 0 #063665;
		    color: #fff;
		    cursor: pointer;
		    display: inline-block;
		    font-size: 14px;
		    font-weight: bold;
		    line-height: 1.5;
		    margin: 0 2px 4px;
		    overflow: hidden;
		    padding: 4px 16px;
		    position: relative;
		    vertical-align: middle;
		    width: auto;
		    float: right;
		    font-size : x-large;
		}
		.hotelInfo{
			border: 1px solid #bcbcbc; 
		}
		.dateInfo{
				border: 1px solid #bcbcbc; 
		}
		.roomProps{
			border: 1px solid #bcbcbc; 
		}
		.priceDetail{
			border: 1px solid #bcbcbc; 
		}
		.info{
			border: 1px solid #bcbcbc; 
		}
		#kakaoPay{
		    display: block;
		    text-align: center;
		    width: 240px;
		    margin-top: 10px;
		    padding: 7px 20px;
		   border: 1px solid #c6c6c6;
		    font-family: "Noto Sans DemiLight", "Malgun gothic", "맑은 고딕", "Apple SD Gothic Neo", sans-serif;
		    font-weight: 700;
		    letter-spacing: -0.2px;
		    background: #f8f8f8;
		    color: #616161;
		}
		</style>
		<body>
			<div class="container">			
				<div class="main">
				<div id="main1">
					<div id="title"><h2>1단계: 예약자 정보</h2></div>
					<p>이 객실의 숙박객 중 한 명의 이름을 입력해 주세요.</p>
					<h5>호텔 체크인 시 제시할 신분증에 나와 있는 대로 숙박객 이름을 입력해 주세요. 성을 2개 이상 사용하실 경우 모두 입력해 주세요.</h5>
					이름 :  <input value="${x.uname}" size="50" style="font-size: larger";></br>
					연락처 : <input value="${x.tel}" size="50" style="font-size: larger";></br>
					생년월일 :  <input value="${x.birth}" size="50" style="font-size: larger";></br>
					<p>*특별 요청 사항(예: 간이 침대, 늦은 체크인)을 자세히 포함해 주세요. 요청하신 사항을 호텔이 제공할 수 있는지 확인 후 24시간 이내에 고객님께 메일로 알려드립니다. 24시간이 지나도록 메일을 받지 못하시면 호텔에 직접 문의하거나 호텔에서 다른 대안을 마련할 수 있도록 연락해 주세요. 특별 요청은 항상 보장되지는 않으며, 추가 요금이 발생할 수 있습니다.</p>
					<textarea id="room-details-room-0-special-request" name="pls" maxlength="500" size="100" data-error-title="특별 요청" style="margin: 0px; width: 1028px; height: 96px;"></textarea>
				</div>
				<div id="main2">
					<div id="title"><h2>2단계: 결제 세부 정보</h2></div>
					<p>영문으로만 입력해 주세요.*</p>
					이름 :  <input value="${x.uname}" size="50" style="font-size: larger";></br>
					연락처 : <input value="${x.tel}" size="50" style="font-size: larger";></br>
					<p>카드 종류*</p>
					<select id="payment-details-card-type-selector" name="payments.submittedPayments[0].paymentIdentifier" data-error-title="카드 종류" autocomplete="cc-type"><option value="">카드 종류</option><option value="CreditCard:AmericanExpress:AmericanExpress">American Express</option><option value="CreditCard:DinersClub:BC Card">BC Card</option><option value="CreditCard:DinersClub:Diners Club International">Diners Club International</option><option value="CreditCard:JCB:JCB">JCB</option><option value="CreditCard:MasterCard:MasterCard">Mastercard</option><option value="CreditCard:Visa:Visa">Visa</option></select>
					<p>카드 번호*</p>
					<input type="tel" id="payment-details-card-number" name="payments.submittedPayments[0].cardNumber" value="" autocomplete="cc-number" data-error-title="카드 번호" maxlength="23" placeholder="0000 0000 0000 0000">
					<p>만료 일자*</p>
					<span class="field-container di-ib mt-bee" data-for="expiry-month"><label for="expiry-month" class="fw-bold mb-tiny offscreen"><span class="c-hds-brand-1 fs-base fw-normal va-t">*</span></label><input type="tel" id="expiry-month" name="payments.submittedPayments[0].expiryMonth" value="" autocomplete="cc-exp-month" data-error-title="만료 월" maxlength="2" placeholder="월"></span><strong class="ph-tiny fs-med c-dark">  /  </strong><span class="field-container di-ib mt-bee" data-for="expiry-year"><label for="expiry-year" class="fw-bold mb-tiny offscreen"><span class="c-hds-brand-1 fs-base fw-normal va-t">*</span></label><input type="tel" id="expiry-year" name="payments.submittedPayments[0].expiryYear" value="" autocomplete="cc-exp-year" data-error-title="만료 연도" maxlength="2" placeholder="연도"></span>
					<p>보안 코드*</p>
					<input type="tel" id="payment-details-cvv" name="payments.submittedPayments[0].securityCode" value="" autocomplete="cc-csc" data-error-title="보안 코드" maxlength="4" placeholder="000">

		<button id="check_module"><img src="/resources/wegoimg/hotel/payment_icon_yellow_medium.png" alt=""></button>
		
				</div>
				<div id="main3">
					<div id="title"><h2>3단계: 취소 정책</h2></div>
					<p>디럭스 더블룸</p>
					체크인 : <input value="${x.indate}" size="50" style="font-size: larger";></br>
					체크아웃 :  <input value="${x.outdate}" size="50" style="font-size: larger";></br>
					<div class="widget-toggle cancellation-policy-penalty mb-base widget-toggle-done widget-toggle-open"><p class="widget-toggle-btn  widget-toggle-btn-icon widget-toggle-btn-open" type="button" aria-controls="widget-toggle-i1-e3" aria-expanded="true">*무료 취소 기한: 2020/01/01*</p><div class="widget-toggle-bd" data-widget-toggle-text="무료 취소 기한: 2020/01/01" data-widget-toggle-speed="normal" id="widget-toggle-i1-e3" aria-hidden="false" style="display: block;"><ul class="bullets mb-small"><li>2020/01/01, 오후 6:00(한국 표준시) 이후에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul><p class="mb-small cancellation-alternate">노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.</p></div></div>
					<h3>예약 약관</h3>
					<p>“예약” 버튼을 클릭하면 이용약관 및 개인정보 보호정책 을 읽었고 이에 동의하시는 것으로 간주됩니다.</p>
					<div class="field-container" data-for="agree-with-terms"><label class="option-label"><input type="checkbox" value="true" id="agree-with-terms" name="termsFormField.agreeToTerms" data-error-title="동의함"><span class="option-label-text">동의함</span><span class="c-hds-brand-1 fs-base fw-normal va-t">*</span></label><span class="state-indicator validation-state-indicator" data-for="agree-with-terms"></span></div>
					<button type="submit" id="book" class="genric-btn primary radius" style="inline-size:-webkit-fill-available; font-size: x-large;" title="구매를 완료하려면 클릭하세요." aria-controls="book-button-tooltip-container" tabindex="0" style="">예약</button>
				</div>
				</div>
		
		</div>
		</body>`
		}
}