package model.tasks;

public class SubTask implements Completable {

    private final int id;
    private String name;
    private String description;
    private boolean isFinished;

    private final Task mainTask;

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
