package application.model.tag;

import application.Commons;
import application.model.tasks.Task;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @ManyToMany
    private List<Task> tasks = new ArrayList<>();

    public Tag() {

    }

    public Tag(Long id, String tagName) {
        this.id = id;
        this.tagName = tagName;
    }

}
