package application.service;

import application.model.tasks.Task;
import application.payroll.TaskNotFoundException;
import application.repository.TaskRepository;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@Test
public class TaskServiceTest {
    @InjectMocks
    private TaskService taskService;
    @Mock
    private TaskRepository taskRepository = Mockito.mock(TaskRepository.class);

    private final Task task1 = new Task(1L, "task1", "10-06-2022");
    private final Task task2 = new Task(2L, "task2", "25-06-2012");
    private final Task updateTask = new Task(1L, "newTaskName", "25-06-2012");

    @BeforeMethod
    public void initMocks() {
        MockitoAnnotations.openMocks(this);
        when(taskRepository.findById(1L)).thenReturn(Optional.of(task1));
    }

    public void findAll_repositoryIsNotEmpty_returnListOfTasks() {
        //given
        when(taskRepository.findAll()).thenReturn(List.of(task1, task2));
        //when
        var result = taskService.findAll();
        //then
        Assert.assertEquals(List.of(task1, task2), result);
    }

    public void findAll_repositoryIsEmpty_returnEmptyList() {
        //given
        when(taskRepository.findAll()).thenReturn(new ArrayList<>());
        //when
        var result = taskService.findAll();
        //then
        Assert.assertTrue(result.isEmpty());
    }

    public void findById_taskExists_returnTask() {
        //given
        //when
        var result = taskService.getTask(1L);
        //then
        Assert.assertEquals(task1, result);
    }

    @Test(expectedExceptions = {TaskNotFoundException.class})
    public void findById_taskDoesNotExist_throwsTaskNotFoundException() {
        //given
        when(taskRepository.findById(any(Long.class))).thenReturn(Optional.empty());
        //when
        //then
        taskService.getTask(1L);
    }

    public void setPreviousTask_getTaskToBeSetAsPrevious_previousTaskIsSet() {
        //given
        when(taskRepository.save(task1)).thenReturn(task1);
        //when
        var result = taskService.addPreviousTask(1L, task2);
        //then
        Assert.assertEquals(result.getPreviousTasks(), List.of(task2));
    }

    public void updateTask_getNewTaskValues_taskIsUpdated() {
        //given
        when(taskRepository.save(task1)).thenReturn(task1);
        //when
        var result = taskService.updateTask(1L, updateTask);
        //then
        Assert.assertEquals(task1.getName(), updateTask.getName());
        Assert.assertEquals(result.getName(), updateTask.getName());
    }

    public void setTaskFinished_getId_taskIsChecked() {
        //given
        //when
        var result = taskService.setTaskFinished(1L, true);
        //then
        Assert.assertTrue(task1.isFinished());
    }
}
