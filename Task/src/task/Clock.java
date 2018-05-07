/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package task;

import java.time.LocalDateTime;

/**
 *
 * @author jenni
 */
public class Clock {
    public static final Clock DEFAULT_CLOCK = new Clock();
    public LocalDateTime now(){ return LocalDateTime.now(); }
}
