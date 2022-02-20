
const n = 100;
for( let i = 1; i <= n; i++)
{


        if(i%3==0 && i%5 == 0)
        {
            console.log( i + " FizzBuzz ");
        }
        else if ( i%3 == 0)
        {
            console.log(i + " Fizz ");
        }
        else if( i%5 == 0)       
        {
        console.log(i +" Buzz ");
        }
        else
        {
            console.log(i);
        }
}


// a program to condtruct a pettern

let x, y, char;
for( x = 1 ; x <= 16; x++)
{
    for (y =1;   y < x; y++)
    {
        char = char + (" *");
    }

console.log(char);
char = '';
}
