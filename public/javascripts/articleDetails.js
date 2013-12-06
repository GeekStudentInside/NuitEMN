/**
 * Created by Aristote on 05/12/13.
 */
function visibleDetails()
{
    var article = this;
    var hidden = article.getElementsByTagName('p')[0].style.display == 'none';
    var newStyle = hidden ? 'block' : 'none';

    for(var i = 0 ; i < article.children.length ; ++i)
    {
        article.children[i].style.display = newStyle;
    }
    article.getElementsByClassName('article_url')[0 ].style.display = 'block';
}

function selectedArticle()
{
    var article = this;
    var selected = article.classList.contains('activated');
    if(!selected)
    {
        article.classList.add('activated');
    }
    else
    {
        article.classList.remove('activated');
    }
}

function getSelectedArticles()
{
    var articles = $('.article');
    var selectedArticles = new Array();
    for(var i = 0 ; i < articles.length ; ++i)
    {
        var article = articles[i];
        if(article.classList.contains('activated'))
            {
            selectedArticles.push(new Array(
                '' + article.getElementsByClassName('article_name')[0].innerHTML + '',
                '' + article.getElementsByClassName('article_url')[0].src + ''
            ));
        }
    }
    return selectedArticles;
}

function sendSelectedArticles()
{
    var selectedArticles = getSelectedArticles();
    addToHistory();
    /*$.ajax(
        {url : "selectedArticlesURL",
    data : selectedArticles}
    ).done(function (){
            addToHistory();
        })*/
}

function addToHistory()
{
    var history = $(".history");
    var urlArray = new Array();
    var selectedArticles = getSelectedArticles();

    for(var i = 0 ; i < selectedArticles.length ; ++i)
    {
        urlArray.push(selectedArticles[i][1]);
    }
    for(var i = 0 ; i < urlArray.length ; ++i)
    {
        var url = urlArray[i];
        var img = $('<a><img src="' + url + '" class="history_img" style="height : 100%"/></a>');
        history.append(img);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    /*$.when(onload()).done(function(){
        var articles = $('.article');
        console.log($('.article'));
        for(var i = 0 ; i < articles.length ; ++i)
        {
            articles[i].addEventListener('mouseover', visibleDetails);
            articles[i].addEventListener('mouseout', visibleDetails);
            articles[i].addEventListener('click', selectedArticle);
        }
    });*/
    onload();
    $(window).bind("load", function() {
        var articles = $('.article');
        for(var i = 0 ; i < articles.length ; ++i)
        {
            articles[i].addEventListener('mouseover', visibleDetails);
            articles[i].addEventListener('mouseout', visibleDetails);
            articles[i].addEventListener('click', selectedArticle);
        }
    });

});

/*setTimeout(function(){var articles = $('.article');
    console.log($('.article'));
    for(var i = 0 ; i < articles.length ; ++i)
    {
        articles[i].addEventListener('mouseover', visibleDetails);
        articles[i].addEventListener('mouseout', visibleDetails);
        articles[i].addEventListener('click', selectedArticle);
    }}, 1000);*/