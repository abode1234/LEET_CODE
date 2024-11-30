// Palindrome Number


var isPalindrome = function(x) {

const num = x.toString().split('');
const rev = num.toReversed();

if (num.join('') === rev.join('')) {
    return true

}return false


};


isPalindrome(121)
isPalindrome(-121)
isPalindrome(10)


