#pragma once
#include <vector>
//#include <iostream>
#include "Size.h"
#include "Sauce.h"

using namespace std;

class Pizza{
  // members
 protected: Size size;
 protected: Sauce sauce;
 protected: int numOfToppings;
 protected: vector<Pizza> pizzaOrders;
  // protected: bool marker;
  
  // methods
 public: Pizza(Size, Sauce, int);
  // sets
 public: void setNumOfToppings(int);
 public: void setSize(Size);
 public: void setSauce(Sauce);
 public: void setPizzaOrders(vector<Pizza>);
 public: void markedForDeletion(bool);
  // gets
 public: int getNumOfToppings();
 public: Size getSize();
 public: Sauce getSauce();
 public: vector<Pizza> getPizzaOrders();
  // vector methods
 public: void add(Pizza);
 public: int arraySize();
 public: void remove(Pizza);
 public: void printOrders(Pizza);
  //public: ostream &operator << (ostream &);
};
