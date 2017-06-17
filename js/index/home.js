App.controller('home', function (page) {
	var content = $(page).find('.content');
	var data,result;

		$(page).find('.complex-search').bind('click',function(){

			// $.ajax({
			// 	url:"http://120.76.144.46:8080/solr/lebojson/select?indent=on&q=1&wt=json", 
			// 	type: 'GET',
   //      		dataType: 'json',
			// 	success: function(result){
			// 		content.text(result.response.docs[1]);
			// 	}

			// });
			
			App.load('complex-search');





		 });

		//跳转搜索列表页接口
		$(page).find('.searchRes').bind('click',function(){
			App.load('searchRes');
		});

});


