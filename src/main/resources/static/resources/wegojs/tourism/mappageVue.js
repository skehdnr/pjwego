"use strict"

var mappageVue = mappageVue || {}
mappageVue = {
		mappageVue_body : () => {
			return `<div id ="containers" style = "height: 1300px; width: 2000px; margin: 0 auto; text-align : center;">
			
					
						<ul class = "tab">
							<li id="mapmap" class = "current" data-tab="tab1"><a href="#">Map</a></li>
							<li id ="subsub" data-tab="tab2"><a href="#">Subway Map</a></li>
						</ul>
						
						<div id = "tab1" class="tabcontent current" style = "width:1200px;height:500px; display:inline-blcok;">
							<div id="map" style="width:1200px;height:500px;">
							</div>
						</div>
						
						<div id = "tab2" class="tabcontent" style="width:1200px; height:500px; display:inline-blcok;">
							<h3>Subway Map</h3>
							<p>Subway Map</p>
						</div><br/>
					
					
					
						<ul class = "tabtab">
							<li id = "infofofo" class="currentt" data-tab="tab3"><a href="#">INFO</a></li>
							<li id = "newnews" class="currentt" data-tab="tab4"><a href="#">NEWS</a></li>
							<li id = "reviewreview" class="currentt" data-tab="tab5"><a href="#">REVIEW</a></li>
						</ul>
							
						<div id = "tab3" class="tabcontentt currentt" style="width:1200px; height:700px; display:inline-blcok;">
						</div>
						
						<div id = "tab4" class="tabcontentt" style="width:1200px; height:700px; display:inline-blcok;">
						</div>
						
						<div id = "tab5" class="tabcontentt" style="width:1200px; height:700px; display:inline-blcok;">
							<h3>review</h3>
						</div>
					
					
      </div>`
		}
}