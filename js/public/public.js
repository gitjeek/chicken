var main = {};
main.clickme =function(){
	alert("hey");
};
main.doAjax = function(params) {
	$.ajax({
    	url:'http://120.76.144.46:8080/solr/lebojson/select?indent=on&wt=json',
    	type:'GET',
    	dataType:'JSON',
		async:params.async?true:false,
		data:params.data,
		success:function(response) {
			// console.log(response);
			//返回成功
			if (response.docs) {
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



