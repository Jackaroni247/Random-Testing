#include <iostream>
#include <cmath>
#include <string>

using namespace std;

float nums[] = {3, 18, 9, 11, 13, 19, 25, 2};

float average(float mainArray[], float size)
{
    float sum = 0;

    for (int i = 0; i < size; i++)
    {
        sum += mainArray[i];
    }

    return (sum / size);
}

int main()
{

    cout << average(nums, sizeof(nums) / sizeof(nums[0]));


    cout << "\n";
    return (0);
}