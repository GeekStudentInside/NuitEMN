package controllers;

import models.Article;
import play.mvc.Controller;
import play.mvc.Result;
import sun.reflect.annotation.ExceptionProxy;
import views.html.index;

/**
 * Created by Harold on 06/12/13.
 */
public class Test extends Controller {

    static int testpasse=0;
    static int testtot=0;
    static StringBuilder  s=new StringBuilder();
    public static Result test(){


        testing(Article.nbArticles(5).isEmpty()==false," vide article: 5");
        testing(Article.nbArticles(6).isEmpty() == false, " vide article: 6");
        testing(Article.nbArticles(0).isEmpty()==true," vide article: 0");

        testing(Article.nbArticles(5).size()==((5>(Article.find.all().size()))?Article.find.all().size():5),"taille article: 5");
        testing(Article.nbArticles(6).size() == ((6>(Article.find.all().size()))?Article.find.all().size():6), " taille article: 6");
        testing(Article.nbArticles(0).size()==((0>(Article.find.all().size()))?Article.find.all().size():0)," vide article: 0");


        s.append(testpasse + " tests sont passés sur " + testtot);

        return ok(index.render(s.toString()));

    }

    public static void testing(boolean b,String name){
        testtot++;
        if(!b){
            s.append("ERROR : le test "+name+" n'est pas passe <br />");
        }
        else{
            testpasse++;
        }
    }

}
