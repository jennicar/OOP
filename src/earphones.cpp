#include <string>
#include <fstream>
#include <iostream>
#include <iomanip>
#include "Earphones.h"

using namespace std;

Earphones::Earphones() : volume(50), mode(PAUSE), powerstate(POWERED) {}

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

void Earphones::setPowerstate(Powerstate _powerstate) { this->powerstate = _powerstate; }
Powerstate Earphones::getPowerstate(){ return this->powerstate; }

void Earphones::turnOff(){ setPowerstate(UNPOWERED); }
void Earphones::turnOn(){ setPowerstate(POWERED); }

Earphones::~Earphones(){}
