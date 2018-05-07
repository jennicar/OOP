#include <gtest/gtest.h>
#include <stdexcept>
#include "Soundproof.h"

using namespace std;

TEST(Soundproofness, constructor){
  Soundproof soundproof;
  ASSERT_EQ(soundproof.getNoiseLevel(), 100);
}

TEST(Soundproofness, check){
  Soundproof soundproof;
  ASSERT_EQ(soundproof.isSoundproof(), false);
}

TEST(Soundproofness, makeItSoundproof){
  Soundproof soundproof;
  soundproof.makeSoundproof();
  ASSERT_EQ(soundproof.isSoundproof(), true);
}
