package application.controller;

import application.model.tasks.Task;
import application.payroll.TaskNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import application.service.TaskService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping("/task")
    public List<Task> findAll() {
        return taskService.findAll();
    }

    @PostMapping(path = "/task",
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Task addTask(@RequestBody Task task) {
        taskService.addTask(task);
        return task;
    }
  
    @PutMapping("/task/{id}/previous")
    Task addPreviousTask(@RequestBody Task previousTask, @PathVariable Long id) {
            return taskService.addPreviousTask(id, previousTask);
    }

    @DeleteMapping("/task/{id}/previous")
    public void deletePreviousTask(@RequestBody Task previousTask, @PathVariable Long id) {
        taskService.deletePreviousTask(id, previousTask);
    }

    @PutMapping("/task/{id}")
    Task updateTask(@RequestBody Task newTask, @PathVariable Long id) {
        return taskService.updateTask(id, newTask);
    }

    @PutMapping("/task/{id}/check")
    Task setTaskFinishedValue(@RequestBody boolean checked, @PathVariable Long id) {
        return taskService.setTaskFinished(id, checked);
    }

    @DeleteMapping("/task/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

    @GetMapping("/task/{id}")
    public Task getTask(@PathVariable Long id) {
        return taskService.getTask(id);
    }
}
