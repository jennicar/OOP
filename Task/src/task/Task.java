/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package task;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jenni
 */
public final class Task {
    private Alarm alarm;
    private List<String> agenda = new ArrayList();
    private List<Boolean> states = new ArrayList();
    private String task;
    private TaskState state;
    
    public Task(){ }

    public Task(Time time){ }
    
    public void setTask(String _task){
        task = _task; 
    }
    
    public String getTask(){ 
        return task; 
    }
    
    public void setTaskStatus(TaskState _state){
        state = _state;
    }
    
    public boolean getTaskStatus(){
        switch(state) {
            case COMPLETED: return true;
            case INCOMPLETE: return false;
        }
        throw new IllegalStateException();
    }
    
    public void setAgendaList(List _list){
        agenda = _list;
    }
    
    public List getAgendaList(){
        return agenda;
    }
    
    public void setStatesList(List _list){
        states = _list;
    }
    
    public List getStatesList(List _list){
        return states;
    }
    
    public boolean isTaskDone(String [] _array, boolean [] _array2, String _key){
        boolean done = false;
        int index = 0;
        if (isItemInArray(_array, _key)){
            index = returnItemIndex(_array, _array2, _key);
            if (_array2[index] == true) done = true;
        } else done = false;
        return done;
    }
    
    public boolean isItemInArray(String [] _array, String _key){
        boolean check = false;
        for (String _array1 : _array) {
            check = _array1.equals(_key);
        }
        return check;
    }
    
    public int returnItemIndex(String [] _array, boolean [] _array2, String _key){
        int index;
        for (index = 0; index < _array.length; index++){
            if (_array[index].equals(_key)) break;
        }
        return index;
    }    
}