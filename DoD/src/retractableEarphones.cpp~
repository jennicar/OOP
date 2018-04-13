#include <iostream>
#include <iomanip>
#include <string>
#include <fstream>
#include "retractable.h"

using namespace std;

class RetractableEarphones : Retractable{
	// members
	protected: Retractable retractable;
	// methods
	public: RetractableEarphones();
	public: void retractEarphones();
	public: void extendEarphones();
	public: ~RetractableEarphones();
};

void RetractableEarphones::retractEarphones(){
	earphones.turnOff();
	retractable.retract();
}

void RetractableEarphones::extendEarphones(){
	retractable.extend();
	earphones.turnOn();
}

int main(){
	RetractableEarphones retractableEar;
	Retractable retractable;
	retractableEar.extendEarphones();
	cout << retractable.isRetracted() << endl;
}
