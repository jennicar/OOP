/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package task;

import java.util.Arrays;

/**
 *
 * @author jenni
 */
public final class Task {
    
    private String task;
    private String [] agenda = {};
    private boolean [] states = {};
    private TaskState state;
    
    public Task(){
        if (!isArrayEmpty(agenda)){
            System.out.println("Array is not empty");
        }
    }
    
    public boolean isArrayEmpty(String [] _array){
        _array = agenda;
        for (int i = 0; i < _array.length; i++){
            if (_array[i] != null) return false;
        }
            return true;
    }
    
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
    
    public boolean isTaskDone(String [] _array, boolean [] _array2, String _key){
        boolean done = false;
        int index = 0;
        if (isItemInArray(_array, _key)){
            index = returnItemIndex(_array, _array2, _key);
            if (_array2[index] == true) done = true;
        } else done = false;
        return done;
    }
    
    public void setAgendaArray(String [] _array){
        agenda = _array;
    }
    
    public String [] getAgendaArray(){ 
        return agenda; 
    }
    
    public void setStatesArray(boolean [] _array){
        states = _array;
    }
    
    public boolean [] getStatesArray(){ 
        return states; 
    }
    
    public void addTask(String [] _array, String _task){
        int currentArraySize = _array.length;
        int newArraySize = currentArraySize + 1;
        String[] tempArray = new String[newArraySize];
        for (int i = 0; i < currentArraySize; i ++){
            tempArray[i] = _array[i];
        }
        tempArray[newArraySize -1] = _task;
    }
    
    public void removeTask(String [] _array, int _index){
        for (int i = _index; i < _array.length - 1; i++){
            _array[i] = _array[i + 1];
        }
    }
    
    public boolean isItemInArray(String [] _array, String _key){
        boolean check = false;
        for (int i = 0; i < _array.length; i++){
            check = _array[i].equals(_key);
        }
        return check;
    }
    
    public int returnItemIndex(String [] _array, boolean [] _array2, String _key){
        String [] agendaArray = getAgendaArray();
        int index;
        for (index = 0; index < _array.length; index++){
            if (_array[index].equals(_key)) break;
        }
        return index;
    }
        
    public void printAgenda(String [] _array){
        System.out.println(Arrays.toString(_array));
    }
    
}
