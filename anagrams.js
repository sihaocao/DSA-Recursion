// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, 
// rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word.

function getAnagrams(str) {
    let results = [];
    if (str.length === 1) {
        results.push(str);
        return results;
    } else {
        for (let i = 0; i < str.length; i++) {
            let firstCharacter = str[i];
            let characterssLeft = str.substring(0, i) + str.substring(i+1);
            let innerAnagrams = getAnagrams(characterssLeft);
            for (let j = 0; j < innerAnagrams.length; j++) {
                results.push(firstCharacter + innerAnagrams[j])
            }
        }
    }
    return results;
}
getAnagrams('east');