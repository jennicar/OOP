/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package task;


import java.util.ArrayList;
import java.util.List;
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
    public void testListFunctionality() {
        List list = new ArrayList();
        boolean check = false;
        boolean expResult = false;
        boolean result = false;
        String text = "task 1";
        
        // tests that list is empty
        {
            if (list.isEmpty()){
                check = true;
                expResult = check;
            }
            result = true;
            assertEquals(expResult, result);
        }
        // tests add method and that list is not empty
        list.add(text); 
        {
            if (!list.isEmpty()) {
                check = false;
                expResult = check;
            }  
            result = false;
            assertEquals(expResult, result);     
        }        
        // tests remove method and that list is empty
        list.remove(text);
        {
            if (list.isEmpty()){
                check = true;
                expResult = check;
            }
            result = true;
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
    
}
