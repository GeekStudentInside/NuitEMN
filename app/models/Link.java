package models;

import play.db.ebean.Model;

import javax.persistence.*;


/**
 * Created with IntelliJ IDEA.
 * User: constant
 * Date: 05/12/13
 * Time: 20:14
 * To change this template use File | Settings | File Templates.
 */

@Entity
@Table(name = "Link")
public class Link extends Model {

        @Id
        @GeneratedValue(strategy= GenerationType.IDENTITY)
        public Long id;

        @OneToOne
        @JoinColumn(name="Article1")
        public Article article1;

        @OneToOne
        @JoinColumn(name="Article2")
        public Article article2;

        @Column(name="Weight")
        public float weight;

        public Link(Article article1, Article article2, float weight){
            this.article1 = article1;
            this.article2 = article2;
            this.weight = weight;
        }

        public static Finder<Long,Link> find = new Finder<Long,Link>(
                Long.class ,Link.class
        ) ;

        public static void delete(Long id){
            find.ref(id).delete();
        }
         public static void update(Long id, float weight){
            Link l = find.ref(id);
             l.weight = weight;
             l.update();
         }



}
