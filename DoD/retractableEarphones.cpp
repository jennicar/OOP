#include "RetractableEarphones.h"

RetractableEarphones::RetractableEarphones() {}

void RetractableEarphones::retractEarphones() {
	earphones.turnOff();
	retractable.retract();
}

void RetractableEarphones::extendEarphones() {
	retractable.extend();
	earphones.turnOn();
}


RetractableEarphones::~RetractableEarphones() {}