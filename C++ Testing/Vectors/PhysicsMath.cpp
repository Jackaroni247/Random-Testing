//GNU nano 8.1                                       PhysicsMath.cpp                                                 
#include "MPVectorClass.h"
#include "MatrixClass.h"

using namespace std;

int main()
{

    MPVector v1("Engine", {1,2,3,4});
    MPVector v2("Drag", {5,6,7,8});

    v1.print();
    v2.print();
    addVectors(v1, v2).print();
    subtractVectors(v1,v2).print();
    averageVectors(v1,v2).print();
    cout << "V1*V2: " << dotProduct(v1,v2) << '\n';
    return 1;
}
