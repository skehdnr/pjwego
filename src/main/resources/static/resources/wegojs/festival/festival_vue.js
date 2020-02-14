var festival_vue = festival_vue || {}
festival_vue = {
	fmain_body: x=>{
		return `<body>			
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
			 
			<div class="container">
					<div class="header">
					<button id="festivalcraw">크롤링</button>
			</div>
			</section>
		
			    
			    <section class="top_place section_padding">
			        <div class="container" >

			            <div class="row" id="festivalList">

			            </div>
			        </div>
			    </section>
			 
			</body>`	
	}
}