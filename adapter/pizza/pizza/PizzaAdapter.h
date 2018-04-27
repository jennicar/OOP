#pragma once
#include "Pizza.h"
#include "PineapplePizza.h"

class PizzaAdapter : public Pizza {
private:
	PineapplePizza *pizza;
public:
	PizzaAdapter() {
		pizza = new PineapplePizza();
	}
	string eat() override {
		return pizza->eatBadPizza();
	}
};