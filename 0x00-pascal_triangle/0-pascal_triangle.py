#!/usr/bin/python3

"""
Pascal triangle implemention 
"""


def pascal_traingle(n):
    """
    returns the list of the numbers forming the pascal
    triangle
    """
    if n <= 0:
        return []

    pascal_traingle = [0] * n

    for i in range(n):
        # defining a row and filling the first and the last index with 1
        new_row = [0] * (i + 1)
        new_row[0] = 0
        new_row[len(new_row) - 1] = 1

        for j in range(1, i):
            if j > 0 and j < len(new_row):
                a = pascal_traingle[i - 1][j]
                b = pascal_traingle[i - 1][j - 1]
                new_row[j] = a + b

            pascal_traingle[i] = new_row

    return pascal_traingle
