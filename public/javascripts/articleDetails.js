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
        console.log(article.children[i])
        article.children[i].style.display = newStyle;
    }
    article.getElementsByClassName('article_url')[0 ].style.display = 'block';
}

function selectedArticle()
{
    var article = this;
    var selected = article.classList.contains('activated');
    if(selected)
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
            selectedArticles.push(
                '' + article.getElementsByClassName('article_name')[0].innerHTML + '',
                '' + article.getElementsByClassName('article_url')[0].src + ''
            )
    }
    return selectedArticles;
}

function sendSelectedArticles()
{
    var selectedArticles = getSelectedArticles();
    $.ajax(
        {url : "selectedArticlesURL",
    data : selectedArticles}
    ).done(function (){

        })
}

var articles = $('.article');
for(var i = 0 ; i < articles.length ; ++i)
{
    articles[i].addEventListener('mouseover', visibleDetails);
    articles[i].addEventListener('mouseout', visibleDetails);
    articles[i].addEventListener('click', selectedArticle);
}