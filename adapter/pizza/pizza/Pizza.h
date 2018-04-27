#pragma once
#include <iostream>

using namespace std;

class Pizza {
public:
	virtual string eat() {
		return "Pizza was eaten.";
	}
};