#include "VectorClass.h"
#include "MatrixClass.h"

using namespace std;

int main()
{

    Vector v1("Engine",2.0, 4.0);
    Vector v2("Drag",-1.0, 5.0);

    v1.print();
    v2.print();
    addVectors(v1, v2).print();
    subtractVectors(v1,v2).print();
    averageVectors(v1,v2).print();
    cout << "V1*V2: " << dotProduct(v1,v2) << '\n';
    return 1;
}
