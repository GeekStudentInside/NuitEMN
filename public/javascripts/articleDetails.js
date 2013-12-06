/**
 * Created by Aristote on 05/12/13.
 */
function visibleDetails()
{
    var article = $(this);
    var hidden = article.find('p').first().css('display') == 'none';
    var newStyle = hidden ? 'block' : 'none';

    article.children().each(function(index, child){
        if(!$(child).hasClass('article_url'))
            $(child).css('display', newStyle);
    });
}

function selectArticle()
{
    var article = $(this);
    var selected = article.hasClass('activated')
    if(selected)
        article.removeClass('activated')
    else
        article.addClass('activated')
}

function getSelectedArticles()
{
    var selectedArticles = new Array();
    $('.article.activated').each(function(index, article){
        selectedArticles.push([$(article).find('.article_name').html(), $(article).find('.article_url').attr('src')]);
    });
    return selectedArticles;
}

function sendSelectedArticles()
{
    var selectedArticles = getSelectedArticles();
    addToHistory();
}

function addToHistory()
{
    var history = $(".history");
    var urlArray = new Array();
    var selectedArticles = getSelectedArticles();

    $.each(selectedArticles, function(index, article){
        urlArray.push(article[1]);
    });

    $.each(urlArray, function(index, url){
        var img = $('<a><img src="' + url + '" class="history_img"/></a>');
        history.append(img);
    });
}

$(function(){getFiveProducts()});

/*$(function(){
    getFiveProducts();
    //$(window).on("load", function() {
    setTimeout(function(){
        var articles = $('.article');
        articles.each(function(index, valeur){
            $(this).on('mouseover', visibleDetails).on('mouseout', visibleDetails).on('click', selectArticle);
        });
    }, 1000);
});*/