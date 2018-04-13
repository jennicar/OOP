#include "SoundproofEarphones.h"

SoundproofEarphones::SoundproofEarphones() {}

void SoundproofEarphones::turnOffSoundproof() {
	int noiseLevel = soundproof.getNoiseLevel();
	while (noiseLevel != 0) { noiseLevel--; }
	if (noiseLevel == 0) soundproof.setNoiseLevel(noiseLevel);
}

void SoundproofEarphones::turnOnSoundproof() {
	int noiseLevel = soundproof.getNoiseLevel();
	if (noiseLevel == 0) soundproof.setNoiseLevel(25);
}

SoundproofEarphones::~SoundproofEarphones() {}