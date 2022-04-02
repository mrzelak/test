package controller;

import model.tasks.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import service.TaskService;

import java.util.List;

@Controller
public class TaskController {
    @Autowired
    private TaskService taskService;

    //change this eventually by getting tasks for a specified user
    @GetMapping("/task")
    public List<Task> findAll() {
        return taskService.findAll();
    }

    @PostMapping("/task")
    public Task addUser(@RequestBody Task task) {
        taskService.addTask(task);
        return task;
    }
}
