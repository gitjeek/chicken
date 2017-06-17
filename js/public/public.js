var main = {};
main.clickme =function(){
	alert("hey");
}

main.doAjax = function(params) {
	$.ajax({
    	url:params.url,
    	type:'GET',
    	dataType:'json',
		success:function(response) {
			console.log(response);
			//返回成功
			if (response.responseHeader) {
				//如果有回调则执行回调
				if (params.success) {
					params.success(response);
				}
			}
			//返回失败
			else {
				console.log(response);
				//如果有回调则执行回调
				if (params.error) {
					params.error(response);
				}
				//没有则直接弹出错误信息
				else {
					alert(response.msg);
				}
			}
		},
		error:function(response) {
			console.log(response);
			if (params.error) {
				params.error(response);
			}
		}
    });
}

main.avatar_error = function() {
	var img = event.srcElement; 
	img.src = "images/wrong.jpeg"
}

main.getTypeDesc = function(type) {
	type = parseInt(type);
	switch (type) {
		case 1:
			return '[一级]';
		case 2:
			return '[二级]';
		case 3:
			return '[三级]';
		
		default:
			return '[未定级]';
	}
}


