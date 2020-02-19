var hotelDetailVue = hotelDetailVue || {}
hotelDetailVue = {
		hDetail_body: x=>{
			return `<style>
			.modal{
			    display: grid;
			
			        grid-template-rows: 100px 630px;
			        width: 50%
			        height: 100%
			        border: 1px solid black; 
			        text-align: center;
			}
			.starR{
  background: url('/web/resources/wegoimg/hotel/star.png') no-repeat right 0;
  background-size: auto 100%;
  width: 30px;
  height: 30px;
  display: inline-block;
  text-indent: -9999px;
  cursor: pointer;
}
.starR.on{background-position:0 0;}
			.title{
			      width: inherit;
			    height: 100%; 
			    text-align: center;
			    float: left;
			  border: 1px solid #bcbcbc; 
			    }
			.head{

			    display:inline-flex;
			     width: 100%;
			    height: 10%;
			    border: 1px solid #bcbcbc; 
			}
			.main{
			    display:inline-flex;
			     width: 100%;
			    height: 90%;
			    border: 1px solid #bcbcbc; 
			}
			.content{
			     display:inline-table;
			     width: 100%;
			    height: 100%;

			    border: 1px solid #bcbcbc; 
			}
			.con{
			      width: inherit;
			    height: 100%; 
			    text-align: center;
			    float: left;
			  border: 1px solid #bcbcbc;   
			}
			
				.container{
		
					grid-template-columns: 0% 1fr;
				
					height: 100%
					border: 1px solid #bcbcbc; 
					grid-template-areas: 
					"header header"
					"side main"
					"footer footer"}
				.header{
					grid-area: header;
					margin: 0 auto;
					border: 1px solid #bcbcbc; 
				}
					.main{
					grid-area: main;
					display: grid;
				
					border: 1px solid #bcbcbc; 
				}
			
			.main1 {
			
				background-repeat: no-repeat;
				  background-attachment: fixed;
			  background-size: 100% 100%;
			          font-weight: bold;
			          text-align: center;
			        background-color: rgba(255);
				border: 1px solid #bcbcbc;} ;
				.main2 {
				background-repeat: no-repeat;
				  background-attachment: fixed;
			  background-size: 100% 100%;	
			          font-weight: bold;
			          text-align: center;
			        background-color: #ffffff;
			        opacity: 0.9;
				border: 1px solid #bcbcbc; 
				}
			
				.main3 {
				background-repeat: no-repeat;
				  background-attachment: fixed;
			  background-size: 100% 100%;
			        font-weight: bold;
			          text-align: center;
			        background-color: #ffffff;
			        opacity: 0.9;
				border: 1px solid #bcbcbc; 
				}

			.main_common2{
			    display:inline-table;
			    float: left;
			    width: 430px;
			    height: 300px;
			    border: 1px solid #bcbcbc; 
			}
			.main_common3{
			    width: 100%;
			    height: 100px;
			    border: 1px solid #bcbcbc;
			    margin-bottom: auto 0;
			}
			.calendar-container{
				 width: 100%;
			    height: 100%;
			}
			.content1{
				grid-area: main3;
				display: grid;
				grid-template-rows: 250px 250px
			    width: 50px;
			    height: 50px; 
			}
			.content2{
				border: 1px solid black; 
			    height: 250px; 
			}
			.inner {

				background-repeat: no-repeat;

			  background-size: 100% 100%;
			    display:inline-table;
			     width: 50%;
			    height: 100%;
			    float: left;
			    border: 1px solid #bcbcbc; 
			}
			.inner2 {

					background-repeat: no-repeat;

				  background-size: 100% 100%;
				    display:inline-table;
				     width: 50%;
				    height: 100%;
				    float: left;
				    border: 1px solid #bcbcbc; 
				}
			.content3{
				grid-area: main_2 main_common2;
				width: 100%;   
			    height: 100px;
			    border: 1px solid #bcbcbc; 
			}
			#star_grade a{
			        text-decoration: none;
			        color: gray;
			    }
			    #star_grade a.on{
			        color: red;
			    }
			#comments{  border: 1px solid #bcbcbc;}
			
.hotelnavi {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
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

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
			
			
			</style>
			<body>
				<div class="container">
					<div class="header">
			   <div class="main">
			      <div class="main1" id="main1">

			    </div>
			

			<div class="main4" id="main4" style="border: 1px solid #bcbcbc;"></div>
			<div class="last_main" style="border: 1px solid #bcbcbc;">
			<div class="main5" id="main5" style="border: 1px solid #bcbcbc;"></div>
					<div class="main3" id="main3" style="height:900px;">
										
										</div>
										<div class="comment_place" id="comment_place" style="text-align: center;border: 1px solid #bcbcbc;height:100px;"></div>
				</div>
				
				
			</div>
					</div>
					</div>
				</div>
			</body>`
		}
}