#include <iostream>
#include <cmath>
#include <string>
#include "MPVectorClass.h"

using namespace std;

class Matrix {
public:
       	string name;
        vector<vector<float>> matrix;
        int nRows;
        int nCols;

        Matrix(string n, vector<MPVector> m) {
                name = n;
                for(int i = 0; i < m.size(); i++) {
                        matrix.insert(matrix.end(), m[i].components);
                }
                nRows = matrix.size();
                nCols = matrix[0].size();
        }

	Matrix(string n, vector<vector<float>> m) {
                name = n;
                matrix = m;
        }

	void print() {
                cout << name << ": \n";
                for(int i = 0; i < nRows; i++) {
                        cout << "| ";
                        for(int j = 0; j < nCols; j++) {
                                cout << matrix[i][j] << ' ';
                        }
                        cout << '|' << '\n';
                }
        }
};

Matrix addMatrices(Matrix m1, Matrix m2) {


        return m1;
}

Matrix subtractMatrices(Matrix m1, Matrix m2) {

        return m1;
}
