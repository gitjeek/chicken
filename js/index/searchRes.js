App.controller('searchRes',function(page, pageData){
    //pageData.qes = "甘肃瓷器";
    //pageData.lab = "一级";
    //pageData.labTy = "level";
    pageData.loc = "甘肃省";
    pageData.relName = "白瓷";
    pageData.musName = "西河";
    pageData.dyn = "宋";
    //pageData.level = "一级";
    pageData.mater = "瓷";
    pageData.typ = "瓷器";
    pageData.sortlev = "级别从高到低";

    var searchTag = "首页>搜索";
    var urlList = "http://120.76.144.46:8080/solr/lebojson/select?indent=on&wt=json";
    if(pageData.qes != null){
        searchTag = searchTag + '>' + pageData.qes;
        urlList = urlList + "&q=" + pageData.qes;
    }else{
        urlList = urlList + "&q=*:*";
    }
    if(pageData.lab != null){
        searchTag = searchTag + '>' + pageData.lab;
        urlList = urlList + "&fq=" + pageData.labTy + ":" + pageData.lab;
    }
    if(pageData.loc != null){
        searchTag = searchTag + '>' + pageData.loc;
        urlList = urlList + "&fq=location:" + pageData.loc;
    }
    if(pageData.relName != null){
        searchTag = searchTag + '>' + pageData.relName;
        urlList = urlList + "&fq=name:" + pageData.relName;
    }
    if(pageData.musName != null){
        searchTag = searchTag + '>' + pageData.musName;
        urlList = urlList + "&fq=museum_name:" + pageData.musName;
    }
    if(pageData.dyn != null){
        searchTag = searchTag + '>' + pageData.dyn;
        urlList = urlList + "&fq=productionDynasty:" + pageData.dyn;
    }
    if(pageData.level != null){
        searchTag = searchTag + '>' + pageData.level;
        urlList = urlList + "&fq=level:" + pageData.level;
    }
    if(pageData.mater != null){
        searchTag = searchTag + '>' + pageData.mater;
        urlList = urlList + "&fq=materials:" + pageData.mater;
    }
    if(pageData.typ != null){
        searchTag = searchTag + '>' + pageData.typ;
        urlList = urlList + "&fq=propertyType:" + pageData.typ;
    }
    if(pageData.sortlev != null){
        searchTag = searchTag + '>' + pageData.sortlev;
    }

    $(page).find('.searchTag').text(searchTag);

    var $template = $(page).find('.all-item');
    var $items = $(page).find('.all-items');

        $(page).find('.all-item').remove();

        main.doAjax({

            url:urlList,
            success:function(ret) { 

                ret.response.docs.forEach(function (res) {
                    
                    var $item = $template.clone(true);
                    var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                    $item.find('.myimg').attr('src', myimg);
                    $item.find('.relName').text(res.name);
                    $item.find('.dyn').text(res.productionDynasty);
                    $item.find('.level').text(main.getTypeDesc(res.level));
                    $item.find('.musName').text(res.museum_name);
    	            $items.append($item);

                });
            }
        }); 

});