package models;
import play.db.ebean.Model;

import javax.persistence.*;
import java.util.Collections;
import java.util.List;

/**
 * Created by Walid on 05/12/13.
 */
@Entity
@Table(name = "Comment")
public class Comment extends Model {

    /**
	 * 
	 */
	private static final long serialVersionUID = -7383413412594525585L;
	
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long id;
    @Column(comment="comment")
    public String comment;

    public User author;

    

    public Comment(String comment, User author){
        this.comment = comment;
        this.author = author;
    }

    public static Finder<String,User> find = new Finder<String,User>(
            String.class, User.class
    );

    /*
    * Return all comments
    */
    public static List<Comment> allComments(){
        List<Comment> comments = Comment.find.all();
        return comments;
    }
    
    /*
    * Return all comments of a user
    */
    public static List<Comment> allUserComments(User user){
        List<Comment> comments = find.where().eq("author", user);
        return comments;
    }
    

    public static void delete(Comment a){
    	a.delete();
    }
    
    public void modify(String comment, User author){
    	this.comment = comment;
    	this.author = author;
    	this.update();
    }
    
    public static void modify(Comment a, String comment, User author){
    	a.modify(comment, author);
    }
    
}
