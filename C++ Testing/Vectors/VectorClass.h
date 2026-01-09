  GNU nano 8.1                                        VectorClass.h                                                  
#include <iostream>
#include <cmath>
#include <string>

using namespace std;

class Vector
{
public:
    string name;
    int dimensions;
    Vector(string n, int d)
    {
     	name = n;
        dimensions = d;
    }
    void print()
    {
        /*cout << name << " Vector: (" << to_string(components[0]);
        for(int i = 1; i < dimensions; i++) {
            cout << ", " << to_string(components[i]);
        }
        cout << ")" << "\n"; */
        cout << name << ": " << dimensions << '\n';
    }
};

Vector addVectors(Vector v1, Vector v2)
{
    return v1;
}

Vector subtractVectors(Vector v1, Vector v2)
{
    return v1;
}

Vector averageVectors(Vector v1, Vector v2)
{
    return v1;
}

float dotProduct(Vector v1, Vector v2) {
    return 0;

}


