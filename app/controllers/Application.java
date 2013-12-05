package controllers;

import models.Article;
import play.*;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Your new application is ready."));
    }
    
    public static Result getArticle(){
        return ok(Json.toJson(Article.nbArticles(5)));
    }
}
