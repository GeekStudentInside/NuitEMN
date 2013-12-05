package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by guillaume on 05/12/13.
 */
@Entity
@Table(name = "Users")
public class User extends Model {

    @Id
    public String email;
    public String name;
    public String password;

    public User(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public static Finder<String, User> find = new Finder<String, User>(
            String.class, User.class
    );

    public static User authenticate(String email, String password) {
        return find.where().eq("email", email)
                .eq("password", password).findUnique();
    }

    public static void delete(User user) {
        user.delete();
    }

    public static void modify(User user, String email, String name, String password){
        user.email = email;
        user.name = name;
        user.password = password;
        user.update();
    }

}
