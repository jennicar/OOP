/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package task;


import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import static task.TaskState.INCOMPLETE;
import static task.TaskState.COMPLETED;

/**
 *
 * @author jenni
 */
public class TaskTest {
    
    public TaskTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of isArrayEmpty method, of class Task.
     */
    @Test
    public void testIsArrayEmpty() {
            Task task = new Task();
            String[] array = {};
        {
            boolean expResult = true;
            boolean result = task.isArrayEmpty(array);
            assertEquals(expResult, result);
        }
        task.addTask(array, "task 1");
        {
            boolean expResult = true;
            boolean result = task.isArrayEmpty(array);
            assertEquals(expResult, result);
        }
    }

    /**
     * Test of setTask method, of class Task.
     */
    @Test
    public void testSetAndGetTask() {
        String _task = "task #2";
        Task task = new Task();
        task.setTask(_task);
        String expResult = "task #2";
        String result = task.getTask();
        assertEquals(expResult, result);
    }

    /**
     * Test of setTaskStatus method, of class Task.
     */
    @Test
    public void testSetAndGetTaskStatus() {
        Task task = new Task();
        {
            task.setTaskStatus(INCOMPLETE);
            boolean expResult = false;
            boolean result = task.getTaskStatus();
            assertEquals(expResult, result);
        }
        {
            task.setTaskStatus(COMPLETED);
            boolean expResult = true;
            boolean result = task.getTaskStatus();
            assertEquals(expResult, result);
        }
    }

    /**
     * Test of isTaskDone method, of class Task.
     */
    @Test
    public void testIsTaskDone() {
        String [] array = {"buy groceries", "feed dog"};
        boolean [] array2 = {false, true};
        String _task = "feed dog";
        Task task = new Task();
        boolean expResult = true;
        boolean result = task.isTaskDone(array, array2, _task);
        assertEquals(expResult, result);
    }
    
    /**
     * Test of isTaskDone method, of class Task.
     */
    @Test
    public void testReturnItemIndex() {
        String [] array = {"task 1", "task 2"};
        boolean [] array2 = {false, true};
        Task task = new Task();
        {
            String key = "task 2";
            int expResult = 1;
            int result = task.returnItemIndex(array, array2, key);
            assertEquals(expResult, result);
        }
        {
            String key = "task 1";
            int expResult = 0;
            int result = task.returnItemIndex(array, array2, key);
            assertEquals(expResult, result);
        }
    }

    /**
     * Test of removeTask method, of class Task.
     */
    @Test
    public void testRemoveTask() {
        int _index = 0;
        Task task = new Task();
        String _task = "this is the first task";
        String [] array = {_task};
        boolean [] array2 = {true};
        if (task.isTaskDone(array, array2, _task)){
            task.removeTask(array, _index);
        }
        boolean expResult = true;
        boolean result = task.isArrayEmpty(array);
        assertEquals(expResult, result);
        
    }

    /**
     * Test of addTask method, of class Task.
     */
    @Test
    public void testAddTask() {
        String _task = "buy groceries";
        String [] _array = {};
        Task task = new Task();
        task.addTask(_array, _task);
        boolean expResult = false;
        boolean result = task.isItemInArray(_array, _task);
        assertEquals(expResult, result);
    }
    
}
