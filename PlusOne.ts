//direct solution

// function plusOne(digits: number[]): number[] {
//
// const num = BigInt(digits.join(''))
//
// const res = num + BigInt(1)
// return res
// .toString()
// .split('')
// .map(Number)
// };

//loop solution

function plusOne(digits: number[]): number[] {

    const lastIndex = digits.length - 1;

    for(let idx = lastIndex; idx >= 0 ; idx--){

        if(digits[idx] < 9){
            digits[idx]++;
            return digits
        }
        if(digits[idx] === 9){
            digits[idx] = 0;
        }if(idx === 0){
            digits.unshift(1);
            return digits
        }

    }

}

console.log(plusOne([9]))

