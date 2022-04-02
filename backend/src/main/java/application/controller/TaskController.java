package application.controller;

import application.model.tasks.Task;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import application.service.TaskService;

import java.util.List;

@RestController
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/task")
    public List<Task> findAll() {
        return taskService.findAll();
    }

//    @GetMapping("/task/{username}")
//    public List<Task> find(@PathVariable("username") String username) {
//        return taskService.findUsertasks();
//    }

    @PostMapping(path = "/task",
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Task addTask(@RequestBody Task task) {
        System.out.println("HELLO");
        taskService.addTask(task);
        return task;
    }
}
