#include <iostream>
#include <cmath>
#include <string>
#include <array>
#include <ctime>
#include <fstream>
#include <numbers>
#include "ALU.h"

int main()
{
    byte test1 = {0,1,1,0,1,0,0,1};
    byte test2 = {1,1,0,0,0,1,0,1};
    test1.print();
    test2.print();
    OR(test1,test2).print();
    AND(test1,test2).print();
    return 1;
}
