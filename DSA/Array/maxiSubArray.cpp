#include <bits/stdc++.h>
using namespace std;

vector<int> maxiSumArray(vector<int> &nums)
{
    // int sum = 0, maxi = INT_MIN;
    // vector<int> output;
    // for (int i = 0; i < nums.size(); i++)
    // {
    //     sum = 0;
    //     for (int j = i; j < nums.size(); j++)
    //     {
    //         sum = sum + nums[j];
    //         maxi = max(maxi, sum);
    //     }
    // }
    // output.push_back(maxi);
    // return output;

    vector<int> output;
    int maxi = -1, sum = 0;
    for (int i = 0; i < nums.size(); i++)
    {
        sum = sum + nums[i];
        maxi = max(maxi, sum);
        if (sum < 0)
        {
            sum = 0;
        }
    }
    output.push_back(maxi);
    return output;
}

int main()
{
    vector<int> nums{-2, 1, -3, 4, -1, 2, 1, -5, 4};
    vector<int> ans;
    ans = maxiSumArray(nums);
    for (auto it : ans)
    {
        cout << it << "";
    }
}