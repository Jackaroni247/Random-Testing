#include <cmath>
#include <iostream>
#include <cstdlib>
#include <limits>
#include <string>

using namespace std;

class Elements
{
public:
    string symbol;
    float atomicMass;
    void write(string sym, float weight);
};

void Elements::write(string sym, float weight)
{
    symbol[0] = sym[0];
    symbol[1] = sym[1];
    atomicMass = weight;
}

Elements elm[118];

int check = 0;
int correctSym = -1;
string inputSym;
string newStr;

int main(void)
{
    elm[0].write("H", 1.0078);
    elm[1].write("He", 4.0026);
    elm[2].write("Li", 6.941);
    elm[3].write("Be", 9.0122);
    elm[4].write("B", 10.811);
    elm[5].write("C", 12.011);
    elm[6].write("N", 14.007);
    elm[7].write("O", 15.999);
    elm[8].write("F", 18.998);
    elm[9].write("Ne", 20.18);
    elm[10].write("Na", 22.99);
    elm[11].write("Mg", 24.305);
    elm[12].write("Al", 26.982);
    elm[13].write("Si", 28.086);
    elm[14].write("P", 30.974);
    elm[15].write("S", 32.065);
    elm[16].write("Cl", 35.453);
    elm[17].write("Ar", 39.948);
    elm[18].write("K", 39.098);
    elm[19].write("Ca", 40.078);
    elm[20].write("Sc", 44.956);
    elm[21].write("Ti", 47.867);
    elm[22].write("V", 50.942);
    elm[23].write("Cr", 51.996);
    elm[24].write("Mn", 54.938);
    elm[25].write("Fe", 55.845);
    elm[26].write("Co", 58.933);
    elm[27].write("Ni", 58.693);
    elm[28].write("Cu", 63.546);
    elm[29].write("Zn", 65.38);
    elm[30].write("Ga", 69.723);
    elm[31].write("Ge", 72.64);
    elm[32].write("As", 74.922);
    elm[33].write("Se", 78.96);
    elm[34].write("Br", 79.904);
    elm[35].write("Kr", 83.798);
    elm[36].write("Rb", 85.468);
    elm[37].write("Sr", 87.62);
    elm[38].write("Y", 88.906);
    elm[39].write("Zr", 91.224);
    elm[40].write("Nb", 92.906);
    elm[41].write("Mo", 95.95);
    elm[42].write("Tc", 98);
    elm[43].write("Ru", 101.07);
    elm[44].write("Rh", 102.91);
    elm[45].write("Pd", 106.42);
    elm[46].write("Ag", 107.87);
    elm[47].write("Cd", 112.41);
    elm[48].write("In", 114.82);
    elm[49].write("Sn", 118.71);
    elm[50].write("Sb", 121.76);
    elm[51].write("Te", 127.6);
    elm[52].write("I", 126.9);
    elm[53].write("Xe", 131.29);
    elm[54].write("Cs", 132.91);
    elm[55].write("Ba", 137.33);
    elm[56].write("La", 138.91);
    elm[57].write("Ce", 140.12);
    elm[58].write("Pr", 140.91);
    elm[59].write("Nd", 144.24);
    elm[60].write("Pm", 145);
    elm[61].write("Sm", 150.36);
    elm[62].write("Eu", 151.96);
    elm[63].write("Gd", 157.25);
    elm[64].write("Tb", 158.93);
    elm[65].write("Dy", 162.5);
    elm[66].write("Ho", 164.93);
    elm[67].write("Er", 167.26);
    elm[68].write("Tm", 168.93);
    elm[69].write("Yb", 173.04);
    elm[70].write("Lu", 174.97);
    elm[71].write("Hf", 178.49);
    elm[72].write("Ta", 180.95);
    elm[73].write("W", 183.84);
    elm[74].write("Re", 186.21);
    elm[75].write("Os", 190.23);
    elm[76].write("Ir", 192.22);
    elm[77].write("Pt", 195.08);
    elm[78].write("Au", 196.97);
    elm[79].write("Hg", 200.59);
    elm[80].write("Tl", 204.38);
    elm[81].write("Pb", 207.2);
    elm[82].write("Bi", 208.98);
    elm[83].write("Po", 209);
    elm[84].write("At", 210);
    elm[85].write("Rn", 222);
    elm[86].write("Fr", 223);
    elm[87].write("Ra", 226);
    elm[88].write("Ac", 227);
    elm[89].write("Th", 232.04);
    elm[90].write("Pa", 231.04);
    elm[91].write("U", 238.03);
    elm[92].write("Np", 237.05);
    elm[93].write("Pu", 244);
    elm[94].write("Am", 243);
    elm[95].write("Cm", 247);
    elm[96].write("Bk", 247);
    elm[97].write("Cf", 251);
    elm[98].write("Es", 252);
    elm[99].write("Fm", 257);
    elm[100].write("Md", 258);
    elm[101].write("No", 259);
    elm[102].write("Lr", 262);
    elm[103].write("Rf", 261);
    elm[104].write("Db", 262);
    elm[105].write("Sg", 269);
    elm[106].write("Bh", 264);
    elm[107].write("Hs", 269);
    elm[108].write("Mt", 278);
    elm[109].write("Ds", 281);
    elm[110].write("Rg", 282);
    elm[111].write("Cn", 285);
    elm[112].write("Nh", 286);
    elm[113].write("Fl", 289);
    elm[114].write("Mc", 289);
    elm[115].write("Lv", 293);
    elm[116].write("Ts", 294);
    elm[117].write("Og", 294);

    for (int i = 0; i != 1; i+=0)
    {
        cout << "Enter 1 for Grams to Moles & Atoms\nEnter 2 for Moles to Grams & Atoms\n";
        cin >> check;
        if (check == 1)
        {
            while (correctSym == -1)
            {

                cout << "Enter the atomic symbol for your element: ";
                cin >> inputSym;
                for (int i = 0; i <= 117; i++)
                {

                    newStr[0] = elm[i].symbol[0];
                    newStr[1] = elm[i].symbol[1];
                    if ((newStr[0] == inputSym[0]) && (newStr[1] == inputSym[1]))
                    {
                        correctSym = i;
                    }
                }
            }
            float grams = 0;

            while (grams == 0)
            {
                cout << "Enter the amount of grams of the element: ";
                cin >> grams;
                cin.clear();
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
            cout << "Moles: " << grams / elm[correctSym].atomicMass << "\nAtoms: " << grams / elm[correctSym].atomicMass * 6.02214076 * pow(10, 23) << "\n";
            i = -1;
        }
        else if (check == 2)
        {
            while (correctSym == -1)
            {
                cout << "Enter the atomic symbol for your element: ";
                cin >> inputSym;
                for (int i = 0; i <= 117; i++)
                {

                    newStr[0] = elm[i].symbol[0];
                    newStr[1] = elm[i].symbol[1];
                    if ((newStr[0] == inputSym[0]) && (newStr[1] == inputSym[1]))
                    {
                        correctSym = i;
                    }
                }
            }
            float moles = 0;
            while (moles == 0)
            {
                cout << "Enter the amount of moles of the element: ";
                cin >> moles;
                cin.clear();
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
            cout << "Grams: " << moles * elm[correctSym].atomicMass << "\nAtoms: " << moles * 6.02214076 * pow(10, 23) << "\n";
            i = -1;
        }
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }
    cout << "Press Enter To Continue...";
    cin;
    return (0);
}
