#include <stdio.h>
#include <stdbool.h>

bool isPrime(int num)
{
    for (int i = 2; i <= num / 2; i++)
    {
        if (num % i == 0)
        {
            return (false);
        }
    }
    return (true);
}

int main(void)
{
    int number;
    printf("Enter A Number:\n");
    scanf("%i", &number);
    printf("\n");
    for (int i = 0; i <= number; i++)
    {
        if (isPrime(i))
        {
            printf("%i\n", i);
        }
    }
    return (0);
}