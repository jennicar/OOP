#pragma once
#include <string>
#include <fstream>
#include <iostream>
#include <iomanip>
#include "Mode.h"
#include "Powerstate.h"

class Earphones {
	// members
protected: int volume;
protected: Mode mode;
protected: PowerState powerstate;
		   // methods
public: Earphones();
public: void setVolume(int);
public: int getVolume();
public: void increaseVolume();
public: void decreaseVolume();
public: void togglePlay();
public: void setMode(Mode);
public: Mode getMode();
public: void setPowerState(PowerState);
public: PowerState getPowerstate();
public: void turnOff();
public: void turnOn();
public: ~Earphones();
};