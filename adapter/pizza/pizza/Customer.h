#pragma once
#include "Pizza.h"

class Customer : Pizza{
private:
	Pizza * pizza = new Pizza();
public:
	Customer() {};
	Customer(Pizza *pizza) {
		this->pizza = pizza;
	}
	void eat() {
		pizza->eat();
	}
};