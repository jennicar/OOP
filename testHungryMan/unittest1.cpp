#include "stdafx.h"
#include "CppUnitTest.h"
#include "../hungryMan/man.h"

using namespace Microsoft::VisualStudio::CppUnitTestFramework;

namespace testHungryMan
{		
	TEST_CLASS(Man)
	{
	public:
		
		TEST_METHOD(isHungry){
			Man mark;
			mark.isHungry();
		}

	};
}