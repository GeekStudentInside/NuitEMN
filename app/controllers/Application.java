package controllers;

import java.util.List;

import com.avaje.ebean.Ebean;
import com.fasterxml.jackson.databind.JsonNode;
import models.Article;
import models.Link;
import org.reflections.serializers.JsonSerializer;
import play.*;
import play.libs.Json;
import play.mvc.*;
import views.html.*;

import javax.persistence.OptimisticLockException;
import java.util.List;
import java.util.Map;


public class Application extends Controller {

    public static Result index() {

        return ok(index.render("Your new application is ready."));
        //List<Article> articles= Article.nbArticles(5);
        //return ok(index.render("NuitInfo"));
    }





    public static Result getArticle() {

        return ok(Json.toJson(Article.nbArticles(5)));
    }

    public static Result getAllLinks() {
        List<Link> links = Link.find.all();
        JsonSerializer ser = new JsonSerializer();


        //   JsonNode j= Json.toJson(links).findValues("article2", Json.toJson(links).findValue("article1")) ;

        return ok(Json.toJson(links));
    }


    public static Result setWeight() {

        JsonNode jsonlist = request().body().asJson();

        for (int i = 0; i < jsonlist.size(); i++) {
            JsonNode json = jsonlist.get(i);

            if (json == null) {
                return badRequest("Expecting Json data");
            }

            String a1 = json.findPath("article1").textValue();
            String a2 = json.findPath("article2").textValue();
            String w = json.findPath("weight").textValue();

            if (a1 == null) {
                return badRequest(Json.toJson("Missing parameter [article1]"));
            }
            if (a2 == null) {
                return badRequest(Json.toJson("Missing parameter [article2]"));
            }
            if (w == null) {
                return badRequest(Json.toJson("Missing parameter [weight]"));
            }

            float weight = Float.parseFloat(w);

            List<Link> links = Link.find.where()
                    .eq("article1", Article.find.byId(Long.parseLong(a1)))
                    .eq("article2", Article.find.byId(Long.parseLong(a2)))
                    .findList();
            List<Link> linksReverse = Link.find.where()
                    .eq("article1", Article.find.byId(Long.parseLong(a2)))
                    .eq("article2", Article.find.byId(Long.parseLong(a1)) )
                    .findList();
            // TODO doit pouvoir se faire avec un join dans 1 seule requete
            links.addAll(linksReverse);



            if (links.size() == 1) {
                Link l = links.get(0);
                Link.update(l.id, weight);
                System.out.println("updated : art1="+l.article1.id+" art2="+l.article2.id+" weight="+weight);

            } else
                if(links.isEmpty()){
                    Link newLink = new Link(Article.find.byId(Long.parseLong(a1)), Article.find.byId(Long.parseLong(a2)), weight);
                    Ebean.beginTransaction();
                    Ebean.save(newLink);
                    Ebean.commitTransaction();
                    Ebean.endTransaction();
                    System.out.println("created : art1="+newLink.article1.id+" art2="+newLink.article2.id+" weight="+weight);

                } else
                    return badRequest(Json.toJson("Empty or more that 1 link, FIX IT !!"));

        }
        return ok(Json.toJson("done"));
    }

}
