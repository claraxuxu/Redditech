#include <stdio.h>

int my_strlen(char *str)
{
    int i = 0;

    for (; str[i]; i++);
    return (i);
}

void inf_add(char **av)
{
    int a = my_strlen(av[1]);
    printf("%d\n", a);
}

int main(int ac, char **av)
{
    inf_add(av);
    return (0);
}