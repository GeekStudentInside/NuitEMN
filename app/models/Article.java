package models;
import play.db.ebean.Model;

import javax.persistence.*;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Harold on 05/12/13.
 */
@Entity
@Table(name = "Article")
public class Article extends Model {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long id;
    @Column(name="name")
    public String name;
    @Column(name="url")
    public String url;

    public Article(String name,String url){
        this.url=url;
        this.name=name;
    }

    public static Finder<Long,Article> find = new Finder<Long,Article>(
            Long.class ,Article.class
    );

    public static List<Article> nbArticles(int n){
        if(n==0){
            return new LinkedList<Article>();
        }

        List<Article> articles= Article.find.all();
        Collections.shuffle(articles);
        if(n<articles.size()){
        articles.subList(0,n);
        return articles;
        }
        else{
            return articles;
        }
    }

}
