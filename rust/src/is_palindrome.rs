pub struct Solution;

impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 || (x % 10 == 0 && x != 0) {
            return false;
        }

        let (mut rev, mut org) = (0, x);

        while org > 0 {
            rev = (rev * 10) + org % 10;
            org /= 10;
        }

        rev == x
    }
}
