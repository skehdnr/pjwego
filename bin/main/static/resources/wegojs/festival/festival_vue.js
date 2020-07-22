var festival_vue = festival_vue || {}
festival_vue = {
	fmain_body: x=>{
		return `  <style>
.pagination {
  display: inline-block;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
.pagination a.active {
  background-color: #4CAF50;
  color: white;
}
.pagination a:hover:not(.active) {background-color: #ddd;}
</style>
		<body>			
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