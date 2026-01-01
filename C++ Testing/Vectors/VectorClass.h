#include <iostream>
#include <cmath>
#include <string>

using namespace std;

class Vector
{
public:
    float components[];
    string name;
    int dimensions;
    Vector(string n, int d, float c[])
    {
        components = c;
        name = n;
        dimensions = d;
    }
    void print()
    {
        cout << name << " Vector: (" << to_string(components[0]);
        for(int i = 1; i < dimensions; i++) {
            cout << ", " << to_string(components[i]);
        }
        cout << ")" << "\n";
    }
    /*string returnString()
    {
        return "(" + to_string(xMag) + ", " + to_string(yMag) + ")";
    }
    */
};

Vector addVectors(Vector v1, Vector v2)
{
    
    //return v3;
    return nullptr;
}

Vector subtractVectors(Vector v1, Vector v2)
{
    
    //return v3;
    return nullptr;
}

Vector averageVectors(Vector v1, Vector v2)
{
    
    //return v3;
    return nullptr;
}

float dotProduct(Vector v1, Vector v2) {

    //return dp;
    return nullptr;
}
