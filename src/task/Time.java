/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package task;

/**
 *
 * @author jenni
 * pulled from wmacevoy github
 */
public class Time {
    public static class Builder {
        private int _day = 0;
        private int _hour = 0;
        private int _minute = 0;
        private int _second = 0;
        private int _nanosecond = 0;
        public int day() { return _day; }
        public Builder day (int value) { _day = value; return this; }
        public int hour() { return _hour; }
        public Builder hour (int value) { _hour = value; return this; }
        public int minute() { return _minute; }
        public Builder minute (int value) { _minute = value; return this; }
        public int second() { return _second; }
        public Builder nanosecond (int value) { _nanosecond = value; return this; }
        public int nanosecond() { return _nanosecond; }
        public Builder second (int value) { _second = value; return this; }
        public Time time() { return new Time(_day, _hour, _minute, _second, _nanosecond); }
    }
    
    public static Builder build(){ return new Builder(); }
    
    public static final long DAY_NS = 24L * 60L * 60L * 1_000_000_000L;
    private final long HOUR_NS = 60L * 60L * 1_000_000_000L;
    private final long MINUTE_NS = 60L * 1_000_000_000L;
    private final long SECOND_NS = 1_000_000_000L;
    private final long NANOSECOND_NS = 1L;
    public static final Time DAY = new Time(DAY_NS);
    
    public static final int MAX_DAYS = 106_751;
    private long _nanoseconds;
    
    public Time(long nanoseconds) {
        _nanoseconds = nanoseconds;
    }
    
    public Time(int day, int hour, int minute, int second, int nanosecond){
        if (Math.abs(day) > MAX_DAYS
                || Math.abs(day + hour / 24 + minute / (24 * 60) + second /
                        (24 * 60 * 60)) > MAX_DAYS) {
            throw new IllegalArgumentException("|time| must be less than " + MAX_DAYS + " days");
        }
        _nanoseconds = ((((day * 24L) + hour) * 60L + minute) * 60L + second) * 1_000_000_000L + nanosecond;
    }
    
    public Time(int hour, int minute, int second) {
        this(0, hour, minute, second, 0);
    }
    
    public int getDay() {
        return (int) (_nanoseconds / DAY_NS);
    }

    public int getHour() {
        return (int) ((_nanoseconds % DAY_NS) / HOUR_NS);
    }

    public int getMinute() {
        return (int) ((_nanoseconds % HOUR_NS) / MINUTE_NS);
    }

    public int getSecond() {
        return (int) ((_nanoseconds % MINUTE_NS) / SECOND_NS);
    }

    public int getNanosecond() {
        return (int) ((_nanoseconds % SECOND_NS) / NANOSECOND_NS);
    }      
        
    @Override
    public String toString(){
        return "" + (24*getDay()+getHour()) + ":" + getMinute() + ":" + (getSecond() + getNanosecond()*1e-9);
    }
}