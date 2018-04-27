#include "Customer.h"
#include "Pizza.h"
#include "PizzaAdapter.h"
#include <iostream>
#include <string>

using namespace std;

int main() {
	PizzaAdapter *pizzaAdapter = new PizzaAdapter();
	Customer *customer = new Customer(pizzaAdapter);
	cout << customer->eat();
	cin.get();
}