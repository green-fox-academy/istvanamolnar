//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
function sumOfNums(n: number): any {
    if (n <= 0){
        return 0;
    }
    return n + sumOfNums(n - 1);
}
console.log(sumOfNums(10));