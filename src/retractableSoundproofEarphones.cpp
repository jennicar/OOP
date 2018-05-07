#include "RetractableSoundproofEarphones.h"

RetractableSoundproofEarphones::RetractableSoundproofEarphones() {}

void RetractableSoundproofEarphones::makeSoundproof() {
	bool check = retractable.isRetracted();
	if (check == false) soundproof.makeSoundproof();
	else {
		retractable.extend();
		bool checkAgain = retractable.isRetracted();
		if (checkAgain == false) soundproof.makeSoundproof();
	}
}

RetractableSoundproofEarphones::~RetractableSoundproofEarphones() {}
