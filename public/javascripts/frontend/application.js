$(function(){
	 function getFiveProducts() {
		$.ajax({
					url: "http://geekstudentinside.herokuapp.com/getProducts", 
					type: "GET",
					dataType:"json",			
					crossDomain: true,
					headers: { 'Access-Control-Allow-Origin': '*' },
					complete: function(data) {
						for(var article in data) {
							var divArticle = $("<div/>",{class:"article"});
							divArticle.append($("<p/>", {class:"article_name"}).append(article.name));
							divArticle.append($("<img/>", {class:"article_url"}, {src:article.url}));
							divArticle.appendTo($(document.body));
						}
					}
			});
	 }
	 getFiveProducts();
});