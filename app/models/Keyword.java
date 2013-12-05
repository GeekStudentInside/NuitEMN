package models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.Constraint;

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
	public Long id;
	
	@Column(name="key")
	public String key;
	
	@ManyToMany(mappedBy="keywords")
	@JoinTable(name="article_keyword")
	public List<Article> articles;
	
	public Keyword(){
		
	}
	
	public Keyword(String key){
		this.key = key;
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

}
