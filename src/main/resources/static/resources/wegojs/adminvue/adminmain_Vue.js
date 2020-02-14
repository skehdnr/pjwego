var adminmain_Vue = adminmain_Vue||{}
adminmain_Vue = {
	admin_body:x=>{
		return `<div id="admin-container">
		<div align="center" style= "solid black;">
	<div style="solid black;">
		<div>
			<div id="admin-header">
				<h1 align="center">어드민 페이지</h1>
			</div>
			<div class="form-group row">
				<div style="width:800px">
				    <canvas id="myChart"></canvas>
				</div>
			</div>		
			 <div class="form-group row">
				<label for="filesup" class="col-sm-2 form-control-label">**파일폴더등록**</label>
					<div class="col-sm-5">
						<input id="fileup" style=" width:340px; height:150px; class="form-control" placeholder="파일 *폴더* 저장 입니다.파일을 드래그해서 올려주세요">          
						<div id="thumbnails"style="border: 1px solid #d4d4d4; width:95%; height:100px; padding:3px;writing-mode: vertical-lr;">
						</div>
						<input type="button" id="fileupup" value="폴더저장"/>
					</div>
			</div>
					  
			 </div>
			 </div>
		</div>
	</div>
</div>`
	}
}

