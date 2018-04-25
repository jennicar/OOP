#include "Customer.h"
#include "Pizza.h"
#include "PizzaAdapter.h"

using namespace std;

int main() {
	PizzaAdapter *pizzaAdapter = new PizzaAdapter();
	Customer *customer = new Customer(pizzaAdapter);
	customer->eat();
	cin.get();
}