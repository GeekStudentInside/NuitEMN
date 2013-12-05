/**
 * Created by Aristote on 05/12/13.
 */
function visibleDetails()
{
    var article = this//.parentNode;
    var hidden = article.getElementsByTagName('p')[0].style.display == 'none';
    var newStyle = hidden ? 'block' : 'none';

    for(var i = 0 ; i < article.children.length ; ++i)
    {
        console.log(article.children[i])
        article.children[i].style.display = newStyle;
    }
    article.getElementsByClassName('article_img')[0 ].style.display = 'block';
}

var products = $('.article');
for(var i = 0 ; i < products.length ; ++i)
{
    products[i ].addEventListener('mouseover', visibleDetails);
    products[i ].addEventListener('mouseout', visibleDetails);
}