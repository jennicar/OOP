#include <gtest/gtest.h>
#include <stdexcept>
#include "Earphones.h"
#include "Powerstate.h"
#include "Mode.h"

using namespace std;

TEST(Earphone, constructor){
  Earphones earphones;
  ASSERT_EQ(earphones.getVolume(), 50);
  ASSERT_EQ(earphones.getMode(), PAUSE);
  ASSERT_EQ(earphones.getPowerstate(), POWERED);
}

TEST(Volume, setAndGet){
  Earphones earphones;
  earphones.setVolume(25);
  ASSERT_EQ(earphones.getVolume(), 25);
}

TEST(Volume, increaseAndDecrease){
  Earphones earphones;
  earphones.increaseVolume();
  ASSERT_EQ(earphones.getVolume(), 51);
  earphones.decreaseVolume();
  ASSERT_EQ(earphones.getVolume(), 50);
}

TEST(Mode, setAndGet){
  Earphones earphones;
  earphones.setMode(PAUSE);
  ASSERT_EQ(earphones.getMode(), PAUSE);
}

TEST(togglePlay, testMode){
  Earphones earphones;
  earphones.setMode(PAUSE);
  earphones.togglePlay();
  ASSERT_EQ(earphones.getMode(), PLAY);
  earphones.togglePlay();
  ASSERT_EQ(earphones.getMode(), PAUSE);
  }

TEST(Powerstate, setAndGet){
  Earphones earphones;
  earphones.setPowerstate(UNPOWERED);
  ASSERT_EQ(earphones.getPowerstate(), UNPOWERED);
}

TEST(Powerstate, turnOnAndOff){
  Earphones earphones;
  earphones.turnOn();
  ASSERT_EQ(earphones.getPowerstate(), POWERED);
  earphones.turnOff();
  ASSERT_EQ(earphones.getPowerstate(), UNPOWERED);
}
