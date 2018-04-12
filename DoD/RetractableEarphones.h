#include "Retractable.h"

class RetractableEarphones : Retractable {
	// members
protected: Retractable retractable;
		   // methods
public: RetractableEarphones();
public: void retractEarphones();
public: void extendEarphones();
public: ~RetractableEarphones();
};