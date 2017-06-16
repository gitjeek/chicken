App.controller('home', function (page) {
	var content = $(page).find('.content');
	var data;
	$(page).on('appLayout', function(){


		main.doAjax({
	    	success:function(response) {
					
					data = response;
  					console.log(data);

  			}
  		});

		//这段ajax是好的
		$(page).find('.json').bind('click',function(){
			$.ajax({
				url:"http://120.76.144.46:8080/solr/lebojson/select?indent=on&q=*:*&wt=json", 
				type: 'GET',
        		dataType: 'JSONP',
				success: function(result){
					content.html(result);
				}

			});
				
		});

	});
});


