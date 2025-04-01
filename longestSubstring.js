function lengthOfLongestSubstring(s) {
  let seen = new Set(); // Stores unique characters
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]); // Remove duplicate
      left++;
    }
    seen.add(s[right]); // Add new character
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// **Test Cases**
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
