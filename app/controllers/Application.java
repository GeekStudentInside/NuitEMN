package controllers;

import models.Article;
import play.*;
import play.mvc.*;

import views.html.*;

import java.util.List;

public class Application extends Controller {

    public static Result index() {
        List<Article> articles= Article.nbArticles(5);

        return ok(index.render(articles));
    }



}
