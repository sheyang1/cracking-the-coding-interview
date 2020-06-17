function isOneAway (str1, str2) {
    let shorter,
        longer,
        isOneAway;
    if (str1.length > str2.length) {
      shorter = str2;
      longer = str1;
    } else {
      shorter = str1;
      longer = str2;
    }
    if (longer.length - shorter.length > 1) {
        return false;
    }
    isOneAway = str1.length === str2.length ? canReplace(str1, str2) : canInsert(shorter, longer);
    return isOneAway;
}

function canReplace(str1, str2) {
  let doesNotEqual = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      doesNotEqual++;
      if (doesNotEqual > 1) return false;
    }
  }
  return true;
}

function canInsert(shorter, longer) {
  let doesNotEqual = 0;
  for (let i = 0, j = 0; i < shorter.length && j < longer.length; i++, j++) {

    if (shorter[i] !== longer[j]) {
      if (doesNotEqual === 0) {
        if (shorter[i] === longer[j+1]){
          j++
        }
        doesNotEqual++;
      } else {
        return false;
      }
    }
  }
  return true;
}


console.log(isOneAway('cat', 'bat'));



/*
-insert
-remove
-delete

perform operations 1 at a time
remove and insert done together?

1. if === length, has to be replace
2. check that no more than 1 character is different

3. one difference in size

'cat', 'cats'
 'ple' 'pale' 

choose the shorter string
    when you find a character that does not match corresponding character in logner
        insert character from longer
    continue checking index values of both strings
        if another pair does not match, return false
        otherwise return true
*/