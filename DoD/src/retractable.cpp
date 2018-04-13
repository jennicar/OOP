#include <string>
#include <fstream>
#include <iostream>
#include <iomanip>
#include "Retractable.h"

using namespace std;

Retractable::Retractable() : retracted(false), earphoneLength(100), totalEarphoneLength(100) {}

void Retractable::setEarphoneLength(int _earphoneLength){ this->earphoneLength = _earphoneLength; }
int Retractable::getEarphoneLength(){ return this->earphoneLength; }
void Retractable::setTotalEarphoneLength(int _totalEarphoneLength){ this->totalEarphoneLength = _totalEarphoneLength; }
int Retractable::getTotalEarphoneLength(){ return this->totalEarphoneLength; }

bool Retractable::isRetracted(){
	int length = getEarphoneLength();
	if ((length == 0) || (this->retracted == true)) return true;
	else return false;
}

void Retractable::retract(){
	int totalLength = getTotalEarphoneLength();
	while (totalLength > 0){
		totalLength--;
	}
	if (totalLength == 0) setEarphoneLength(totalLength);
}

void Retractable::extend(){
	int length = getEarphoneLength();
	int totalLength = getTotalEarphoneLength();
	while ((length == 0) || (length != totalLength)){
		length++;
	}
	if (length == totalLength) setEarphoneLength(length);
}

Retractable::~Retractable(){}
