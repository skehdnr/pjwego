var write = write||{}
write = (()=>{
	const WHEN_ERR = `호출하는 글쓰기 js가 없음`
	let js
	let writevuejs, communityjs
	let init =()=>{
		js = $.js()
		writevuejs = js + `/community/vue/write_vue.js`
		communityjs = js + `/community/communityjs/write.js`
	}
	
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(writevuejs),
			$.getScript(communityjs)
		).done(()=>{
			setContentView()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView=()=>{
		$(`#communitybody`).html(write_vue.write())
		write()
	}
	
	let write=()=>{
		$(window).unbind(`scroll`)
		let uploadFiles = [];

		$("#drop").on(`dragenter`, function (e) { //드래그 요소가 들어왔을떄
			$(this).addClass(`drag-over`);
		}).on(`dragleave`, function (e) { //드래그 요소가 나갔을때
			$(this).removeClass(`drag-over`);
		}).on(`dragover`, function (e) {
			e.stopPropagation();
			e.preventDefault();
		}).on(`drop`, function (e) { //드래그한 항목을 떨어뜨렸을때
			e.preventDefault();
			$(this).removeClass(`drag-over`);
			let files = e.originalEvent.dataTransfer.files; //드래그&드랍 항목

			let file = files[0];
			let size = uploadFiles.push(file); //업로드 목록에 추가

			if (size < 2) {
				preview(file, size - 1);
			} else {
				alert(`파일업로드실패`)
			}


			$(`#writebtn`).click(e => {
				e.preventDefault();
				let json = {
					title: $(`#form_write input[name="title"]`).val(),
					content: $(`#form_write textarea[name="content"]`).val(),
					userid: sessionStorage.getItem(`userid`)
				}
			
				$.ajax({
					url: `/community/write`,
					type: `POST`,
					data: JSON.stringify(json),
					dataType: `json`,
					contentType: `application/json`,
					success: d => {
						
						let formData = new FormData()

						$.each(uploadFiles, function (i, file) {
							if (file.upload != `disable`)  //삭제하지 않은 이미지만 업로드 항목으로 추가
								formData.append(`uploadFile`, file, file.name)  //모든 첨부파일은 upload-file 이름으로 전달함
						});

						//formData.append(`uploadFile`,file)
						$.ajax({
							url: `/community/fileupload`,
							data: formData,
							type: `POST`,
							contentType: false,
							processData: false,
							success: d => {
							}
						})
						community.onCreate()
					},
					error: e => {
						alert(`글쓰기 ajax실패`)
					}
				})
			})

			function preview(file, idx) {
				let reader = new FileReader();
				reader.onload = (function (f, idx) {
					return function (e) {
						let div = `<div class="thumb" style="width:100px; height:80px"> <div class="close" data-idx=${idx}>X</div> 
				<img src=${e.target.result} style="width:50px; height:50px" /> </div>`
						$(div).appendTo(`#thumbnails`)
					}
				})(file, idx);
				reader.readAsDataURL(file)
			}
		})
		$("#thumbnails").on("click", ".close", function (e) {
			let $target = $(e.target)
			let idx = $target.attr(`data-idx`)
			uploadFiles[idx].upload = `disable` //삭제된 항목은 업로드하지 않기 위해 플래그 생성
			$target.parent().remove() //프리뷰 삭제
		})
	}
	
	/* let insertReply=()=>{
			$(`#reply_go`).click(e=>{
					e.preventDefault()
					let data = {
					board_comment: $(`#writecomment`).val(),
					userid: sessionStorage.getItem(`userid`),
					art_seq: x.art_seq
				}
				
    		$.ajax({
    			url : `/community/insert/Reply`,
    			type : `POST`,
    			dataType : `json`,
    	    	data : JSON.stringify(data),
    	    	contentType : `application/json`,
    	    	success : d=>{
    	    		if(d.msg === `SUCCESS`){
								alert("등록되었습니다.")
								
								$.getJSON(`/hotel/newComments/`+x.art_seq, d=>{
									
									let new_comments = d.newComment
								
									$.each(new_comments, (i,j)=>{
									$(`<div id="detail_comments" style="border: 1px solid black; "><h3>${j.board_comment}</h3><h4 style="text-align-last: right"> ----${j.userid}`).appendTo(`#main3`)
									
									})
								})
								
	    			}else
	    				alert(`다시 시도해주세요`)
    	    	},
    	    	error : e=>{
    	    		alert(`ajax 실패....`)
    	    		
    	    	}
				})

				
				})
	} */
	return{onCreate}
})()