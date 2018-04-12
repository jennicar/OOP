#include <string>
#include <fstream>
#include <iostream>
#include <iomanip>
#include "earphones.h"

using namespace std;

Earphones::Earphones() : volume(50), mode(PAUSE) {}

void Earphones::setVolume(int _volume){ this->volume = _volume; }
int Earphones::getVolume(){ return this->volume; }

void Earphones::increaseVolume(){
	int volume = getVolume();
	if (volume < 100) this->volume++;
}

void Earphones::decreaseVolume(){
	int volume = getVolume();
	if (volume > 0) this->volume--;
}

void Earphones::setMode(Mode _mode){ this->mode = _mode; }
Mode Earphones::getMode(){ return this->mode; }

void Earphones::togglePlay(){
	Mode mode = getMode();
	if (mode == PAUSE) setMode(PLAY);
	else if (mode == PLAY) setMode(PAUSE);
}

void Earphones::setPowerState(PowerState _powerstate) { this->powerstate = powerstate; }
PowerState Earphones::getPowerstate(){ return this->powerstate; }

void Earphones::turnOff(){
	PowerState powerstate = getPowerstate();
	if (powerstate == POWERED) setPowerState(UNPOWERED);
}

void Earphones::turnOn(){
	PowerState powerstate = getPowerstate();
	if (powerstate == UNPOWERED) setPowerState(POWERED);
}

Earphones::~Earphones(){}

int main(){}
