"use strict"
var adminmain = adminmain ||{}
adminmain=(()=>{
	const WHEN_ERR = `호출하는 어드민 페이지가 없음`
	let js,mainVuejs,mainHomejs,adminmainVuejs,routerjs
	let init = ()=>{
		js = $.js()
		mainVuejs =  js +`/vue/mainVue.js`
		mainHomejs = js + `/cmm/mainHome.js`
		routerjs = js + `/cmm/router.js`
		adminmainVuejs = js + `/adminvue/adminmain_Vue.js`
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(mainHomejs),
			$.getScript(routerjs),
			$.getScript(adminmainVuejs)
		).done(()=>{
			setContentView()
			/* excelup() */
			admin_navibar()
			hchart()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView =()=>{
		$('#mainbody').html(adminmain_Vue.admin_body())
	}
	
	let hchart=()=>{
		$(`<canvas id="myChart" style="width:800px;"></canvas>`).appendTo(`#festivaladmin`)
			let ctx = document.getElementById('myChart');
			
			let myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구",
		        		 "은평구", "서대문구", "마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구",
		        		 "강남구", "송파구", "강동구"],
		        datasets: [{
		            label: '# 지역별 호텔 등록현황',
		            data: [18, 6, 6, 3, 2, 15, 4, 12, 1, 2, 8, 5, 2, 4, 2, 3, 2, 9, 3, 2, 3, 4, 20, 8, 2],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	}

	let tchart=()=>{
		$(`<canvas id="myChart" style="width:800px;"></canvas>`).appendTo(`#festivaladmin`)
			let ctx = document.getElementById('myChart');
			
			let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구",
		        		 "은평구", "서대문구", "마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구",
		        		 "강남구", "송파구", "강동구"],
		        datasets: [{
		            label: '# 지역별 관광지 등록현황',
		            data: [18, 6, 6, 1, 2, 2, 4, 0, 1, 5, 4, 9, 2, 4, 1, 3, 2, 0, 3, 2, 3, 4, 7, 8, 2],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	}

	let fchart=()=>{
		$.getJSON(`/admin/chartlead/`, d=>{
			alert(d)
		$(`<canvas id="myChart" style="width:800px;"></canvas>`).appendTo(`#festivaladmin`)
			let ctx = document.getElementById('myChart');
			let myChart = new Chart(ctx, {
		    type: 'pie',
		    data: {
		        labels: ["종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구",
		        		 "은평구", "서대문구", "마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구",
		        		 "강남구", "송파구", "강동구"],
		        datasets: [{
		            label: '# 지역별 행사 등록현황',
		            data: d,
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)',
		                'rgba(255, 99, 132, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)',
		                'rgba(255,99,132,1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
		})
	}
	
	let fileupload=()=>{
		$(window).unbind('scroll');
		let uploadFiles = [];
		$("#fileup").on('dragenter', function(e) { //드래그 요소가 들어왔을떄
			$(this).addClass('drag-over');
		}).on('dragleave', function(e) { //드래그 요소가 나갔을때
			$(this).removeClass('drag-over');
		}).on('dragover', function(e) {
			e.stopPropagation();
			e.preventDefault();
		}).on('drop', function(e) { //드래그한 항목을 떨어뜨렸을때
			e.preventDefault();
			$(this).removeClass('drag-over');
			let files = e.originalEvent.dataTransfer.files; //드래그&드랍 항목
			for(let i = 0; i < files.length; i++) {
			let file = files[i];
			let size = uploadFiles.push(file); //업로드 목록에 추가
				preview(file, size - 1); //미리보기 만들기
			}
			
			$('#insertfestivals').click(e=>{
			e.preventDefault();
			let json = {
				festival_title : $('#festivaltitle').val(),
				festival_date : ($('#festivaldate1').val()+'~'+$('#festivaldate2').val()),
				festival_info : $(`#fastivalinfos`).val(),
				festival_addr : $(`#fastivaladdr`).val(),
				festival_area : $(`#fastivalarea`).val()
			}
				let formData = new FormData()
			
			$.each(uploadFiles, function (i, file) {
				if (file.upload != 'disable')  //삭제하지 않은 이미지만 업로드 항목으로 추가
					formData.append('uploadFile', file, file.name);  //모든 첨부파일은 upload-file 이름으로 전달함
			});
				/*formData.append('uploadFile',file)*/
			$.ajax({
				url : '/admin/festivalinsert',
				data: JSON.stringify(json),
				type : 'POST',
				dataType: `json`,
				contentType: `application/json`,
				success: d =>{
					
					console.log(d)
					alert('ddddd'+d)
					$.ajax({
						url: '/admin/festivalImg/'+d,
						data : formData,
						type : 'PUT',
						contentType : false,
						processData: false,
						success : d=> {
							alert("이미지업로드 성공 ")
						}
					})
					adminmain.onCreate()
				},
				error:e=>{
					alert(' 파일업로드 실패')
				}
			})
		})
		function preview(file, idx) {
			let reader = new FileReader();
			reader.onload = (function(f, idx) {
			return function(e) {
				let div = `<div class="thumb" style="width:100px; height:80px"> <div class="close" data-idx=${idx}>X</div> 
				<img src=${e.target.result} style="width:50px; height:50px" /> </div>`;
			$(div).appendTo('#thumbnails')
			};
			})(file, idx);
			reader.readAsDataURL(file);
		}
	});
		$("#thumbnails").on("click", ".close", function(e) {
		let $target = $(e.target);
		let idx = $target.attr('data-idx');
		uploadFiles[idx].upload = 'disable'; //삭제된 항목은 업로드하지 않기 위해 플래그 생성
		$target.parent().remove(); //프리뷰 삭제
		});
	}
	
	let admin_navibar=()=>{
		$(`<ul class="adminnavi">
			<li><a id="hotelchart" href="#">호텔현황</a></li>
			<li><a id="tourchart" href="#">관광지현황</a></li>
			<li><a id="festivalchart" href="#">행사현황</a></li>
			<li><a id="insert_fe" href="#">행사 등록하기</a></li>
		</ul>`).appendTo('#admin_navi')
		navilist()
	}
	let navilist=()=>{
	$('#hotelchart').click(e=>{
	    				e.preventDefault()
    					$('#festivaladmin').empty()
    					$(hchart()).appendTo('#festivaladmin')
					})
	$('#tourchart').click(e=>{
	    				e.preventDefault()
    					$('#festivaladmin').empty()
    					$(tchart()).appendTo('#festivaladmin')
					})
	$('#festivalchart').click(e=>{
	    				e.preventDefault()
    					$('#festivaladmin').empty()
    					$(fchart()).appendTo('#festivaladmin')
					})
	$('#insert_fe').click(e=>{
						e.preventDefault()
						$('#festivaladmin').empty()
						festival_inserts()
					})
	}
	 let festival_inserts=()=>{
		 $(`<div id="instyle" style="text-align:center; margin-top:3%;"><div class="form-group row">
					<label for="festivaltitle" class="col-sm-2 form-control-label">*Festival명 입력</label>
						<input id="festivaltitle" type="text" class="form-control" name="festivaltitle" 
						autocomplete="off" style="width:80%;">
					</div>
					<div class="form-group row">
					<label for="fastivaldate" class="col-sm-2 form-control-label">*Festival 시작일 </label>
						<input id="festivaldate1" type="date" class="form-control" name="festivaldate" 
						autocomplete="off" style="width:80%;">
					</div>
					<div class="form-group row">
					<label for="fastivaldate" class="col-sm-2 form-control-label">*Festival 종료일</label>
						<input id="festivaldate2" type="date" class="form-control" name="festivaldate" 
						autocomplete="off" style="width:80%;">
					</div>
					<div class="form-group row">
					<label for="fastivaladdr" class="col-sm-2 form-control-label">*Festival 주소 </label>
						<input id="fastivaladdr" type="test" class="form-control" name="fastivaladdr" 
						autocomplete="off" style="width:80%;">
					</div>
					<div class="form-group row">
					<label for="fastivalarea" class="col-sm-2 form-control-label">*Festival 지역 </label>
						<input id="fastivalarea" type="test" class="form-control" name="fastivalarea" 
						autocomplete="off" placeholder="ex) 강남구" style="width:80%;">
					</div>
					<div class="form-group row">
					<label for="fastivalinfos" class="col-sm-2 form-control-label">*Festival소개 입력</label>
						<textarea id="fastivalinfos" style="width:340px; height:150px;"></textarea>
					</div>

				<div class="form-group row">
				<label for="filesup" class="col-sm-2 form-control-label">파일업로드</label>
						<input id="fileup" style=" width:340px; height:150px; class="form-control" placeholder="파일을 드래그해서 올려주세요" readonly>          
						<span>
						<div id="thumbnails"style="width:400px; height:150px; padding:3px;writing-mode: vertical-lr;">
						</div></span>
						<input class="genric-btn primary radius" type="button" id="insertfestivals" value="페스티벌등록" style="margin-left:1%; margin-top:3%; margin-right:1%;inline-size:-webkit-fill-available; font-size: x-large;"/>
					</div></div>`).appendTo(`#festivaladmin`)
					fileupload()
	} 
	return{onCreate}
})()