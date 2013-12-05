package controllers;

import models.Article;
import org.codehaus.jettison.json.JSONObject;
import play.*;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

import java.util.List;

public class Application extends Controller {

    public static Result index() {
        List<Article> articles= Article.nbArticles(5);
        return ok(index.render(articles));
    }
    public static Result getArticle(){
        return ok(Json.toJson(Article.nbArticles(5)));
    }


}
