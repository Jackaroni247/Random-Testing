include "MatrixClass.h"

using namespace std;

int main()
{

	MPVector v1("Engine", {1,2,3,4});
	MPVector v2("Drag", {5,6,7,8});

	Matrix m1("ED", {v1,v2});

	m1.print();

	v1.print();
	v2.print();
	addVectors(v1, v2).print();
	subtractVectors(v1,v2).print();
	averageVectors(v1,v2).print();
	cout << "V1*V2: " << dotProduct(v1,v2) << '\n';
	return 1;
}
