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
public class TimeTest {
    
    public TimeTest() {
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
     * Test of builder method, of class Time.
     */
    @Test
    public void testBuilder() {
        assertEquals(Time.build().time().toString(),new Time(0,0,0,0,0).toString());
        assertEquals(Time.build().day(1).time().toString(),new Time(1,0,0,0,0).toString());
        assertEquals(Time.build().hour(12).time().toString(),new Time(12,0,0).toString());
        assertEquals(Time.build().minute(30).time().toString(),new Time(0,30,0).toString());
        assertEquals(Time.build().second(15).time().toString(),new Time(0,0,15).toString());
        assertEquals(Time.build().nanosecond(150_450_850).time().toString(),new Time(0,0,0,0,150_450_850).toString());
        assertEquals(Time.build().day(1).hour(12).minute(30).second(15).nanosecond(150_450_850).time().toString(),new Time(1,12,30,15,150_450_850).toString());
    }
}