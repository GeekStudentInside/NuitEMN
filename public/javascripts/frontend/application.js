//$(function(){
//Called in articleDetails.js when DOM is loaded
    function getFiveProducts() {

        $.ajax({
            url: "/getProducts",
            type: "GET",
            dataType:"json",
            success: function(data) {
                var content = $('#articles-content');

                var listContent = $('<ul class="small-block-grid-3 medium-block-grid-3 large-block-grid-3"></ul>');

                content.append(listContent)

                $.each(data, function(i, article){
                    var liArticle = $('<li></li>')
                    var divArticle = $("<div/>", {class:"article"});
                    var pName = $("<p/>", {class:"article_name"});
                    divArticle.append(pName.append(article.name));
                    divArticle.append($("<img/>", {class:"article_url"}).attr("src", '/assets/images/articles/' + article.url));
                    divArticle.appendTo(liArticle);
                    liArticle.appendTo(listContent);
                    console.log(liArticle[0])
                });

                $('.article_name').css('display', 'none');
            }
        });
    }
   // getFiveProducts();

//});
