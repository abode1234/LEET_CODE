/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
    a = "aa"
    b = "a*"
var isMatch = function(s, p) {
  var dp = Array(s.length + 1).fill(0).map(_ => Array(p.length + 1));
  return helper(dp, 0, 0, s, p);
};

var helper = function (dp, i, j, s, p) {
  var res = false;
  if (dp[i][j] !== undefined) return dp[i][j];
  if (j === p.length) {
    res = i === s.length;
  } else {
    if (i === s.length) {
      res = p[j + 1] === '*' && helper(dp, i, j + 2, s, p);
    } else if (s[i] === p[j] || p[j] === '.') {
      if (p[j + 1] === '*') {
        res = helper(dp, i + 1, j, s, p) || helper(dp, i, j + 2, s, p) || helper(dp, i + 1, j + 2, s, p);
      } else {
        res = helper(dp, i + 1, j + 1, s, p);
      }
    } else {
      res = p[j + 1] === '*' && helper(dp, i, j + 2, s, p);
    }
  }
  dp[i][j] = res;
  return res;
};

console.log(isMatch(a, b))




