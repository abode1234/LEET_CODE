class Solution {
  bool isPalindrome(int x) {

    String num = x.toString();

    String revers = num.split('').reversed.join('');

    return num == revers;
  }
}

void main() {
  Solution solution = Solution();


  int num1 = 121;
  print('Is $num1 a palindrome? ${solution.isPalindrome(num1)}');

  int num2 = -121;
  print('Is $num2 a palindrome? ${solution.isPalindrome(num2)}');
  int num3 = 7;
  print('Is $num3 a palindrome? ${solution.isPalindrome(num3)}');


  int num4 = 123;
  print('Is $num4 a palindrome? ${solution.isPalindrome(num4)}');
}
