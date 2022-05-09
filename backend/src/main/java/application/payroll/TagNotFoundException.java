package application.payroll;

public class TagNotFoundException extends RuntimeException {

    public TagNotFoundException(Long id) {
        super("Could not find tag " + id);
    }
}

