var hotelMainVue = hotelMainVue || {}
hotelMainVue = { 
		hmain_body: x=>{
			return `<style>
			
			.layer { display: none; }
			#best{
			 color: #fe5c24;
			    border: 1px solid #fe5c24;
			    background: #fff;
			    margin-right: 10px;
			    margin-top: 10px;
			    line-height: 40px;
			    padding: 0 30px;
			    font-size: .8em;
			    text-align: center;	
				 font-size: x-large	
			}
			#location{
			 color: #fe5c24;
			    border: 1px solid #fe5c24;
			    background: #fff;
			    margin-right: 10px;
			    margin-top: 10px;
			    line-height: 40px;
			    padding: 0 30px;
			    font-size: .8em;
			    text-align: center;	
				 font-size: x-large	
			}
			   #persons{
			 color: #fe5c24;
			    border: 1px solid #fe5c24;
			    background: #fff;
			    margin-right: 10px;
			    margin-top: 10px;
			    line-height: 40px;
			    padding: 0 30px;
			    font-size: .8em;
			    text-align: center;	
				 font-size: x-large	
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
			                            <h2>HOTEL</h2>
		
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			 
			<div id="mainhotel" class="container">
					<div class="header">
					<form id="paging_form" class="form-inline my-2 my-lg-0">
						<select name="select" id="location" >
							<option value="전체" selected="selected"><a href="#" id="all">전체</a></option>
							<option value="강남구"><a href="#" id="gangnam">강남구</a></option>
							<option value="종로구"><a href="#" id="jongro">종로구</a></option>
							<option value="중구"><a href="#" id="junggu">중구</a></option>
							<option value="강서구"><a href="#" id="dongdaemungu">강서구</a></option>
							<option value="마포구"><a href="#" id="dongdaemungu">마포구</a></option>
							<option value="금천구"><a href="#" id="dongdaemungu">금천구</a></option>
							<option value="구로구"><a href="#" id="dongdaemungu">구로구</a></option>
							<option value="용산구"><a href="#" id="dongdaemungu">용산구</a></option>
							<option value="동대문구"><a href="#" id="dongdaemungu">동대문구</a></option>
							<option value="서대문구"><a href="#" id="dongdaemungu">서대문구</a></option>
							<option value="영등포구"><a href="#" id="dongdaemungu">영등포구</a></option>
							</form>
						</select>
						<select name="select" id="persons" >
							<option value="option6">1명</option>
							<option value="option7">2명</option>
							<option value="option8">3명</option>
							<option value="option9">4명</option>
						</select>
						
						
					
			</div>
			<span style="float: right;>
			<a id="first_all" href="#" >| 전체 |</a>
			<a id="first_rating" href="#" > 평점순 |</a>
			<a id="first_price" href="#"> 최저가순 |</a>
			</span>

			
			</section>
					<div class="calendar-container" style="font-size: 20px;">
					<span class="time-tab"><label class="in"></label><input type="date" id="checkIn" placeholder="Check in"> <input type="text" id="days" size="6" style="text-align:center;">일 <input type="date" id="checkOut" placeholder="check-out">
			<a href="#" id= "aa" class="genric-btn primary radius">Search</a></span></div>
			 <button id = "tablebtn">값 넘기기 테스트중</button>
		
			                              <div class="form-group">
                                  <div class="input-group mb-3">  
                                      <input id="hotelsearchword" type="text" class="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'">
                                      <div class="input-group-append">
                                          <button id="hotelsearchbtn" class="btn" type="button"><i class="ti-search"></i></button>
                                      </div>                                    
                                  </div>
                              </div>
			
			
			    
			    <section class="top_place section_padding">
			        <div class="container" >

			            <div class="row" id="hotelList">

			            </div>
			        </div>
			    </section>
			 
			</body>`
		}
}