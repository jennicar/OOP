#include "earphones.h"

class Retractable : public Earphones {
	// members
	protected: Earphones earphones;
	protected: bool retracted;
	protected: int earphoneLength;
	protected: int totalEarphoneLength;
	// methods
	public: Retractable();
	public: bool isRetracted();
	public: void setEarphoneLength(int);
	public: int getEarphoneLenth();
	public: void setTotalEarphoneLength(int);
	public: int getTotalEarphoneLength();
	public: void retract();
	public: void extend();
	public: ~Retractable();
};
