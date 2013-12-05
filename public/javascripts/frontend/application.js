$(function(){
   function getFiveProducts() {
        $.getJSON({
           url: "products.json",
           context: document.body
        }).done(function(data) {
           for(var article in data) {
               var divArticle = $("<div/>",{class:"article"});
               divArticle.append($("<p/>", {class:"article_name"}).append(article.name));
               divArticle.append($("<img/>", {class:"article_url"}, {src:article.url}));
               divArticle.appendTo($(document.body));
           }
        });
   }
});