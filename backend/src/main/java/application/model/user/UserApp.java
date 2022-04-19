package application.model.user;

import application.model.tasks.Completable;

import java.util.LinkedList;
import java.util.List;

public class UserApp {
    private final int id;
    private final String username;
    List<Completable> tasks = new LinkedList<>();

    public UserApp(int id, String username) {
        this.id = id;
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public List<Completable> getTasks() {
        return tasks;
    }

    public String getUsername() {
        return username;
    }

    public void addTask(Completable task) {
        tasks.add(task);
    }

    public void removeTask(Completable task) {
        tasks.remove(task);
    }
}
