var adminmain_Vue = adminmain_Vue||{}
adminmain_Vue = {
	admin_body:x=>{
		return `<style>
			
.admin_navi {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #9E9E9E;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
			</style>
			<section class="breadcrumb breadcrumb_bg">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="breadcrumb_iner">
			                        <div class="breadcrumb_iner_item text-center">
			                            <h2>ADMIN</h2>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
		<div id="admin-container" style="height:960px;">
		<div align="center" style= "solid black;">
	<div style="solid black;">
		<div>
			<div class="admin_navi" id="admin_navi" style="border: 1px solid #bcbcbc;"></div>
			<div class="form-group row">
			<div id="festivalinfo"></div>
				<div style="width:800px">
					<canvas id="myChart"></canvas>
					<div id="insertfestival"></div>
				</div>
			</div>	
			<div id="festival_insert">
			 
			</div>
			</div>			  
			 </div>
			 </div>
		</div>
	</div>
</div>`
	}
}

