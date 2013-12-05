//$(function(){
//Called in articleDetails.js when DOM is loaded
function onload(){
	 function getFiveProducts() {
	 	console.log("bar");
		$.ajax({
            url: "/getProducts",
            type: "GET",
            dataType:"json"
        }).done(function(data)
            {
                foo = data;
                console.log(data);
                for(var i = 0 ; i < data.length ; ++i)
                {
                    var article = data[i];
                    var divArticle = $('<div class="article"></div>');
                    var nameArticle = '<p class="article_name" style="display : none">' + article.name + '</p>';
                    var imgArticle = '<img src="' + article.url + '" class="article_url"/>';
                    divArticle.append($(nameArticle));
                    divArticle.append($(imgArticle));
                    $('body').append(divArticle);
		        }
            });
	 }
	 getFiveProducts();
}

//});