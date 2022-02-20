
// A program that will sum all of the result that are divisible by 3 and 5.
let i = 1;
let sum = 0;
while( i <= 100)
{
    if( i%3 == 0 && i%5 == 0)

    {
        sum = sum + i;
        console.log(i);
    }

    i = i + 1;
}

console.log("The Summation is: " + sum);