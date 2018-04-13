#include <gtest/gtest.h>
#include <stdexcept>
#include "RetractableSoundproofEarphones.h"

using namespace std;

void retract(RetractableEarphones &re){
  re.retractEarphones();
}

bool isExtended(Retractable &r){
  if (r.isRetracted() == false) return true;
  else return false;
}

void makeSoundproof(SoundproofEarphones &se){
  se.turnOnSoundproof();
}

bool soundproofness(Soundproof &s){
  if (s.isSoundproof() == true) return true;
  else return false;
}

TEST(DoD, makeSoundproof){
  RetractableSoundproofEarphones e;
  makeSoundproof(e);
  ASSERT_EQ(soundproofness(e), true);
}
