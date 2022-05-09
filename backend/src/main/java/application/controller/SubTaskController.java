package application.controller;

import application.model.tasks.SubTask;
import application.service.SubTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
class SubTaskController {
    @Autowired
    private SubTaskService subTaskService;

    @DeleteMapping("/subtask/{id}")
    public void deleteSubTask(@PathVariable Long id) {
        subTaskService.deleteTask(id);
    }

    @PutMapping("/subtask/{id}/check")
    SubTask setSubTaskFinishedValue(@PathVariable Long id) {
        return subTaskService.setSubTaskFinished(id, true);
    }

    @PutMapping("/subtask/{id}/uncheck")
    SubTask setSubTaskUnfinishedValue(@PathVariable Long id) {
        return subTaskService.setSubTaskFinished(id, false);
    }
}
