//$(function(){
//Called in articleDetails.js when DOM is loaded
function onload(){
	 function getFiveProducts() {
		$.ajax({
            url: "/getProducts",
            type: "GET",
            dataType:"json"
        }).done(function(data)
            {
                for(var i = 0 ; i < data.length ; ++i)
                {
                    var article = data[i];
                    var divArticle = $('<div class="article"></div>');
                    var nameArticle = '<p class="article_name" style="display : none">' + article.name + '</p>';
                    var imgArticle = '<img src="' + /*article.url*/'http://placekitten.com/200/300' + '" class="article_url"/>';
                    divArticle.append($(nameArticle));
                    divArticle.append($(imgArticle));
                    $('body').append(divArticle);
		        }
            });
	 }
	 getFiveProducts();
}

//});