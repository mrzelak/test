package model.user;

import model.tasks.Completable;

import java.util.LinkedList;
import java.util.List;

public class User {

    private final int id;
    private final String mail;

    List<Completable> tasks = new LinkedList<>();

    public User(int id, String mail) {
        this.id = id;
        this.mail = mail;
    }

    public int getId() {
        return id;
    }

    public String getMail() {
        return mail;
    }

    public void addTask(Completable task) {
        tasks.add(task);
    }

    public void removeTask(Completable task) {
        tasks.remove(task);
    }
}
