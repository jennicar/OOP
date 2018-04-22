#include "Pizza.h"
//#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

Pizza::Pizza(Size size, Sauce sauce, int nToppings) : size(L), sauce(TOMATO), numOfToppings(2)/*, marker(false) */{
  setSize(size);
  setSauce(sauce);
  setNumOfToppings(nToppings);
}

void Pizza::setSize(Size _size){ size = _size; }
Size Pizza::getSize(){ return size; }

void Pizza::setSauce(Sauce _sauce){ sauce = _sauce; }
Sauce Pizza::getSauce(){ return sauce; }

void Pizza::setNumOfToppings(int _numOfToppings){
  if ((_numOfToppings > -1) && (_numOfToppings <= 5)) numOfToppings = _numOfToppings;
  else throw("Five toppings is the max.");
}
int Pizza::getNumOfToppings(){ return numOfToppings; }

void Pizza::setPizzaOrders(vector<Pizza> _pizzaOrders){ pizzaOrders = _pizzaOrders; }
vector<Pizza> Pizza::getPizzaOrders(){ return pizzaOrders; }

void Pizza::add(Pizza pizza){ pizzaOrders.push_back(pizza); }
int Pizza::arraySize(){ return pizzaOrders.size(); }
void Pizza::printOrders(Pizza pizza){
  for (int i = 0; i < pizza.arraySize(); i++){
    cout << "Size: " << pizza.pizzaOrders[i].getSize() << endl;
    cout << "Sauce: " << pizza.pizzaOrders[i].getSauce() << endl;
    cout << "Number of Toppings: " << pizza.pizzaOrders[i].getNumOfToppings() << endl;
  }
}

/*ostream& Pizza::operator << (ostream& out){
  out << "Size: " << getSize() << endl;
  out << "Sauce: " << getSauce() << endl;
  out << "Number of Toppings: " << getNumOfToppings() << endl;
  return out;
  }*/ 

// won't accept pizza as a parameter
// check is to be set to true/1 for the item to be deleted
// if the item is marked, it will be deleted

/*void Pizza::remove(Pizza pizza){
  this->markedForDeletion(true);
  vector<Pizza> array = this->pizzaOrders;
  int check = this->marker;
  if (check == 1){
    try{
      array.erase(remove(array.begin(), array.end(), pizza), array.end());
    } catch (...) { cout << "!!! error at markedForDeletion()\n"; }
  }
  }*/

// 
/*void Pizza::markedForDeletion(bool _marker){
  this->marker = _marker;
}
*/
