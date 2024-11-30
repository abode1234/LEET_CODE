mod plusOne;
use plusOne::Solution;
fn main() {
    let digits = vec![1, 2, 3];
    let result = Solution::plus_one(digits);
    println!("{:?}", result);
}
