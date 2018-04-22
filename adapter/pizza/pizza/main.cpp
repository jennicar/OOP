#include "Customer.h"
#include "PizzaAdapter.h"

using namespace std;

int main() {
	Customer customer = new Customer(new PizzaAdapter());
	customer.eat();
}

/*
https://sourcemaking.com/design_patterns/adapter/cpp/1
*/