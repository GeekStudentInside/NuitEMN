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
                var divArticle = $("<div/>", {class:"article", id: '' + article.id});
                var pName = $("<p/>", {class:"article_name"});
                divArticle.append(pName.append(article.name));
                divArticle.append($("<img/>", {class:"article_url"}).attr("src", '/assets/images/articles/' + article.url));
                divArticle.appendTo(liArticle);
                liArticle.appendTo(listContent);
            });

            $('.article_name').css('display', 'none');

                var articles = $('.article');
                articles.each(function(index, valeur){
                    $(this).on('mouseover', visibleDetails).on('mouseout', visibleDetails).on('click', selectArticle);
             });
        }
    });

}