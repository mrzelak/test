package application.payroll;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class TaskCanNotBeFinishedAdvice {

    @ResponseBody
    @ExceptionHandler(TaskCanNotBeFinishedException.class)
    @ResponseStatus(HttpStatus.PRECONDITION_FAILED)
    public String taskCanNotBeFinishedHandler(TaskCanNotBeFinishedException e) {
        return e.getMessage();
    }
}
