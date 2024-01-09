#include <bits/stdc++.h>
using namespace std;

void sortArray(vector<int> &nums)
{
    int count0 = 0, count1 = 0, count2 = 0;
    for (int i = 0; i < nums.size(); i++)
    {
        if (nums[i] == 0)
        {
            count0++;
        }
        else if (nums[i] == 1)
        {
            count1++;
        }
        else
        {
            count2++;
        }
    }
    vector<int> output;

    for (int i = 0; i < count0; i++)
    {
        nums[i] = 0;
    }
    for (int i = count0; i < count0 + count1; i++)
    {
        nums[i] = 1;
    }
    for (int i = count0 + count1; i < count0 + count1 + count2; i++)
    {
        nums[i] = 2;
    }
}

int main()
{
    vector<int> nums{2, 0, 2, 1, 1, 0};
    sortArray(nums);

    for (auto it : nums)
    {
        cout << it << " ";
    }
}