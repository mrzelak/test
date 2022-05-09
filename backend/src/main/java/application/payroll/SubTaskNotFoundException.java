package application.payroll;

public class SubTaskNotFoundException extends RuntimeException {
    public SubTaskNotFoundException(Long id) {
        super("Could not find subtask " + id);
    }
}
