package controllers;

import java.util.List;

import models.Article;
import models.Link;
import play.*;
import play.libs.Json;
import play.mvc.*;
import views.html.*;

import java.util.List;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Your new application is ready."));
        //List<Article> articles= Article.nbArticles(5);
        //return ok(index.render("NuitInfo"));
    }
    
    public static Result getArticle(){
        return ok(Json.toJson(Article.nbArticles(5)));
    }

    public static Result getAllLinks(){
        return ok(Json.toJson(Link.find.all()));
    }

    public static Result setWeight(Article a1, Article a2, float weight){
        List<Link> links = Link.find.where()
                .eq("Article1", a1)
                .eq("Article2", a2)
                .findList();
        List<Link> linksReverse = Link.find.where()
                .eq("Article1", a2)
                .eq("Article2", a1)
                .findList();

        // TODO doit pouvoir se faire avec un join dans 1 seule requete
        links.addAll(linksReverse);

        if(!links.isEmpty() && links.size() ==1){
            links.get(0).weight = weight;
            return ok("done");
        }
        else return badRequest("Empty or more that 1 link, FIX IT !!");

    }

}
