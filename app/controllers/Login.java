package controllers;


import com.avaje.ebean.Ebean;
import models.User;
import play.Logger;
import play.data.Form;
import play.mvc.*;
import play.mvc.Result;
import views.html.login;
import views.html.newuser;

/**
 * Created by guillaume on 05/12/13.
 */
public class Login extends Controller {

    public static Result login(){
       return ok(login.render(Form.form(LoginForm.class)));
    }

    public static class LoginForm{
        public String email;
        public String password;
        public String validate() {
            if (User.authenticate(email, password) == null) {
                return "Invalid user or password";
            }
            return null;
        }
    }

    public static Result authenticate(){
        Form<LoginForm> loginForm = Form.form(LoginForm.class).bindFromRequest();
        if (loginForm.hasErrors()) {
            return badRequest(login.render(loginForm));
        } else {
            session().clear();
            session("email", loginForm.get().email);
            User current = Ebean.find(User.class).where().eq("email", loginForm.get().email).findUnique();
            session("name", current.name);
            session("isAdmin", current.isAdmin.toString());
            return redirect(
                    routes.Application.index()
            );
        }
    }

    public static Result logout(){
        session().clear();
        return redirect(
                routes.Application.index()
        );
    }

    public static Result newuser() {
        return ok(newuser.render(Form.form(NewForm.class)));
    }

    public static class NewForm{
        public String email;
        public String name;
        public String password;
        public String password2;
        public String validate() {
            if (!password.equals(password2)) {
                return "Invalid user or password";
            }
            return null;
        }
    }

    public static Result creationuser(){
        Form<NewForm> newForm = Form.form(NewForm.class).bindFromRequest();
        if (newForm.hasErrors()) {
            Logger.error(newForm.errorsAsJson().toString());
            return badRequest(newuser.render(newForm));
        } else {
            Logger.info(newForm.get().email);
            User current = new User(newForm.get().email,newForm.get().name, newForm.get().password, false );
            current.save();
            session("email", current.email);
            session("name", current.name);
            session("isAdmin", current.isAdmin.toString());
            return redirect(
                    controllers.routes.Application.index()
            );
        }
    }
}
