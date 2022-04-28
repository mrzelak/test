package application.payroll;

public class TaskCanNotBeFinishedException extends RuntimeException {

    public TaskCanNotBeFinishedException(Long id) {
        super(String.format("Task %d can not be finished", id));
    }
}
