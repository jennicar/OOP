#pragma once
#include "Pizza.h"
#include "PineapplePizza.h"

class PizzaAdapter : Pizza {
private:
	PineapplePizza pizza;
public:
	PizzaAdapter() {
		pizza = new PineapplePizza();
	}
	void eat() {
		pizza.eatBadPizza();
	}
};