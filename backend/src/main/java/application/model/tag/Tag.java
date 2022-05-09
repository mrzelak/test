package application.model.tag;

import application.Commons;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = Commons.TAGS)
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    private Long id;

    @Getter
    @Setter
    private String tagName;

    public Tag() {

    }

    public Tag(Long id, String tagName) {
        this.id = id;
        this.tagName = tagName;
    }

}
