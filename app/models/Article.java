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

    /**
	 * 
	 */
	private static final long serialVersionUID = -7383413412594525585L;
	
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long id;
    @Column(name="name")
    public String name;

    public String url;

    public List<Comment> comments;


    public Article(String name, String url){
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
        }
        return articles;
    }
    
    public static void delete(Article a){
    	a.delete();
    }
    
    public void modify(String name, String url){
    	this.name = name;
    	this.url = url;
    	this.update();
    }
    
    public static void modify(Article a, String name, String url){
    	a.modify(name, url);
    }

    public void addComment(Comment com) {
        this.comments.add(com);
    }

    public static void addComment(Article a, Comment com){
        a.addComment(com);
    }

    public void removeComment(Comment com) {
        this.comments.remove(com);
    }

    public static void removeComment(Article a, Comment com){
        a.removeComment(com);
    }

}
