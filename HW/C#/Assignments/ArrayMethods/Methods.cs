using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayMethodsAssignment.Methods;

internal class Methods
{
    public int[] Append(int[] arr, int num)
    {
        if (arr?.Length == 0)
        {
            return new[] { num };
        }
        int[] newArr = new int[arr.Length + 1];
        for (int i = 0; i < arr.Length; i++)
        {
            newArr[i] = arr[i];
        }
        newArr[arr.Length] = num;
        return newArr;

    }

    public string GetIndexes(int[] arr, int num)
    {
        string indexes = "";
        int counter = 0;
        for (int i = 0; i < arr.Length; i++)
        {
            if (arr[i] == num)
            {
                indexes += $"{counter} ";
                counter++;
            }
        }
        if (counter == 0)
        {
            return null;
        }
        return indexes;
    }

    public int[] GetItemsAbove(int[] arr, int num)
    {
        int[] newArr;
        int counter = 0;
        for (int i = 0; i < arr.Length; i++)
        {
            if (arr[i] > num)
            {
                counter++;
            }
        }
        if (counter == 0)
        {
            return null;
        }
        newArr = new int[counter];
        for (int i = 0; i < newArr.Length; i++)
        {
            if (arr[i] > num)
            {
                newArr[i] = arr[i];
            }
        }
        return newArr;
    }

    public int[] GetItemsExcept(int[] arr, int num)
    {
        int[] newArr;
        int counter = 0;
        for (int i = 0; i < arr.Length; i++)
        {
            if (arr[i] != num)
            {
                counter++;
            }
        }
        if (counter == 0)
        {
            return null;
        }
        newArr = new int[counter];
        for (int i = 0; i < newArr.Length; i++)
        {
            if (arr[i] != num)
            {
                newArr[i] = arr[i];
            }
        }
        return newArr;
    }

    public int[] GetAllContains(int[] arr, int num)
    {
        int[] newArr;
        int counter = 0;
        for (int i = 0; i < arr.Length; i++)
        {
            if (NumContainDigit(arr[i], num))
            {
                counter++;
            }

        }
        if (counter == 0)
        {
            return null;
        }
        newArr = new int[counter];
        for (int i = 0; i < newArr.Length; i++)
        {
            if (NumContainDigit(arr[i], num))
            {
                newArr[i] = arr[i];
            }
        }
        return newArr;
    }

    public bool NumContainDigit(int num, int digit)
    {
        while (num != 0)
        {
            if (digit == num % 10)
                return true;
            num %= 10;
        }
        return false;
    }

    public int[] GetSorted(int[] arr)
    {
        if (arr?.Length == 0)
        {
            return null;
        }
        int temp;
        int[] newArr = new int[arr.Length];

        for (int i = 0; i < arr.Length; i++)
        {
            newArr[i] = arr[i];
        }

        for (int i = 0; i < newArr.Length - 1; i++)
        {
            for (int j = i; j < newArr.Length; j++)
            {
                if (newArr[i] < newArr[j])
                {
                    temp = newArr[i];
                    newArr[i] = newArr[j];
                    newArr[j] = temp;
                }
            }

        }
        return newArr;
    }

    public bool AreItemsSame(int[] arr)
    {

        if (arr?.Length == 0)
        {
            return true;
        }

        int value = arr[0];
        for (int i = 0; i < arr.Length; i++)
        {
            if (arr[i] != value)
            {
                return false;
            }
        }
        return true;

    }
}