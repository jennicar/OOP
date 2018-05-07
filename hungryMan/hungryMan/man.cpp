#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>
#include <windows.h>
#include "man.h"
#include "baby.h"

using namespace std;

void Man::eat() {
	int hungryLevel = getHungerLevel();
	for (int i = hungryLevel; i >= 1; i--) {
		cout << "He is eating, his hunger level is: " << i << endl;
		Sleep(50);
	}
	cout << "He is full\n";
}

void Man::drink() {
	int thirstLevel = getThirstLevel();
	for (int i = thirstLevel; i >= 1; i--) {
		cout << "He is drinking, his thirst level is: " << i << endl;
		Sleep(50);
	}
	cout << "He is not thirsty anymore\n";
}

bool Man::isHungry() {
	int hungriness = getHungerLevel();
	bool check = false;
	string message = "He's not hungry\n";
	if (hungriness > 50) {
		check = true;
		message = "He's hungry!\n";
	}
	cout << message;
	return check;
}

bool Man::isThirsty() {
	int thirstiness = getThirstLevel();
	bool check = false;
	string message = "He's not thirsty\n";
	if (thirstiness > 50) {
		check = true;
		message = "He's thirsty!\n";
	}
	cout << message;
	return check;
}

void Man::setHungerLevel(int _hungerLevel) {
	hungerLevel = _hungerLevel;
}

void Man::setThirstLevel(int _thirstLevel) {
	thirstLevel = _thirstLevel;
}

int Man::getHungerLevel() {
	return hungerLevel;
}

int Man::getThirstLevel() {
	return thirstLevel;
}

int main() {
	Man mark;
	mark.setHungerLevel(23);
	mark.setThirstLevel(12);
	Baby baby;
	baby.setThirstLevel(51);
	baby.isThirsty();
	cin.get();
	return 0;
}
