#pragma once
#include <string>
#include <iostream>
#include <fstream>
using namespace std;

// target
class Pizza {
public:
	virtual void eat() {
		cout << "Pizza was eaten.\n";
	}
};