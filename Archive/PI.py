Pi = 1
Accuracy = int(input('Input The Accuracy Desired Along The Gregory-Leibniz Series\n'))

i = 1

check = 'Negative'

while i < Accuracy:
    if (check == 'Negative'):
        Pi = Pi - 1/(1 + 2 * i)
        check = 'Positive'
    elif (check == 'Positive'):
        Pi = Pi + 1/(1 + 2 * i)
        check = 'Negative'

    i = i + 1

Pi = Pi * 4
print('PI Is ', Pi)
input('Press Enter To Continue..')