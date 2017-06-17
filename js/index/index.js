var main = {};
var _SOLR_ADDR = '120.76.144.46:8080/solr/lebojson/select?indent=on&wt=json&q=*:*';
//设置cookie(24小时过期 )
main.setCookie = function(name,value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//获取cookie
main.getCookie = function(name) {
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)) {
		return unescape(arr[2])
	}
	return null;
}
//删除cookie
main.delCookie = function(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = main.getCookie(name);
	if(cval!=null) {
		document.cookie = name + "="+cval+";expires="+exp.toGMTString();
	}
}

main.getToken = function() {
	return $(App.getPage(0)).find('.login-form input[name=token]').val();
}

main.doAjax = function(params) {
	// console.log(params);
	$.ajax({
    	url:'http://120.76.144.46:8080/solr/lebojson/select?indent=on&q=1&wt=json',
    	type:'GET',
    	dataType:'json',
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



