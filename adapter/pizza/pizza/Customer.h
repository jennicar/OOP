#pragma once
#include "Pizza.h"

class Customer {
private:
	Pizza pizza;
public:
	Customer(Pizza pizza) {
		this->pizza = pizza;
	}
	void eat() {
		pizza.eat();
	}
};