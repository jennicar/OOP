#include <gtest/gtest.h>
#include "Pizza.h"

// testing add, size, remove fcns

TEST(Pizza, constructor){
  Pizza pizza(L, TOMATO, 2);
  ASSERT_EQ(pizza.getSize(), L);
  ASSERT_EQ(pizza.getSauce(), TOMATO);
  ASSERT_EQ(pizza.getNumOfToppings(), 2);
}

TEST(Pizza, setAndGets){
  Pizza pizza(L, TOMATO, 2);
  pizza.setSize(M);
  ASSERT_EQ(pizza.getSize(), M);
  pizza.setSauce(ALFREDO);
  ASSERT_EQ(pizza.getSauce(), ALFREDO);
  pizza.setNumOfToppings(5);
  ASSERT_EQ(pizza.getNumOfToppings(), 5);
  }

TEST(Pizza, add){
  Pizza pizza(L, TOMATO, 2);
  Pizza spizza(L, ALFREDO, 5);
  ASSERT_EQ(pizza.arraySize(), 0);
  pizza.add(pizza);
  ASSERT_EQ(pizza.arraySize(), 1);
  pizza.add(spizza);
  ASSERT_EQ(pizza.arraySize(), 2);
  }

TEST(Pizza, example){
  Pizza buffaloPizzaXL(XL, BUFFALO, 5);
  Pizza alfredoPizzaL(L, ALFREDO, 5);
  Pizza alfredoPizzaM(M, ALFREDO, 2);
  Pizza alfredoPizzaS(S, ALFREDO, 1);
  Pizza bbqPizzaL(L, BBQ, 3);
  Pizza bbqPizzaM(M, BBQ, 2);
  Pizza bbqPizzaS(S, BBQ, 2);

  // in order from largest to smallest
  buffaloPizzaXL.add(buffaloPizzaXL);
  buffaloPizzaXL.add(alfredoPizzaL);
  buffaloPizzaXL.add(bbqPizzaL);
  // each size is categorized into different types of sauce
  alfredoPizzaL.add(alfredoPizzaM);
  alfredoPizzaL.add(alfredoPizzaS);
  bbqPizzaL.add(bbqPizzaM);
  bbqPizzaL.add(bbqPizzaS);

  ASSERT_EQ(buffaloPizzaXL.arraySize(), 3);
  ASSERT_EQ(alfredoPizzaL.arraySize(), 2);
  ASSERT_EQ(bbqPizzaL.arraySize(), 2);
}

/*TEST(Pizza, remove){
  Pizza pizza;
  Pizza bbqPizza;
  Pizza garlicPizza;
  bbqPizza.setSauce(BBQ);
  pizza.add(pizza);
  pizza.add(bbqPizza);
  pizza.add(garlicPizza);
  ASSERT_EQ(pizza.arraySize(), 3);
  pizza.remove(pizza);
  ASSERT_EQ(pizza.arraySize(), 2);
  }*/
