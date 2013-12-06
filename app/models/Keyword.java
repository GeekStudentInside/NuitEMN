/**
 * @author Hao ZHANG
 */
package models;

import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import play.db.ebean.Model;

@Entity  
@Table(name="keyword")
public class Keyword extends Model{

	/**
	 * 
	 */
	private static final long serialVersionUID = 9177310329978137971L;
	
	@Id
	@GeneratedValue
	public Integer id;
	
	@Column(name="name")
	public String name;


    @ManyToMany
    @JsonIgnore
    @JoinTable(name="article_keyword",

            joinColumns=

            @JoinColumn(name="article_id",

                    referencedColumnName="Id"),

            inverseJoinColumns=

            @JoinColumn(name="keyword_id",

                    referencedColumnName="Id"))
    public List<Article> articles;
	
	public Keyword(){
		
	}
	
	public Keyword(String key){
		this.name = key;
	}
	
	public void addArticle(Article a){
		this.articles.add(a);
		this.update();
	}
	
	public void removeArticle(Article a){
		this.articles.remove(a);
		this.update();
    }
	
	public List<Article> getArticles(){
		return this.articles;
	}
	
	public void setArticles(List<Article> articles){
    	this.articles = articles;
    }

    public static Finder<Long,Keyword> find = new Finder<Long,Keyword>(
            Long.class ,Keyword.class
    );

}
