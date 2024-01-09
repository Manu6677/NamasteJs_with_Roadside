// C++ code for the above approach:
#include <bits/stdc++.h>
using namespace std;

void SetMatrixZeroes(vector<vector<int>> &arr)
{
    int n = arr.size(), m = arr[0].size();

    // To store which rows and columns
    // are supposed to mark with zeroes.
    vector<int> row(n, 0), col(m, 0);

    // Traverse the matrix using
    // 2 nested loops
    for (int i = 0; i < arr.size(); i++)
    {
        for (int j = 0; j < arr[0].size(); j++)
        {

            // If the cell contains zero
            // then mark its row
            // and column zero
            if (arr[i][j] == 0)
            {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }
    for (int i = 0; i < arr.size(); i++)
    {
        for (int j = 0; j < arr[0].size(); j++)
        {

            // Mark cells zero if any
            // of the row[i] or col[j] is 1
            if (row[i] || col[j])
                arr[i][j] = 0;
        }
    }
}

// Driver Code
int main()
{
    vector<vector<int>> arr = {{0, 1, 2, 0},
                               {3, 4, 5, 2},
                               {1, 3, 1, 5}};

    // Function call
    SetMatrixZeroes(arr);
    for (int i = 0; i < arr.size(); i++)
    {
        for (int j = 0; j < arr[0].size(); j++)
        {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
