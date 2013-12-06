$(function(){
//Called in articleDetails.js when DOM is loaded
function onload(){
	 function getFiveProducts() {
		$.ajax({
			url: "/getProducts", 
			type: "GET",
			dataType:"json",
			success: function(data) {
				$.each(data, function(i, article){
					var divArticle = $("<div/>", {class:"article large-4"});
					divArticle.append($("<p/>", {class:"article_name"}).append(article.name));
					divArticle.append($("<img/>", {class:"article_url"}).attr("src", /*article.url*/"http://placekitten.com/200/300"));
					// var imgArticle = '<img src="' + /*article.url*/'http://placekitten.com/200/300' + '" class="article_url"/>';
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
