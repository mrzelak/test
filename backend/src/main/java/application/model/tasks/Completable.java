package application.model.tasks;

public interface Completable {

    boolean isFinished();

    void setFinished();

    void setUnfinished();
}
