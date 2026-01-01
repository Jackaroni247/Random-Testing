using namespace std;

struct byte
{
    bool bits[8];
    void print(void) {
        for(int i = 0; i<8; i++) {
            cout << bits[i];
        }
        cout << '\n';
    }
};

struct mem
{
    byte bytes;
    void mem(x) {
        bytes = byte{x};
    }
}

byte AND(byte a, byte b)
{
    byte c;
    for(int i = 0; i < 8; i++) {
        c.bits[i] = a.bits[i] && b.bits[i];
    }
    return c;
}
byte OR(byte a, byte b)
{
    byte c;
    for(int i = 0; i < 8; i++) {
        c.bits[i] = a.bits[i] || b.bits[i];
    }
    return c;
}