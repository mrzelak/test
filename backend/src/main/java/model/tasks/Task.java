package model.tasks;

import application.Commons;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name = Commons.TASKS)
public class Task implements Completable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String description;
    private String date;
    //    private String deadline;
    private boolean isFinished;

    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<SubTask> subTasks = null;

    public Task() {
    }

    public Task(int id, String name, String description, String date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.isFinished = false;
    }

    public Task(int id, String name, String date) {
        this(id, name, "no description", date);
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public boolean isFinished() {
        return isFinished;
    }

    @Override
    public void setFinished() {
        isFinished = true;
    }

    @Override
    public void setUnfinished() {
        isFinished = false;
    }

    public List<SubTask> getSubTasks() {
        return subTasks;
    }

    public void addSubTask(SubTask subTask) {
        if (subTasks == null) {
            subTasks = new LinkedList<>();
        }
        subTasks.add(subTask);
    }

    public void removeSubTask(SubTask subTask) {
        if (subTasks.size() == 1) {
            subTasks = null;
        } else {
            subTasks.remove(subTask);
        }
    }
}
