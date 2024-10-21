#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <wctype.h>
#include <stdbool.h>
#include <ctype.h>

int main(void)
{
    char newStr[1000];
    char str[1000];
    printf("Enter A String\n");
    scanf("%s", str);

    int l = 0;

    for (int i = 0; str[i] != '\0'; i++)
    {
        if (isalpha(str[i]))
        {
            newStr[l] = str[i];
            l += 1;
        }
    }
    newStr[l] = '\0';
    printf("%s", newStr);
    return (0); // Returns 0
}