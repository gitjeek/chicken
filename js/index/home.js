App.controller('home', function (page) {
	var content = $(page).find('.content');
	var data,result;
	$(page).on('appLayout', function(){


  		// $(page).find('.json').bind('click',function(){
		 	// $.ajax({
    //             type : 'GET',
    //             url : "http://120.76.144.46:8080/solr/lebojson/select",
    //             data : {
    //                 wt : "json",
    //                 q : "1",
    //                 indent : true,
    //                 "json.wrf" : 'callback',
    //             },
    //             dataType : 'json',
    //             // jsonp : "callback",
    //             // jsonpCallback : "callback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                
    //         	error: function() {
    //                 content.html("shibai");
    //             }
    //         });
    //         function(res) {
    //         		var responseHeader = res.responseHeader;
    //         		var response = res.response;
	   //          	content.html(res.responseHeader);
    //         	}


		//这段ajax是好的
		$(page).find('.json').bind('click',function(){

			$.ajax({
				url:"http://120.76.144.46:8080/solr/lebojson/select?indent=on&q=1&wt=json", 
				type: 'GET',
        		dataType: 'json',
				success: function(result){
					content.text(result.response.docs[1].name);

				}

			});
				
		 });

		//跳转搜索列表页接口
		$(page).find('.searchRes').bind('click',function(){
			App.load('searchRes');
		});

	});
});


