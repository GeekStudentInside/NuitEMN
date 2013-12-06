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
        selectedArticles.push([parseInt($(article).attr('id')) ,$(article).find('.article_name').html(), $(article).find('.article_url').attr('src')]);
    });
    return selectedArticles;
}

function getUnselectedArticles(selectedId)
{
    return $('.article').map(function(index, x){return parseInt($(x).attr('id'), 10)}).filter(function(index, x){return selectedId.indexOf(x) == -1}).toArray();
}

function sendSelectedArticles()
{
    var selectedId = getSelectedArticles().map(function(x){return x[0]});
    var unselectedId = getUnselectedArticles(selectedId);
    addToHistory();
    var returnValue= {accepted:selectedId,rejected:unselectedId};

    $.ajax({url : 'http://worstpractic.es:5000/search',
        data : returnValue,
        crossDomain : true,
        dataType : 'jsonp',
        type : 'GET'/*,
        success : spawnMoreArticles/*function(ids){spawnMoreArticles(ids)}*/
    }).done(function(newIds){
            console.log(newIds)
            var i = 0;
            $('li .article').remove();
            $('#articles-content li').each(function(index, liElem){
                $.ajax({ url : '/getProductById',
                    data : newIds[i++]
                }).done(addArticle);

                function addArticle(article)
                {
                    var divArticle = $("<div/>", {class:"article", id: '' + article.id});
                    var pName = $("<p/>", {class:"article_name"});
                    divArticle.append(pName.append(article.name));
                    divArticle.append($("<img/>", {class:"article_url"}).attr("src", '/assets/images/articles/' + article.url));
                    divArticle.appendTo(liElem);
                }
            })
        });

    /*$.ajax({
        type: 'POST',
        url: 'http://worstpractic.es:5000/search',
        crossDomain: true,
        data: returnValue,
        dataType: 'json',
        success: function() {console.log('success ! !!!');
        },
        error: function (responseData, textStatus, errorThrown) {
            alert('POST failed.');
        }
    });*/

    /*function spawnMoreArticles(newIds)
    {
        console.log(newIds)
        var i = 0;
        $('li .article').remove();
        $('#articles-content li').each(function(index, liElem){
            $.ajax({ url : '/getProductById',
                data : newIds[i++]
            }).done(addArticle);

            function addArticle(article)
            {
                var divArticle = $("<div/>", {class:"article", id: '' + article.id});
                var pName = $("<p/>", {class:"article_name"});
                divArticle.append(pName.append(article.name));
                divArticle.append($("<img/>", {class:"article_url"}).attr("src", '/assets/images/articles/' + article.url));
                divArticle.appendTo(liElem);
            }
        })
    }*/
}

function addToHistory()
{
    var history = $(".history");
    var urlArray = new Array();
    var selectedArticles = getSelectedArticles();

    $.each(selectedArticles, function(index, article){
        urlArray.push(article[2]);
    });

    $.each(urlArray, function(index, url){
        var img = $('<a><img src="' + url + '" class="history_img"/></a>');
        history.append(img);
    });
}

$(function(){
    getFiveProducts();
    $('.Next').on('click', sendSelectedArticles);
});