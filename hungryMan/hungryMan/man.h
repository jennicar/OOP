#pragma once

class Man {
private: int hungerLevel = 100;
private: int thirstLevel = 100;

public: void eat();
public: void drink();
public: bool isHungry();
public: bool isThirsty();
public: void setHungerLevel(int _hungerLevel);
public: int getHungerLevel();
public: void setThirstLevel(int _thirstLevel);
public: int getThirstLevel();
};
