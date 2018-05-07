#pragma once
#include "Mode.h"
#include "Powerstate.h"

class Earphones{
	// members
	protected: int volume;
	protected: Mode mode;
	protected: Powerstate powerstate;
	// methods
	public: Earphones();
	public: void setVolume(int);
	public: int getVolume();
	public: void increaseVolume();
	public: void decreaseVolume();
	public: void togglePlay();
	public: void setMode(Mode);
	public: Mode getMode();
	public: void setPowerstate(Powerstate);
	public: Powerstate getPowerstate();
	public: void turnOff();
	public: void turnOn();
	public: ~Earphones();
};
