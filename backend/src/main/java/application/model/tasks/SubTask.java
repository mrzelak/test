package application.model.tasks;

import application.Commons;

import javax.persistence.*;

@Entity
@Table(name = Commons.SUBTASKS)
public class SubTask implements Completable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String description;
    private boolean isFinished;

    @ManyToOne
    @JoinColumn(name = Commons.TASK_ID, nullable = false)
    private Task mainTask;

    public SubTask() {
    }

    public SubTask(int id, String name, String description, Task mainTask) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.mainTask = mainTask;
        this.isFinished = false;
    }

    public SubTask(int id, String name, Task mainTask) {
        this(id, name, "no description", mainTask);
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
        isFinished = true;
    }

    public Task getMainTask() {
        return mainTask;
    }
}
