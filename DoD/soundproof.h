#pragma once

class Soundproof{
	// members
	protected: int noiseLevel;
	// methods
	public: Soundproof();
	public: void setNoiseLevel(int);
	public: int getNoiseLevel();
	public: bool isSoundproof();
	public: void makeSoundproof();
	public: ~Soundproof();
};
