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
	vector<vector<float>> m3;
	for(int i = 0; i < m1.nRows; i++) {
		m3.insert(m3.end(), {});
		for(int j = 0; j < m1.nCols; j++) {
			m3[i].insert(m3[i].end(), m1.matrix[i][j]+m2.matrix[i][j]);
               	}
        }
	Matrix M3("Sum", m3);
	return M3;
}

Matrix subtractMatrices(Matrix m1, Matrix m2) {
        if(m1.nRows!=m2.nRows || m1.nCols!=m2.nCols) {
                cout << "Matrices are not of the same dimension" << '\n';
                return m1;
        }
	vector<vector<float>> m3;
	for(int i = 0; i < m1.nRows; i++) {
		m3.insert(m3.end(), {});
		for(int j = 0; j < m1.nCols; j++) {
			m3[i].insert(m3[i].end(), m1.matrix[i][j] - m2.matrix[i][j]);
		}
	}
	Matrix M3("Difference", m3);
	return M3;
}
