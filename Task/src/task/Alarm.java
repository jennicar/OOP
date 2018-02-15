/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package task;

import java.io.IOException;
import java.net.URL;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.Mixer;
import javax.sound.sampled.UnsupportedAudioFileException;
import sun.applet.Main;


/**
 *
 * @author jenni
 */
public class Alarm{
    
    private Mixer mixer;
    private Clip clip;
    /*private final long day = 24L * 60L * 60L * 1_000_000_000L;
    private final long hour = 24L * 60L * 60L * 1_000_000_000L;
    private final long minute = 24L * 60L * 60L * 1_000_000_000L;
    private final long second = 24L * 60L * 60L * 1_000_000_000L;
    private final long nanosecond = 24L * 60L * 60L * 1_000_000_000L;*/
    
    public Alarm(){};
    
    public void setOffAlarm(String fileName){
        Mixer.Info[] mixInfos = AudioSystem.getMixerInfo();
        mixer = AudioSystem.getMixer(mixInfos[0]);
        DataLine.Info dataInfo = new DataLine.Info(Clip.class, null);
        
        try { clip = (Clip)mixer.getLine(dataInfo);}
        catch(LineUnavailableException e) {System.err.println(e.getMessage());}
        
        try{
            URL soundURL = Main.class.getResource(fileName);
            AudioInputStream audioStream = AudioSystem.getAudioInputStream(soundURL);
            clip.open(audioStream);
        } catch (IOException | LineUnavailableException | UnsupportedAudioFileException e) {}
        clip.start();     
    }
    
    
}
