#include <gtest/gtest.h>
#include <stdexcept>
#include "Retractable.h"

using namespace std;

TEST(Retractable, constructor){
  Retractable retractable;
  ASSERT_EQ(retractable.isRetracted(), false);
  ASSERT_EQ(retractable.getEarphoneLength(), 100);
  ASSERT_EQ(retractable.getTotalEarphoneLength(), 100);
}

TEST(EarphoneLength, setAndGet){
  Retractable retractable;
  retractable.setEarphoneLength(0);
  ASSERT_EQ(retractable.getEarphoneLength(), 0);
  retractable.setTotalEarphoneLength(100);
  ASSERT_EQ(retractable.getTotalEarphoneLength(), 100);
}

TEST(Retractable, retractAndExtend){
  Retractable retractable;
  ASSERT_EQ(retractable.isRetracted(), false);
  retractable.retract();
  ASSERT_EQ(retractable.isRetracted(), true);
  retractable.extend();
  ASSERT_EQ(retractable.isRetracted(), false);
}
