// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


var longestCommonPrefix = function(strs) {

    let prefix = "";

    if (strs === null || strs.length === 0) {
        return prefix
    }


    for (let i = 0; i < strs[0].length; i++) {
        const firstchar = strs[0][i];
        //         loop through  all the characters of the first string

        for (let j = 1; j < strs.length; j++) {
            const secchar = strs[j][i];
            //             Check if the first character of str 1 and 2 matches. If not, prefix remains 0
            if (secchar !== firstchar) return prefix;
        }

        prefix = prefix + firstchar;
    }
    return prefix;
};