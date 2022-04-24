package application.controller;

import application.model.tasks.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import application.service.TaskService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TaskController {
    @Autowired
    private TaskService taskService;

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
        taskService.addTask(task);
        return task;
    }
  
    @PutMapping("/task/{id}/previous")
    Task setPreviousTask(@RequestBody Task previousTask, @PathVariable Long id) {
            return taskService.setPreviousTask(id, previousTask);
    }

    @PutMapping("/task/{id}")
    Task updateTask(@RequestBody Task newTask, @PathVariable Long id) {
        return taskService.updateTask(id, newTask);
    }

    @DeleteMapping("/task/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}
