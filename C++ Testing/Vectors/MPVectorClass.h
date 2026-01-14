//GNU nano 8.1                                       MPVectorClass.h                                       Modified  
#include <iostream>
#include <cmath>
#include <string>
#include <vector>

using namespace std;

class MPVector
{
public:
    string name;
    int dimensions;
    vector<float> components;
    MPVector(string n, vector<float> v)
    {
     	name = n;
        dimensions = size(v);
        components = v;
    }
    void print()
    {
        //Reads out every part of the vector
        cout << name << " Vector: (";
        for(int i = 0; i < dimensions-1; i++) {
            cout << components[i] << ' ';
        }
	cout << components[dimensions-1] <<")" << '\n';
        cout << name << ": " << dimensions << '\n';
    }
};

MPVector addVectors(MPVector v1, MPVector v2)
{
    vector<float> c3;

    for(int i = 0; i < v1.dimensions; i++) {
        c3.insert(c3.end(), v1.components[i] + v2.components[i]);
    }

    MPVector v3("Sum", c3);
    return v3;
}

MPVector subtractVectors(MPVector v1, MPVector v2)
{
    vector<float> c3;

    for(int i = 0; i < v1.dimensions; i++) {
        c3.insert(c3.end(), v1.components[i] - v2.components[i]);
    }

    MPVector v3("Difference", c3);
    return v3;
}
