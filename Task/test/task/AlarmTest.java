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

/**
 *
 * @author jenni
 */
public class AlarmTest {
    
    public AlarmTest() {
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
     * Test of setOffAlarm method, of class Alarm.
     */
    @Test
    public void testSetOffAlarm() {
        Alarm alarm = new Alarm();
        Exception expResult = null, result = null;
        String fileName = "/task/alarm.wav";
        String otherFile = "blah.wav";
        try{
            alarm.setOffAlarm(fileName);
        } catch (Exception e){ 
            fail("Valid file - this shouldn't throw an exception");
        }
        try{
            alarm.setOffAlarm(otherFile);
            fail("Invalid file - this should throw an exception");
        } catch (Exception e){ 
        }
    }
}
