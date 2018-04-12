#include "Retractable.h"
#include "Soundproof.h"
#include "Earphones.h"

class RetractableSoundproofEarphones {
	// members
protected: Retractable retractable;
protected: Soundproof soundproof;
	// methods
public: RetractableSoundproofEarphones();
public: void makeSoundproof();
public:	~RetractableSoundproofEarphones();
};

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
