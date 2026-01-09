#include "VectorClass.h"
#include "MatrixClass.h"

using namespace std;

int main()
{
    string v1Name = "Engine";
    string v2Name = "Drag";
    Vector v1(v1Name,2);
    Vector v2(v2Name,2);

    v1.print();
    v2.print();
    addVectors(v1, v2).print();
    subtractVectors(v1,v2).print();
    averageVectors(v1,v2).print();
    cout << "V1*V2: " << dotProduct(v1,v2) << '\n';
    return 1;
}
