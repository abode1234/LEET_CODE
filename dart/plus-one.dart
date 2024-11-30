// class Solution {
//   List<int> plusOne(List<int> digits) {
//   //TODO : Add 1 to the last num
//     BigInt num = BigInt.parse(digits.join(''));// [1,2,3]
//     num +=  BigInt.one;
//     print(num);
//     return num //[1,2,4]
//     .toString()
//     .split('')
//     .map((e) => int.parse(e))
//     .toList();
//   }
// }

// class Solution {
//  List<int> plusOne(List<int> digits) {
//     List<int> newItems = digits.toList();
//
//     for (int index = digits.length - 1; index >= 0; index--) {
//       if (digits[index] < 9) {
//         newItems[index] = newItems[index] + 1;
//
//         if (index < (digits.length - 1)) {
//           newItems.replaceRange(index + 1, digits.length,
//               List.generate(digits.length - index - 1, (_) => 0));
//         }
//         break;
//       } else if (digits[index] == 9 && index == 0) {
//
//         newItems.replaceRange(index, digits.length,
//             List.generate(digits.length - index, (_) => 0));
//         newItems.insert(0, 1);
//         break;
//       }
//     }
//
//     return newItems;
//   }
// }


class Solution {
  List<int> plusOne(List<int> digits) {
    int num = digits.length - 1;

    for (int idx = num; idx >= 0; idx--) {
      if (digits[idx] < 9) {
        digits[idx] += 1;
        return digits;
      }
      digits[idx] = 0;

      if (idx == 0) {
        digits.insert(0, 1);
        return digits;
      }
    }
    return digits;
  }
}

void main() {
  List<List<int>> testCases = [
    [1, 2, 3],
    [4, 3, 2, 1],
    [9],
    [9, 9, 9],
    [0],
  ];

  for (var digits in testCases) {
    List<int> result = Solution().plusOne(digits);
    print('Input: $digits => Output: $result');
  }
}











