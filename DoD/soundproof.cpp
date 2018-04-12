#include "Soundproof.h"

using namespace std;

Soundproof::Soundproof() : noiseLevel(100) {}

void Soundproof::setNoiseLevel(int _noiseLevel) { this->noiseLevel = _noiseLevel; }
int Soundproof::getNoiseLevel() { return this->noiseLevel; }

bool Soundproof::isSoundproof() {
	int noiseLevel = getNoiseLevel();
	if (noiseLevel == 0) return true;
	else return false;
}

void Soundproof::toggleSoundproof() {
	int noiseLevel = getNoiseLevel();
	if (noiseLevel != 0) {
		noiseLevel--;
		if (noiseLevel == 0) setNoiseLevel(noiseLevel);
	} else setNoiseLevel(25); 
}

void Soundproof::makeSoundproof() {
	int noiseLevel = getNoiseLevel();
	while (noiseLevel != 0) { noiseLevel--; }
	if (noiseLevel == 0) setNoiseLevel(noiseLevel);
}

Soundproof::~Soundproof() {}