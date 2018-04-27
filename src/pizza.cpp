#include "Pizza.h"
#include <iostream>
#include <string>
//#include <algorithm>

using namespace std;

//constructor
Pizza::Pizza(Size size, Sauce sauce, int nToppings) : 
   size(L), sauce(TOMATO), numOfToppings(2)/*, marker(false) */{
  setSize(size);
  setSauce(sauce);
  setNumOfToppings(nToppings);
}
// sets
void Pizza::setSize(Size _size){ size = _size; }
void Pizza::setSauce(Sauce _sauce){ sauce = _sauce; }
void Pizza::setNumOfToppings(int _numOfToppings){
  if ((_numOfToppings > -1) && (_numOfToppings <= 5)){
	numOfToppings = _numOfToppings; }
  else throw("Five toppings is the max.");
}
void Pizza::setPizzaOrders(vector<Pizza> _pizzaOrders)
 pizzaOrders = _pizzaOrders; }

// gets
Size Pizza::getSize(){ return size; }
Sauce Pizza::getSauce(){ return sauce; }
int Pizza::getNumOfToppings(){ return numOfToppings; }
vector<Pizza> Pizza::getPizzaOrders(){ return pizzaOrders; }

// vector methods
void Pizza::add(Pizza pizza){ pizzaOrders.push_back(pizza); }
int Pizza::arraySize(){ return pizzaOrders.size(); }
void Pizza::printOrders(Pizza pizza){
  for (int i = 0; i < pizza.arraySize(); i++){
    cout << "Size: " << pizza.pizzaOrders[i].getSize() << endl;
    cout << "Sauce: " << pizza.pizzaOrders[i].getSauce() << endl;
    cout << "Number of Toppings: " <<
       pizza.pizzaOrders[i].getNumOfToppings() << endl;
  }
}

// Print

/*ostream& Pizza::operator << (ostream& out){
  out << "Size: " << getSize() << endl;
  out << "Sauce: " << getSauce() << endl;
  out << "Number of Toppings: " << getNumOfToppings() << endl;
  return out;
  }

// Errors
// won't accept pizza as a parameter

// algorithm:
// check is set to true (1) for the item to be deleted
// if the item is marked, it will be deleted

void Pizza::markedForDeletion(bool _marker){
  this->marker = _marker;
}


void Pizza::remove(Pizza pizza){
  this->markedForDeletion(true);
  vector<Pizza> array = this->pizzaOrders;
  int check = this->marker;
  if (check == 1){
    try{
      array.erase(remove(array.begin(), array.end(), pizza), array.end());
    } catch (...) { cout << "!!! error at markedForDeletion()\n"; }
  }
  }
*/
