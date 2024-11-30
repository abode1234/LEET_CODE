pub struct Solution;

impl Solution {
    pub fn plus_one(mut digits: Vec<i32>) -> Vec<i32> {
        let last_idx = digits.len() - 1;

        for idx in (0..=last_idx).rev() {
            if digits[idx] < 9 {
                digits[idx] += 1;
                return digits;
            }
            digits[idx] = 0;

            if idx == 0 {
                digits.insert(0, 1);
                return digits;
            }
        }

        digits
    }
}
