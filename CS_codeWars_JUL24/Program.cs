using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// TEMPLATE

///////////////////////////////codeWars DDMMMYY///////////////////////////////

// TASK

// PARAMETERS

// RETURNS

// EXAMPLES

// PSEUDOCODE

// SOLUTION

// BEST SOLUTION

namespace CS_codeWars_JUL24
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Insert function to be tested here
        }

        ///////////////////////////////codeWars 11JUL2024///////////////////////////////

        // TASK
        //This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

        //public class Kata
        //{
        //    public static string A = "code";
        //    public static string B = "wa.rs";
        //    public static string Name = "A + B";
        //}

        // PARAMETERS
        // no parameters, only code fixing

        // RETURNS
        // no returns, only code fixing

        // EXAMPLES
        // no examples, only code fixing

        // PSEUDOCODE
        // check if each variable is initialized properly

        // SOLUTION
        //public class Kata
        //{
        //    public static string A = "code";
        //    public static string B = "wa.rs";
        //    public static string Name = A + B;
        //}

        // BEST SOLUTION

        ///////////////////////////////codeWars 15JUL2024///////////////////////////////

        // TASK
        //We need a simple function that determines if a plural is needed or not.It should take a number, and return true if a plural should be used with that number or false if not.This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

        //You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

        // PARAMETERS
        // function will receive a number, no strings or other data types
        // number will be a double data type
        // number will not have any decimals

        // RETURNS
        // return true if n === 0 ||  || n < 1|| n > 1
        // else if n === 1, return false

        // EXAMPLES
        // n = 14, return true
        // n = 1, return false
        // n = 0, return 

        // PSEUDOCODE
        // get input
        // move into conditional, if n === 0 || n > 1 || n < 1 return true
        // else if n === 1, return false

        // SOLUTION
        //public class Kata
        //{
        //    public static bool Plural(double n)
        //    {
        //        if (n == 0 || n > 1)
        //        {
        //            return true;
        //        } else
        //        {
        //            return false;
        //        }
        //    }
        //}

        // BEST SOLUTION

        //public class Kata
        //{
        //    public static bool Plural(double n)
        //    {
        //        return n != 1;
        //    }
        //}

        // TASK
        //In this Kata we are passing a number (n) into a function.

        //Your code will determine if the number passed is even (or not).

        //The function needs to return either a true or false.

        //Numbers may be positive or negative, integers or floats.

        //Floats with decimal part non equal to zero are considered UNeven for this kata.


        // PARAMETERS
        // receieve n as argument
        // n can be negative or positive
        // n can be an integer or float data type
        // if n has a decimal part not equal to zero, it is consderd uneven
        // no strings will be passed in as n

        // RETURNS
        // return true if even
        // return false if not even

        // EXAMPLES
        // n = 2 // true
        // n = 3 // false
        // n = 3.2 // false
        // n = 100.0 // true

        // PSEUDOCODE
        // receive n as argument
        // use % 2 to determine if even or odd
        // use conditional, if even return true, else return odd

        // SOLUTION
        //public class Number
        //{
        //    public bool IsEven(double n)
        //    {
        //        if (n % 2 == 0)
        //        {
        //            return true;
        //        } else
        //        {
        //            return false;
        //        }
        //    }
        //}

        // BEST SOLUTION


    }
}


