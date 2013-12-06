$(function(){

	function getFiveProducts() {
		$.ajax({
			url: "/getProducts", 
			type: "GET",
			dataType:"json",
			success: function(data) {
				$.each(data, function(i, article){
					var divArticle = $("<div/>", {class:"article large-4"});
					divArticle.append($("<p/>", {class:"article_name"}).append(article.name));
					divArticle.append($("<img/>", {class:"article_url"}).attr("src", article.url));
					divArticle.appendTo($(document.body));
					//au clic sur un article changement de style
					divArticle.on("click", function() {
						$(".article.activity").removeClass("activity");
						$(this).addClass("activity");
					});
				});
			}
		});
	}
	getFiveProducts();	

});