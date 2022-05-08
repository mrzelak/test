package application.service;

import application.model.tasks.SubTask;
import application.model.tasks.Task;
import application.payroll.SubTaskNotFoundException;
import application.payroll.TaskNotFoundException;
import application.repository.SubTaskRepository;
import application.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubTaskService {
    @Autowired
    private SubTaskRepository subTaskRepository;

    @Autowired
    private TaskRepository taskRepository;

    public SubTask updateSubTask(Long id, SubTask newTask) {
        SubTask subTask = subTaskRepository.findById(id)
                .orElseThrow(() -> new SubTaskNotFoundException(id));
        subTask.setName(newTask.getName());
        subTask.setDescription(newTask.getDescription());
        if (newTask.isFinished()) {
            subTask.setFinished();
        } else {
            subTask.setUnfinished();
        }

        return subTaskRepository.save(subTask);
    }

    public void deleteTask(Long id) {
        subTaskRepository.deleteById(id);
    }

    public SubTask setTaskFinished(Long id, boolean checked) {
        SubTask subTask = subTaskRepository.findById(id)
                .orElseThrow(() -> new SubTaskNotFoundException(id));
        Task mainTask = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
        if (checked) {
            subTask.setFinished();
            checkIfMainTaskCanBeFinished(mainTask);
        } else {
            subTask.setUnfinished();
            mainTask.setFinished();
        }
        taskRepository.save(mainTask);
        return subTaskRepository.save(subTask);
    }

    private void checkIfMainTaskCanBeFinished(Task mainTask) {
        for (SubTask subTask : mainTask.getSubTasks()) {
            if (!subTask.isFinished()) {
                return;
            }
        }
        mainTask.setFinished();
    }
}
