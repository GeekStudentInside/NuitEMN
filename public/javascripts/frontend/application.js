var foo;
$(function(){
	 function getFiveProducts() {
	 	console.log("bar");
		$.ajax({
					url: "/getProducts", 
					type: "GET",
					dataType:"json"
					}).done(function(data) {
						foo = data;						
						console.log(data);
						for(var i = 0 ; i < data.length ; ++i) {
							var article = data[i];
							/*var divArticle = $("<div/>",{class:"article"});
							divArticle.append($("<p/>", {class:"article_name"}, {html:article.name}); //.html(article.name));
							divArticle.append($("<img/>", {class:"article_url"}, {src:article.url}));
							divArticle.appendTo($(document.body));*/
							var divArticle = $('<div class="article"></div>');
							divArticle.append($('<p class="article_name">' + article.name + '</p>'));
							divArticle.append($('<img src="' + article.url + '" class="article_url"/>'));
							$('body').append(divArticle);
						}});
	 }
	 getFiveProducts();
});