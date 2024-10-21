#include <iostream>
using namespace std;
int main()
{
    int check = 0;
    cout << "Enter 0 For Inches To Centimeters\nEnter 1 For Centimeters To Inches\n\n";
    cin >> check;
    if (check = 0)
    {
        float inches;
        cout << "Enter The Amount Of Inches:\n";
        cin >> inches;
        cout << "Centimeters: " << inches * 2.54;
    }
    else
    {
        float centimeters;
        cout << "Enter The Amount Of Centimeter\n";
        cin >> centimeters;
        cout << "Inches: " << centimeters / 2.54;
    }
}