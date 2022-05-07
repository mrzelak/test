package application.service;

import application.model.tag.Tag;
import application.model.tasks.Task;
import application.payroll.TaskCanNotBeFinishedException;
import application.payroll.TaskNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import application.repository.TaskRepository;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    public void addTask(Task task) {
        taskRepository.save(task);
    }

    public Task getTask(Long id) throws TaskNotFoundException {
        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
    }

    public Task addPreviousTask(Long id, Task previousTask) throws TaskNotFoundException {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
        task.addPreviousTask(previousTask);

        return taskRepository.save(task);
    }

    public void deletePreviousTask(Long id, Task previousTask) throws TaskNotFoundException {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
        task.removePreviousTask(previousTask);

        taskRepository.save(task);
    }

    public Task updateTask(Long id, Task newTask) throws TaskNotFoundException {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
        task.setName(newTask.getName());
        task.setDescription(newTask.getDescription());
        task.setDate(newTask.getDate());
        if (newTask.isFinished()) {
            task.setFinished();
        } else {
            task.setUnfinished();
        }

        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public Task setTaskFinished(Long id, boolean checked) throws TaskNotFoundException, TaskCanNotBeFinishedException {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
        if (checked) {
            if (task.canBeFinished()) {
                task.setFinished();
            } else {
                throw new TaskCanNotBeFinishedException(id);
            }
        } else {
            task.setUnfinished();
        }
        return taskRepository.save(task);
    }

    public List<Task> getTasksInGivenPeriodOfTime(String startDate, String endDate) {
        return taskRepository.getTasksByTime(startDate, endDate);
    }

    public Task addTag(Long id, Tag tag) throws TaskNotFoundException {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
        task.addTag(tag);

        return taskRepository.save(task);
    }

    public void deleteTag(Long id, Tag tag) throws TaskNotFoundException {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
        task.removeTag(tag);

        taskRepository.save(task);
    }
}

