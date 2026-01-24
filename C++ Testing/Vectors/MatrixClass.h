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
	//Checks to make sure theyre the same size;
	if(m1.nRows!=m2.nRows || m1.nCols!=m2.nCols) {
		cout << "Matrices are not of the same dimension" << '\n';
		return m1;
	}

	for(int i = 0; i < m1.nRows; i++) {
		for(int j = 0; j < m1.nCols; j++) {
			
               	}
        }
	return m1;
}

Matrix subtractMatrices(Matrix m1, Matrix m2) {
        if(m1.nRows!=m2.nRows || m1.nCols!=m2.nCols) {
                cout << "Matrices are not of the same dimension" << '\n';
                return m1;
        }
	return m1;
}
