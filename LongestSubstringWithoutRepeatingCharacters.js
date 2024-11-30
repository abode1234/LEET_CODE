function  LongestSubstringWithoutRepeatingCharacters(s) {


    let maxLength = 0;
    let charSet = new Set();
    let left = 0;
    let right = 0;

    for (right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }


    return maxLength;
}


console.log(LongestSubstringWithoutRepeatingCharacters("abcabcbb"))
console.log(LongestSubstringWithoutRepeatingCharacters("bbbbb"))
console.log(LongestSubstringWithoutRepeatingCharacters("pwwkew"))
