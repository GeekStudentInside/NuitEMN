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
public class Users extends Model {

    @Id
    public String email;
    public String name;
    public String password;

    public Users(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public static Finder<String, Users> find = new Finder<String, Users>(
            String.class, Users.class
    );

    public static Users authenticate(String email, String password) {
        return find.where().eq("email", email)
                .eq("password", password).findUnique();
    }
}
