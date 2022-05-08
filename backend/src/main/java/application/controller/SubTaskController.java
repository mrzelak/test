package application.controller;

import application.model.tasks.SubTask;
import application.model.tasks.Task;
import application.service.SubTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
class SubTaskController {
    @Autowired
    private SubTaskService subTaskService;

    @PutMapping("/subtask/{id}")
    SubTask updateTask(@RequestBody SubTask newTask, @PathVariable Long id) {
        return subTaskService.updateSubTask(id, newTask);
    }

    @DeleteMapping("/subtask/{id}")
    public void deleteTask(@PathVariable Long id) {
        subTaskService.deleteTask(id);
    }

    @PutMapping("/subtask/{id}/check")
    SubTask setSubTaskFinishedValue(@PathVariable Long id) {
        return subTaskService.setTaskFinished(id, true);
    }

    @PutMapping("/subtask/{id}/uncheck")
    SubTask setSubTaskUnfinishedValue(@PathVariable Long id) {
        return subTaskService.setTaskFinished(id, false);
    }
}
