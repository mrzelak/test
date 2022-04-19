package application.service;

import application.model.tasks.SubTask;
import application.model.tasks.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import application.repository.TaskRepository;

import java.util.List;
import java.util.Optional;

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

    public Task setPreviousTask(Integer id, Task previousTask) {
        Task task = taskRepository.findById(id).get();
        task.setPreviousTask(previousTask);

        return taskRepository.save(task);
    }

    public Task updateTask(Integer id, Task newTask) {
        Task task = taskRepository.findById(id).get();
        task.setName(newTask.getName());
        task.setDescription(newTask.getDescription());
        task.setDate(newTask.getDate());
        if(newTask.isFinished()) {
            task.setFinished();
        }
        else {
            task.setUnfinished();
        }

        return taskRepository.save(task);
    }

    public void deleteTask(Integer id) {
        Task task = taskRepository.findById(id).get();
        for(SubTask subTask : task.getSubTasks()) {
            task.removeSubTask(subTask);
        }
        taskRepository.save(task);
        taskRepository.deleteById(id);
    }
}
